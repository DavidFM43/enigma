from typing import Tuple
from flask import Blueprint, request
from json import dumps
import json
from cryptools.gammalelip import encrypt_ECC, get_obj, decrypt_ECC

from tinyec import registry
import hashlib, secrets, binascii

curve = registry.get_curve('brainpoolP256r1')

bp = Blueprint("gammalelip", __name__, url_prefix="/gammaleip")

@bp.route("/getKeys", methods =["GET"])
def getKeyPair_r():
    """
    Generate of publicKey and privateKey
    """
    
    privKey:str = str(secrets.randbelow(curve.field.n))
    pubKey = privKey * curve.g

    pubKey = str(pubKey).split()

    coordenada: list = [pubKey[0].replace("(","").replace(",",""),  pubKey[1].replace(")","")]
     
    return dumps({
        "publicKey": {
            "Cooordenada": coordenada, 
        },
        "privateKey": {
            "integer": privKey,
        }
    })




@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    Rabin cipher encryption route.
    Receives plain text and n= p*q as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    request_data = request.get_json()
    plain_text: str = request_data["plainText"]
    plain_text:bytes = bytes(plain_text, 'utf-16')

    privKey: int = int(request_data["p"])
    pubKey = privKey * curve.g

    encryptedMsg = encrypt_ECC(plain_text, pubKey)
    encryptedMsgObj:dict = get_obj(encryptedMsg)
    
    error = False
    typeError = ""
    # lo que vamos enviar: 
   
    response_dict = {"ciphertext": encryptedMsgObj, "error": error, "typeError": typeError}
    
    return dumps(response_dict)


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    Rabin cipher decryption route.
    Receives cipher text, p prime and q prime  as request arguments
    Returns JSON with clear text and, if needed, error information.
    """
    request_data = request.get_json()

    cipher_text: str = request_data["cipherText"]
    nonce: str = request_data["nonce"]
    authTag: str = request_data["authTag"]
    ciphertextPubKey_x: str = request_data["ciphertextPubKey_x"]
    ciphertextPubKey_y:str = request_data["ciphertextPubKey_y"]

    dict_= {'ciphertext': cipher_text, 'nonce': nonce, 'authTag': authTag, 'ciphertextPubKey_x': ciphertextPubKey_x, 'ciphertextPubKey_y': ciphertextPubKey_y}

    privKey: int = int(request_data["p"])
    pubKey = privKey * curve.g

    decryptedMsg = decrypt_ECC(str(list(dict_.values())), str(privKey))

    plain_text = decryptedMsg.decode("utf-16")
    error = False
    typeError = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}
    return dumps(response_dict)



from typing import Tuple
from flask import Blueprint, request
from json import dumps
import json
from cryptools.gammalelip import encrypt_ECC

from tinyec import registry
import hashlib, secrets, binascii

curve = registry.get_curve('brainpoolP256r1')

bp = Blueprint("gammalelip", __name__, url_prefix="/gammaleip")

@bp.route("/getKeys", methods =["GET"])
def getKeyPair_r():
    """
    Generate of publicKey and privateKey

    Un espacio para poner mensaje: string y llave pública:
    punto de la curva (el formato es tinyec.ec.point) y 
    el output es un diccionario con el texto cifrado en hexadecimal como la primera entrada
    La llave privada es int
    Para desencriptar, el usuario provee el texto encriptado hexadecimal y la llave privada int, y devuelve un mensaje en byte (con la b’’)
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
    plain_text:bytes = (plain_text, 'utf-8')

    privKey: int = request_data["p"]
    pubKey = privKey * curve.g

    encryptedMsg = encrypt_ECC(plain_text, pubKey)
    ciphertext= str(binascii.hexlify(encryptedMsg[0]))
    
    error = False
    typeError = ""
    # lo que vamos enviar: 
   
    response_dict = {"ciphertext": ciphertext, "error": error, "typeError": typeError}
    
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
    privKey: int = request_data["p"]

    pubKey = privKey * curve.g

    decryptedMsg = decrypt_ECC(encryptedMsg, privKey)
    P: int = request_data["p"]
    G: int = request_data["g"]
    X: int = request_data["x"]

    priv_key = (P,G,X)


    plain_text = decrypt(priv_key, cipher_text)
    error = False
    typeError = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}
    return dumps(response_dict)



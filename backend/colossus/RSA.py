from flask import Blueprint, request
from cryptools.RSA import encrypt, decrypt, getKeyPair, rsa
from json import dumps


bp = Blueprint("rsa", __name__, url_prefix="/rsa")


@bp.route("/encrypt", methods=["GET"])
def encrypt_r():
    if "publicKeyN" in request.form and "publicKeyE" in request.form and "plainText" in request.form:
        publicKey = rsa.PublicKey(request.form["publicKeyN"], request.form["publicKeyE"])
        plainText = request.form["plainText"]

        cipher_text = encrypt(plainText, publicKey)#returns bytes

        if not cipher_text:
            response_dict = {"error": True, "typeError": "Encryption error"}
        
        response_dict = {"cipherText": cipher_text.hex(), "error": False}

        return dumps(response_dict)
    # bad request
    return 'bad request' , 400


@bp.route("/decrypt", methods=["GET"])
def decrypt_r():
    if "privateKeyN" in request.form and "privateKeyE" in request.form and "cipherText" in request.form:
        privateKey = rsa.PrivateKey(request.form["privateKeyN"], request.form["privateKeyE"])
        cipher_text = bytes.fromhex(request.form["cipherText"])#extract bytes from hex

        plain_text = decrypt(cipher_text, privateKey)#returns bytes

        if not plain_text:
            response_dict = {"error": True, "typeError": "Decryption error"}
        
        response_dict = {"plainText": plain_text, "error": False}

        return dumps(response_dict)
    # bad request
    return 'bad request' , 400
@bp.route("/getKeys", methods=["GET"])
def getKeyPair_r():
    keyPair = getKeyPair()
    return dumps({
        "publicKey": {
            "N":keyPair[0].n,
            "E": keyPair[0].e
        }, 
        "privateKey": {
            "N": keyPair[1].n,
            "E": keyPair[1].e,
            "D": keyPair[1].d,
            "P": keyPair[1].p,
            "Q": keyPair[1].q
        }
    })
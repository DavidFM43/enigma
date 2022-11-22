from flask import Blueprint, request
from cryptools.RSA import encrypt, decrypt, getKeyPair, calculeND,rsa
from json import dumps
import urllib.parse

bp = Blueprint("rsa", __name__, url_prefix="/rsa")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    request_data = request.get_json()
    if "N" in request_data and "E" in request_data and "plainText" in request_data:
        publicKey = rsa.PublicKey(int(request_data["N"]), int(request_data["E"]))
        plainText = request_data["plainText"]
        
        cipher_text = encrypt(plainText, publicKey)#returns bytes

        if not cipher_text:
            return dumps({"error": True, "typeError": "Encryption error"})

        return dumps({"cipherText": cipher_text, "error": False})
    # bad request
    return 'bad request' , 400


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    request_data = request.get_json()
    if "N" in request_data and "D" in request_data and "cipherText" in request_data:
        privateKey = rsa.PrivateKey(int(request_data["N"]), 2, int(request_data["D"]), 2, 3)
        cipherText = urllib.parse.unquote(request_data["cipherText"])
        
        decipherText = decrypt(cipherText, privateKey)#returns bytes

        if not decipherText:
            return dumps({"error": True, "typeError": "Encryption error"})

        return dumps({"decipherText": decipherText, "error": False})
    # bad request
    return 'bad request' , 400
@bp.route("/getKeys", methods=["GET"])
def getKeyPair_r():
    keyPair = getKeyPair()
    return dumps({
        "publicKey": {
            "N":str(keyPair[0].n),
            "E": keyPair[0].e
        }, 
        "privateKey": {
            "N": str(keyPair[1].n),
            "E": keyPair[1].e,
            "D": str(keyPair[1].d),
            "P": keyPair[1].p,
            "Q": keyPair[1].q
        }
    })
@bp.route("/getND", methods=["GET"])
def getND_r():
    if "P" in request.args and "Q" in request.args and "E" in request.args:

        P = int(request.args["P"])
        Q = int(request.args["Q"])
        E = int(request.args["E"])

        return calculeND(P, Q, E)
    # bad request
    return 'bad request' , 400
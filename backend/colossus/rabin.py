from typing import Tuple
from flask import Blueprint, request
from json import dumps
from cryptools.rabin import encrypt_rabin, decrypt_rabin, prime_3mod4

import json
import plotly
import plotly.express as px



bp = Blueprint("rabin", __name__, url_prefix="/rabin")

@bp.route("/getKeys", methods =["GET"])
def getKeyPair_r():
    """
    Generate of publicKey and privateKey
    """
    p,q = prime_3mod4()
    n = p*q
    return dumps({
        "publicKey": {
            "N": n
        },
        "privateKey": {
            "p": p,
            "q": q
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
    n: int = request_data["n"]
    
    cipher_text = encrypt_rabin(plain_text, n) 
    error = False
    typeError = ""
    # lo que vamos enviar: 
   
    response_dict = {"cipherText": cipher_text,  "error": error, "typeError": typeError}
    
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
    p: int = request_data["p"]
    q: int = request_data["q"]
    plain_text = decrypt_rabin(cipher_text, p,q)
    error = False
    typeError = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}
    return dumps(response_dict)



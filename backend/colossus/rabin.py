from flask import Blueprint, request
from json import dumps
from cryptools.rabin import encrypt_rabin, decrypt_rabin, prime_3mod4


bp = Blueprint("rabin", __name__, url_prefix="/rabin")


@bp.route("/getKeys", methods=["GET"])
def getKeyPair_r():
    """
    Generate of publicKey and privateKey
    """
    p, q = prime_3mod4()
    n = p * q
    print(n, p, q)

    return dumps({"publicKey": {"N": str(n)}, "privateKey": {"P": str(p), "Q": str(q)}})


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    Rabin cipher encryption route.
    Receives plain text and n= p*q as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    request_data = request.get_json()

    if (
        request_data
        and "n" in request_data.keys()
        and "plainText" in request_data.keys()
    ):

        plain_text: str = request_data["plainText"]
        n: int = int(request_data["n"])

        cipher_text = encrypt_rabin(plain_text, n)
        error = False
        typeError = ""

        response_dict = {
            "cipherText": cipher_text,
            "error": error,
            "typeError": typeError,
        }

        return dumps(response_dict)

    return dumps({"error": False}), 400


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    Rabin cipher decryption route.
    Receives cipher text, p prime and q prime  as request arguments
    Returns JSON with clear text and, if needed, error information.
    """
    request_data = request.get_json()

    if (
        request_data
        and "p" in request_data.keys()
        and "q" in request_data.keys()
        and "cipherText" in request_data.keys()
    ):
        cipher_text: str = request_data["cipherText"]
        p: int = int(request_data["p"])
        q: int = int(request_data["q"])

        plain_text_ops = decrypt_rabin(cipher_text, p, q)
        
        print(cipher_text)
        print(plain_text_ops)
        
        error = False
        typeError = ""

        response_dict = {
            "decipherTextOps": plain_text_ops,
            "error": error,
            "typeError": typeError,
        }

        return dumps(response_dict)

    return dumps({"error": False}), 400

from flask import Blueprint, request
from json import dumps
from cryptools.elgamal import generate_keys, encrypt, decrypt


bp = Blueprint("elgamal", __name__, url_prefix="/elgamal")


@bp.route("/getKeys", methods=["GET"])
def getKeyPair_r():
    """
    Generate of publicKey and privateKey
    """
    pub_key, priv_key = generate_keys()

    return dumps(
        {
            "P": pub_key[0],
            "G": pub_key[1],
            "H": pub_key[2],

            "X": priv_key[2],
        }
    )


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    Rabin cipher encryption route.
    Receives plain text and n= p*q as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    request_data = request.get_json()

    plain_text: str = request_data["plainText"]

    p: int = int(request_data["P"])
    g: int = int(request_data["G"])
    h: int = int(request_data["H"])

    pub_key = (p, g, h)

    cipher_text = encrypt(pub_key, plain_text)
    
    error = False
    typeError = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

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
    P: int = int(request_data["P"])
    G: int = int(request_data["G"])
    X: int = int(request_data["X"])

    print(cipher_text)

    priv_key = (P, G, X)

    plain_text = decrypt(priv_key, cipher_text)
    error = False
    typeError = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}
    return dumps(response_dict)

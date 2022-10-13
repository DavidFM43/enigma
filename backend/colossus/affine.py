from flask import Blueprint, request
from json import dumps
from cryptools.affine import encrypt, decrypt, attack


"""Affine cipher routes"""
bp = Blueprint("affine", __name__, url_prefix="/affine")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    Affine cipher encryption route.
    Receives plain text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    request_data = request.get_json()
    plain_text: str = request_data["plainText"]
    key = request_data["key"]

    try:
        cipher_text = encrypt(plain_text, key)
        error = False
        type_error = ""
    except Exception as e:
        cipher_text = ""
        error = True
        type_error = str(e) 

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": type_error}

    return dumps(response_dict)


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    Substitution cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]
    key = request_data["key"]

    try:
        plain_text = decrypt(cipher_text, key)
        error = False
        type_error = ""
    except Exception as e:
        plain_text = ""
        error = True
        type_error = str(e) 

    response_dict = {"decipherText": plain_text, "error": error, "typeError": type_error}

    return dumps(response_dict)


@bp.route("/attack", methods=["POST"])
def attack_r():
    """
    This route receives a `plain_text` JSON
    and returns some possible texts.
    """

    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]
    plain_text, key = attack(cipher_text)

    response_dict = {
        "plainText": plain_text,
        "key": key,
        "error": False,
        "typeError": "",
    }

    return dumps(response_dict)

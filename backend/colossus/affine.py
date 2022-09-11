from flask import Blueprint, request
from json import dumps
from cryptools.affine import encrypt, decrypt


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

    cipher_text = encrypt(plain_text, key)
    error = False
    typeError = ""
    if not cipher_text:
        error = True
        typeError = "First integer is not relatively prime with 26."
        cipher_text = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

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

    decipher_text = decrypt(cipher_text, key)
    error = False
    typeError=""
    if not decipher_text:
        error = True
        typeError = "First integer is not relatively prime with 26."
        decipher_text = ""

    response_dict = {"decipherText": decipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/attack/", methods=["GET"])
def attack_r():
    return dumps({})

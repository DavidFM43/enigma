from flask import Blueprint, request
from json import dumps
from cryptools.affine import encrypt, decrypt


"""Affine cipher routes"""
bp = Blueprint("affine", __name__, url_prefix="/affine")


@bp.route("/encrypt", methods=["GET"])
def encrypt_r():
    """
    Affine cipher encryption route.
    Receives plain text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    plain_text: str = request.args["plainText"]
    # TODO: Parse key to (int, int)
    key = request.args["key"]

    cipher_text = encrypt(plain_text, key)
    error = False
    if not cipher_text:
        error = True
        typeError = "First integer is not relatively prime with 26."
        cipher_text = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/decrypt", methods=["GET"])
def decrypt_r():
    """
    Substitution cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    cipher_text = request.args["textToDecrypt"]
    # TODO: Parse key to (int, int)
    key = request.args["key"]

    cipher_text = decrypt(plain_text, key)
    error = False
    if not cipher_text:
        error = True
        typeError = "First integer is not relatively prime with 26."
        cipher_text = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/attack/", methods=["GET"])
def attack_r():
    return dumps({})

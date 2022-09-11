from flask import Blueprint, request
from json import dumps
from cryptools.substitution import encrypt, decrypt


"""Substitution cipher routes"""
bp = Blueprint("substitution", __name__, url_prefix="/substitution")


@bp.route("/encrypt", methods=["GET"])
def encrypt_r():
    """
    Substitution cipher encryption route.
    Receives plain text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    plain_text: str = request.args["plainText"]
    key = request.args["key"]

    cipher_text = encrypt(plain_text, key)
    error = False
    typeError = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/decrypt", methods=["GET"])
def decrypt_r():
    """
    Substitution cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    cipher_text: str = request.args["textToDecrypt"]
    key = request.args["key"]

    plain_text = decrypt(cipher_text, key)
    error = False
    typeError = ""

    response_dict = {"cipherText": plain_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/attack/", methods=["GET"])
def attack_r():
    return dumps({})

from flask import Blueprint, request
from json import dumps
from cryptools.shift import encrypt, decrypt


"""Shift cipher routes"""
bp = Blueprint("shift", __name__, url_prefix="/shift")


@bp.route("/encrypt", methods=["GET"])
def encrypt_r():
    """
    Shift cipher encryption route.
    Receives plain text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    plain_text = request.args["plainText"]
    key = int(request.args["key"])

    cipher_text = encrypt(plain_text, key)
    error = False
    typeError = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/decrypt", methods=["GET"])
def decrypt_r():
    """
    Shift cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with clear text and, if needed, error information.
    """
    cipher_text = request.args["textToDecrypt"]
    key = int(request.args["key"])

    plain_text = decrypt(cipher_text, key)
    error = False
    typeError = ""

    response_dict = {"cipherText": plain_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/attack/", methods=["GET"])
def attack_r():
    return dumps({})

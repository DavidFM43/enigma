from flask import Blueprint, request
from json import dumps
from cryptools.shift import encrypt, decrypt, attack


"""Shift cipher routes"""
bp = Blueprint("shift", __name__, url_prefix="/shift")


@bp.route("/encrypt", methods=["GET"])
def encrypt_r():
    """
    Shift cipher encryption route.
    Receives plain text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    plain_text: str = request.args["plainText"]
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
    cipher_text: str = request.args["cipherText"]
    key = int(request.args["key"])

    plain_text = decrypt(cipher_text, key)
    error = False
    typeError = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/attack/", methods=["GET"])
def attack_r():
    """Returns a dictionary of all 26 possible (decryption, key) pairs"""
    cipher_text: str = request.args["cipherText"]

    return dumps(attack(cipher_text))

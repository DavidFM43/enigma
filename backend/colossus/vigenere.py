from flask import Blueprint, request
from json import dumps
from cryptools.vigenere import encrypt, decrypt


"""Vigenère cipher routes"""
bp = Blueprint("vigenere", __name__, url_prefix="/vigenere")


@bp.route("/encrypt", methods=["GET"])
def encrypt_r():
    """
    Vigenère cipher encryption route.
    Receives plain text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    plain_text = request.args["plainText"]
    key = request.args["key"]

    cipher_text = encrypt(plain_text, key)
    error = False
    typeError = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/decrypt", methods=["GET"])
def decrypt_r():
    """
    Vigenère cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with clear text and, if needed, error information.
    """
    cipher_text = request.args["textToDecrypt"]
    key = request.args["key"]

    plain_text = decrypt(cipher_text, key)
    error = False
    typeError = ""

    response_dict = {"cipherText": plain_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/attack/", methods=["GET"])
def attack_r():
    return dumps({})

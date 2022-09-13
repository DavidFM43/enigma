from flask import Blueprint, request
from json import dumps
from cryptools.permutation import encrypt, decrypt
from cryptools.hill import attack


"""Permutation cipher routes"""
bp = Blueprint("permutation", __name__, url_prefix="/permutation")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    Permutation cipher encryption route.
    Receives plain text and key as request argumentss
    Returns JSON with cipher text and if needed error information.
    """
    request_data = request.get_json()
    plain_text: str = request_data["plainText"]
    key: list[int] = request_data["key"]

    cipher_text = encrypt(plain_text, key)
    error = False
    typeError = ""

    if not cipher_text:
        error = True
        typeError = "No se puede dividir la cadena en m subcadenas de tamaño m"
        cipher_text = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    Permutation cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]
    key = request_data["key"]

    plain_text = decrypt(cipher_text, key)
    error = False
    typeError = ""

    if not plain_text:
        error = True
        typeError = "No se puede dividir la cadena en subcadenas de tamaño n"
        plain_text = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/attack", methods=["POST"])
def attack_r():
    """
    This route receives a `cipher_text`, `plain_text` and ` m := matrix size ` from the request's JSON
    and returns a possible key.
    """

    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]
    plain_text: str = request_data["plainText"]
    m: int = request_data["matrixSize"]

    possible_key = attack(cipher_text, plain_text, m)

    return dumps({"possible_key": possible_key})

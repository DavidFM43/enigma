from flask import Blueprint, request
from json import dumps
from cryptools.vigenere import (
    encrypt,
    decrypt,
    kasiski_test,
    index_of_coincidence,
    attack,
)


"""Vigenère cipher routes"""
bp = Blueprint("vigenere", __name__, url_prefix="/vigenere")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    Vigenère cipher encryption route.
    Receives plain text and key as request arguments
    Returns JSON with cipher text and if needed error information.
    """

    request_data = request.get_json()
    plain_text: str = request_data["plainText"]
    key = request_data["key"]

    cipher_text = encrypt(plain_text, key)
    error = False
    typeError = ""

    response_dict = {"cipherText": cipher_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    Vigenère cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with clear text and, if needed, error information.
    """

    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]
    key = request_data["key"]

    plain_text = decrypt(cipher_text, key)
    error = False
    typeError = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}

    return dumps(response_dict)


@bp.route("/kasiski", methods=["POST"])
def kasiski_test_r():
    """
    This route returns a JSON object containing the possible key size using the
    kasiski test.
    """
    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]

    return dumps(kasiski_test(cipher_text))


@bp.route("/ioc", methods=["POST"])
def ioc_test_r():
    """
    This route returns a JSON object containing the possible key size using the
    index of coincidence test.
    """
    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]

    return dumps(index_of_coincidence(cipher_text))


@bp.route("/attack", methods=["POST"])
def attack_r():
    """
    This route receives a `cipher_text` and `key_size` from the request's JSON
    and returns a possible key.
    """

    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]
    key_size = request_data["key_size"]

    possible_key = attack(cipher_text, key_size)
    possible_plain_text = decrypt(cipher_text, possible_key)

    return dumps(
        {"possible_key": possible_key, "possible_plain_text": possible_plain_text}
    )

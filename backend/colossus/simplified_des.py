from flask import Blueprint, request
from cryptools.simplified_des import encrypt_text, decrypt_text
from json import dumps


bp = Blueprint("simplified_des", __name__, url_prefix="/simplified_des")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():

    request_data = request.get_json()

    if (
        request_data
        and "key" in request_data.keys()
        and "plainText" in request_data.keys()
    ):

        key = int(request_data["key"], 2)
        plain_text = request_data["plainText"]

        cipher_text = encrypt_text(key, plain_text)

        response_dict = {"cipherText": cipher_text, "error": False, "typeError": ""}

        return dumps(response_dict)

    # bad request
    return dumps({"error": False}), 400


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():

    request_data = request.get_json()

    if (
        request_data
        and "key" in request_data.keys()
        and "cipherText" in request_data.keys()
    ):

        key = int(request_data["key"], 2)
        cipher_text = request_data["cipherText"]

        plain_text = decrypt_text(key, cipher_text)

        response_dict = {"decipherText": plain_text, "error": False, "typeError": ""}

        return dumps(response_dict)

    # bad request
    return dumps({"error": False}), 400

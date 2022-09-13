from PIL import Image
import numpy as np
from flask import Blueprint, request, send_file
from cryptools.hill import encrypt_image, decrypt_image, attack
from werkzeug.utils import secure_filename
from json import dumps


"""Hill cipher routes"""
bp = Blueprint("hill", __name__, url_prefix="/hill")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    This route receives an image file `img` and a key `key` over the request,
    saves it locally, encrypts the image, and overwrites the original image with
    the encrypted image, before sending it as a response.
    """
    data = request.get_json()

    if data is not None:
        key = data["key"]
        img = request.files["img"]

        # save image locally
        if img.filename is not None:
            f_local_path = f"/imgs/{secure_filename(img.filename)}"
        else:
            f_local_path = "/imgs/img.jpg"

        img.save(f_local_path)

        # open image, cast to numpy array and encrypt
        cipher_image_arr = encrypt_image(np.array(img.open(f_local_path)), key)

        # save the cipher image array to an image file
        Image.fromarray(cipher_image_arr).save(f_local_path)

        return send_file(f_local_path)

    # bad request
    return dumps({"success": False}), 400


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    This route receives an image file `img` and a key `key` over the request,
    saves it locally, decrypts the image, and overwrites the cipher image with
    the decrypted image, before sending it as a response.
    """
    data = request.get_json()

    if data is not None:
        key = data["key"]
        img = request.files["img"]

        # save image locally
        if img.filename is not None:
            img_local_path = f"/imgs/{secure_filename(img.filename)}"
        else:
            img_local_path = "/imgs/img.jpg"

        img.save(img_local_path)

        # open image, cast to numpy array and encrypt
        cipher_image_arr = decrypt_image(np.array(img.open(img_local_path)), key)

        # save the cipher image array to an image file
        Image.fromarray(cipher_image_arr).save(img_local_path)

        return send_file(img_local_path)

    # bad request
    return dumps({"success": False}), 400


@bp.route("/attack", methods=["POST"])
def attack_r():
    """
    This route receives a `cipher_text`, `plain_text` and ` m := matrix size ` from the request's JSON
    and returns a possible key.
    """

    request_data = request.get_json()
    cipher_text: str = request_data["cipherText"]
    plain_text: str = request_data["plainText"]
    m: int = request_data[" matrixSize"]

    possible_key = attack(cipher_text, plain_text, m)


    return dumps(
        {"possible_key": possible_key}
    )

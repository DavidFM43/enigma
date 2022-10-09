from flask import Blueprint, request, send_file
from cryptools.hill import encrypt_image, decrypt_image, attack

from math import sqrt
from PIL import Image
import numpy as np
from tempfile import gettempdir
from os.path import join
from json import dumps


"""Hill cipher routes"""
bp = Blueprint("hill", __name__, url_prefix="/hill")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    This route receives an image file `img` and a list `key` over the request,
    saves the image temporarily, encrypts the image and sends it to the client.
    """

    if "key" in request.form and "file" in request.files:

        key = request.form["key"]
        img = request.files["file"]

        # set image path
        if img.filename is not None:
            file_type = img.filename.rsplit(".", 1)[1].lower()
            img_path = join(gettempdir(), f"plain_image.{file_type}")
        else:
            img_path = join(gettempdir(), "plain_image.png")

        # save image in temp directory
        img.save(img_path)

        # parse incoming data
        m = int(sqrt(len(key.split(","))))
        key = np.array(key.split(",")).astype(int).reshape(m, m)
        plain_image_arr = np.array(Image.open(img_path))

        # open image, cast to numpy array and encrypt
        cipher_image_arr = encrypt_image(plain_image_arr, key)

        # save the cipher image array to an image file
        Image.fromarray(cipher_image_arr).save(img_path, "png")

        # TODO: Handle errors
        return send_file(img_path, as_attachment=True)

    # bad request
    return dumps({"error": False}), 400

@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    This route receives an image file `img` and a list `key` over the request,
    saves the image temporarily, decrypts the image and sends it to the client.
    """

    if "key" in request.form and "file" in request.files:

        key = request.form["key"]
        img = request.files["file"]

        # set image path
        if img.filename is not None:
            file_type = img.filename.rsplit(".", 1)[1].lower()
            img_path = join(gettempdir(), f"plain_image.{file_type}")
        else:
            img_path = join(gettempdir(), "plain_image.png")

        # save image in temp directory
        img.save(img_path)

        # parse incoming data
        m = int(sqrt(len(key.split(","))))
        key = np.array(key.split(",")).astype(int).reshape(m, m)
        cipher_image_arr = np.array(Image.open(img_path))

        # open image, cast to numpy array and encrypt
        plain_image_arr = decrypt_image(cipher_image_arr, key)

        # save the cipher image array to an image file
        Image.fromarray(plain_image_arr).save(img_path, "png")

        # TODO: Handle errors
        return send_file(img_path, as_attachment=True)

    # bad request
    return dumps({"error": False}), 400


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

    possible_key, error, error_type = attack(cipher_text, plain_text, m)

    response_dict = {
        "possibleKey": possible_key,
        "error": error,
        "typeError": error_type,
    }

    return dumps(response_dict)

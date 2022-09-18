from http.client import IM_USED
import math
from PIL import Image
import numpy as np
from flask import Blueprint, request, send_file
from cryptools.hill import encrypt_image, decrypt_image, attack
from werkzeug.utils import secure_filename
from json import dumps

import sys

"""Hill cipher routes"""
bp = Blueprint("hill", __name__, url_prefix="/hill")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    This route receives an image file `img` and a key `key` over the request,
    saves it locally, encrypts the image, and overwrites the original image with
    the encrypted image, before sending it as a response.
    """
    key = request.form["key"]
    if key is not None:
        img = request.files["file"]

        # save image locally
        if img.filename is not None:
            f_local_path = f"/home/juanitoalimanha/Documents/Criptografia/colossus/frontend/src/assets/imgs/img.png"
        else:
            f_local_path = "/home/juanitoalimanha/Documents/Criptografia/colossus/frontend/src/assets/imgs/img.jpg"

        img.save(f_local_path)

        key =  np.array(list(map(int, key.split(","))))
        sizeMtx = math.floor(math.sqrt(len(key)))

        # open image, cast to numpy array and encrypt
        cipher_image_arr = encrypt_image(np.array(Image.open(f_local_path)), key.reshape((sizeMtx, sizeMtx)))

        # save the cipher image array to an image file
        Image.fromarray(cipher_image_arr).save(f_local_path)
        error = False
        typeError = ""
        return dumps({"cipherImagePath":f_local_path,  "error": error, "typeError": typeError})

    # bad request
    return dumps({"success": False}), 400


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    This route receives an image file `img` and a key `key` over the request,
    saves it locally, decrypts the image, and overwrites the cipher image with
    the decrypted image, before sending it as a response.
    """
    key = request.form["key"]
    if key is not None:
        img = request.files["file"]

        # save image locally
        if img.filename is not None:
            f_local_path = f"/home/juanitoalimanha/Documents/Criptografia/colossus/frontend/src/assets/imgs/img2.png"
        else:
            f_local_path = "/home/juanitoalimanha/Documents/Criptografia/colossus/frontend/src/assets/imgs/img2.jpg"

        img.save(f_local_path)

        key =  np.array(list(map(int, key.split(","))))
        sizeMtx = math.floor(math.sqrt(len(key)))


        # open image, cast to numpy array and encrypt
        cipher_image_arr = decrypt_image(np.array(Image.open(f_local_path)), key.reshape((sizeMtx, sizeMtx)))

        # save the cipher image array to an image file
        Image.fromarray(cipher_image_arr).save(f_local_path)
        error = False
        typeError = ""
        
        return dumps({"cipherImagePath":f_local_path,  "error": error, "typeError": typeError})

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
    m: int = request_data["matrixSize"]

    possible_key, error, error_type = attack(cipher_text, plain_text, m)

    response_dict = {
        "possibleKey": possible_key,
        "error": error,
        "typeError": error_type,
    }

    return dumps(response_dict)

from flask import Blueprint, request, send_file
from cryptools.aes import encrypt_image, decrypt_image
from os.path import join
from tempfile import gettempdir
import numpy as np
from PIL import Image
from json import dumps


bp = Blueprint("aes", __name__, url_prefix="/aes")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():

    if "key" in request.form and "mode" in request.form and "file" in request.files:

        key = request.form["key"]
        mode = request.form["mode"]
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
        key = bytes.fromhex(key)
        plain_img_arr = np.array(Image.open(img_path))
        kwargs = dict()

        if mode in ["CBC", "OFB", "CFB"]:
            init_vector = request.form["initializationVector"]
            init_vector = bytes.fromhex(init_vector)
            kwargs["iv"] = init_vector
        elif mode == "CTR":
            ctr = request.form["counter"]
            ctr = bytes.fromhex(ctr)
            kwargs["initial_value"] = ctr

        # open image, cast to numpy array and encrypt
        cipher_img_arr = encrypt_image(plain_img_arr, key, mode, **kwargs)

        # save the cipher image array to an image file
        Image.fromarray(cipher_img_arr).save(img_path, "png")

        # TODO: Handle errors
        return send_file(img_path, as_attachment=True)

    # bad request
    return dumps({"error": False}), 400


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():

    if "key" in request.form and "mode" in request.form and "file" in request.files:

        key = request.form["key"]
        mode = request.form["mode"]
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
        key = bytes.fromhex(key)
        cipher_img_arr = np.array(Image.open(img_path))
        kwargs = dict()

        if mode in ["CBC", "OFB", "CFB"]:
            init_vector = request.form["initializationVector"]
            init_vector = bytes.fromhex(init_vector)
            kwargs["iv"] = init_vector
        elif mode == "CTR":
            ctr = request.form["counter"]
            ctr = bytes.fromhex(ctr)
            kwargs["initial_value"] = ctr

        # open image, cast to numpy array and encrypt
        plain_img_arr = decrypt_image(cipher_img_arr, key, mode, **kwargs)

        # save the cipher image array to an image file
        Image.fromarray(plain_img_arr).save(img_path, "png")

        # TODO: Handle errors
        return send_file(img_path, as_attachment=True)

    # bad request
    return dumps({"error": False}), 400

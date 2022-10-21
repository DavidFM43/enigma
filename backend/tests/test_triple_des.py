from cryptools.triple_des import (
    encrypt_image,
    decrypt_image,
)
import numpy as np
from PIL import Image


key = b"holamellamodavid"


def test_ecb():

    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/bw.png"))
    cipher_img_arr = np.asarray(Image.open("tests/imgs/block/cipher_triple_des/bw.png"))

    assert np.array_equal(cipher_img_arr, encrypt_image(plain_img_arr, key, "ecb"))

    assert np.array_equal(plain_img_arr, decrypt_image(cipher_img_arr, key, "ecb"))


def test_cbc():

    iv = b"initvect"

    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/city.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_triple_des/city.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "cbc", iv=iv)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "cbc", iv=iv)
    )


def test_ofb():

    iv = b"initvect"

    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/deers.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_triple_des/deers.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "ofb", iv=iv)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "ofb", iv=iv)
    )


def test_cfb():

    iv = b"initvect"

    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/deers.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_triple_des/deers.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "ofb", iv=iv)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "ofb", iv=iv)
    )


def test_ctr():

    ctr = b"casaverd"

    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/woman.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_triple_des/woman.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "ctr", initial_value=ctr)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "ctr", initial_value=ctr)
    )

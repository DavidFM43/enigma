from cryptools.aes import (
    encrypt_image,
    decrypt_image,
)
import numpy as np
from PIL import Image


key = bytes.fromhex("36 0D 3B 72 0E 4D EA 2B 19 18 06 D7 9E BD BA 19")
iv = bytes.fromhex("3E B2 66 97 3F 64 CC A0 4F E6 B5 A7 F6 95 D3 27")
ctr = bytes.fromhex("8C F1 AC 1A B2 A1 AE D6 32 73 85 D5 B2 19 62 9F")


def test_ecb():
    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/bw.png"))
    cipher_img_arr = np.asarray(Image.open("tests/imgs/block/cipher_aes/bw.png"))

    assert np.array_equal(cipher_img_arr, encrypt_image(plain_img_arr, key, "ECB"))

    assert np.array_equal(plain_img_arr, decrypt_image(cipher_img_arr, key, "ECB"))


def test_cbc():
    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/city.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_aes/city.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "CBC", iv=iv)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "CBC", iv=iv)
    )


def test_ofb():
    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/deers.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_aes/deers.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "OFB", iv=iv)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "OFB", iv=iv)
    )


def test_cfb():
    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/tree.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_aes/tree.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "CFB", iv=iv)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "CFB", iv=iv)
    )


def test_ctr():
    plain_img_arr = np.asarray(Image.open("tests/imgs/block/clear/woman.png"))
    cipher_img_arr = np.asarray(
        Image.open("tests/imgs/block/cipher_aes/woman.png")
    )

    assert np.array_equal(
        cipher_img_arr, encrypt_image(plain_img_arr, key, "CTR", initial_value=ctr)
    )

    assert np.array_equal(
        plain_img_arr, decrypt_image(cipher_img_arr, key, "CTR", initial_value=ctr)
    )

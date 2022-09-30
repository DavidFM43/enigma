from cryptools.hill import encrypt_text, decrypt_text, encrypt_image, decrypt_image, attack
import numpy as np
from PIL import Image

plain_img = np.asarray(Image.open("tests/imgs/plain_image.png"))
cipher_img = np.asarray(Image.open("tests/imgs/cipher_image.png"))

def test_encrypt_text():
    assert encrypt_text("july", [[11, 8], [3, 7]]) == "DELW"


def test_decrypt_text():
    assert decrypt_text("DELW", [[11, 8], [3, 7]]) == "july"


def test_encrypt_image():
    assert np.array_equal(
        cipher_img, encrypt_image(plain_img, np.array([[11, 8], [3, 7]]))
    )


def test_decrypt_image():
    assert np.array_equal(
        plain_img, decrypt_image(cipher_img, np.array([[11, 8], [3, 7]]))
    )


def test_attack():
    assert attack("PQCFKU", "friday", 2)[0] == [7, 19, 8, 3]
    pass

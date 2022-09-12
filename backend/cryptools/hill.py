"""
Hill cipher.
Key must be a matrix in Z^{m x m}.  
"""

import numpy as np
from urllib import request
from PIL import Image
from util import str2int, int2str
from sympy import Matrix
from sympy.matrices.common import NonInvertibleMatrixError


def encrypt_image(img_arr: np.ndarray, key):
    """
    Encrypts an image `img_arr` in the form of Numpy NDarray
    with a invertible matrix `key` using the Hill cipher.

    Returns the encrypted image array of the same shape.
    """
    return encrypt(img_arr.flatten(), key, 256).astype(np.uint8).reshape(*img_arr.shape)


def decrypt_image(img_arr: np.ndarray, key):
    """
    Decrypts an image `img_arr` in the form of Numpy NDarray
    with a invertible matrix `key` using the Hill cipher.

    Returns the original image array.
    """
    return decrypt(img_arr.flatten(), key, 256).astype(np.uint8).reshape(*img_arr.shape)


def encrypt_text(plain_text: str, key):
    """
    Encrypts a text `plain_text` given the matrix `key` with the Hill cipher.
    """
    data = str2int(plain_text)
    return int2str(encrypt(data, key, 26)).upper()


def decrypt_text(cipher_text: str, key):
    """
    Decrypts a cipher text `cipher_text` given the matrix `key` with the Hill cipher.
    """
    data = str2int(cipher_text.lower())
    return int2str(decrypt(data, key, 26)).lower()


def encrypt(data, key, mod):
    """
    Encrypts the numerical data `data` with the matrix key `key` modulo `mod`
    using the Hill cipher
    """
    try:
        Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        return False

    m = len(key)
    key = np.array(key)

    if len(data) % m == 0:
        xs = [np.array(data[i : i + m]) for i in range(0, len(data), m)]
        ys = [(xs[i] @ key) % mod for i in range(len(xs))]
    else:
        raise Exception("Data length must be a multiple of the order of the key.")

    return np.concatenate(ys)


def decrypt(data: np.ndarray, key, mod):
    """
    Decrypts the numerical data `data` with the matrix key `key` modulo `mod`
    using the Hill cipher
    """
    try:
        inv_key = Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        return False

    m = len(key)
    inv_key = np.array(inv_key)

    if len(data) % m == 0:
        xs = [np.array(data[i : i + m]) for i in range(0, len(data), m)]
        ys = [(xs[i] @ inv_key) % mod for i in range(len(xs))]
    else:
        raise Exception("Data length must be a multiple of the order of the key.")

    return np.concatenate(ys)


def attack():
    pass


if __name__ == "__main__":
    import re

    assert encrypt_text("july", [[11, 8], [3, 7]]) == "DELW"
    assert decrypt_text("DELW", [[11, 8], [3, 7]]) == "july"

    img_url = re.sub(
        re.compile(r"\s+"),
        "",
        """
        https://st2.depositphotos.com/2166845/
        5890/i/450/depositphotos_5890692
        9-stock-photo-cairn-terrier-puppy.jpg
        """,
    )

    img = Image.open(request.urlopen(img_url))

    img.show()

    img_arr = np.array(img)

    key = [[11, 8], [3, 7]]

    encrypted_img_arr = encrypt_image(img_arr, key)

    Image.fromarray(encrypted_img_arr).show()

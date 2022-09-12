"""
Hill cipher.
Key must be a matrix in Z^{m x m}.  
"""

import numpy as np
from util import str2int, int2str
from sympy import Matrix
from sympy.matrices.common import NonInvertibleMatrixError


def encrypt_text(plain_text: str, key):
    data = str2int(plain_text)
    return int2str(encrypt(data, key, 26)).upper()

def decrypt_text(cipher_text: str, key):
    data = str2int(cipher_text.lower())
    return int2str(decrypt(data, key, 26)).lower()

def encrypt(data, key, mod):
    try:
        Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        return False

    m = len(key)
    key = np.array(key)
    xs = [np.array(data[i : i + m]) for i in range(0, len(data), m)]
    ys = [(xs[i] @ key) % mod for i in range(len(xs))]

    return list(np.concatenate(ys))


def decrypt(data, key, mod):
    try:
        inv_key = Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        return False

    m = len(key)
    inv_key = np.array(inv_key)
    xs = [np.array(data[i : i + m]) for i in range(0, len(data), m)]
    ys = [(xs[i] @ inv_key) % mod for i in range(len(xs))]

    return list(np.concatenate(ys))


def attack():
    pass


if __name__ == "__main__":

    assert encrypt_text("july", [[11, 8], [3, 7]]) == "DELW"
    assert decrypt_text("DELW", [[11, 8], [3, 7]]) == "july"

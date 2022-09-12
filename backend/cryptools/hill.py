"""
Hill cipher.
Key must be a matrix in Z^{m x m}.  
(Question) What m's are allowed
"""
import numpy as np
from sympy import Matrix
from util import str2int, int2str
from sympy.matrices.common import NonInvertibleMatrixError


def encrypt(plain_text, key):

    plain_text = str2int(plain_text)
    m = len(key)

    try:
        Matrix(key).inv_mod(26)
    except NonInvertibleMatrixError:
        return False

    key = np.array(key)
    xs = [np.array(plain_text[i : i + m]) for i in range(0, len(plain_text), m)]
    ys = [(xs[i] @ key) % 26 for i in range(len(xs))]

    return int2str(list(np.concatenate(ys))).upper()


def decrypt(cipher_text: str, key):

    cipher_text = str2int(cipher_text.lower())
    m = len(key)

    try:
        inv_key = Matrix(key).inv_mod(26)
    except NonInvertibleMatrixError:
        return False

    inv_key = np.array(inv_key)
    xs = [np.array(cipher_text[i : i + m]) for i in range(0, len(cipher_text), m)]
    ys = [(xs[i] @ inv_key) % 26 for i in range(len(xs))]

    return int2str(list(np.concatenate(ys))).lower()


def attack():
    pass


if __name__ == "__main__":

    assert encrypt("july", [[11, 8], [3, 7]]) == "DELW"
    assert decrypt("DELW", [[11, 8], [3, 7]]) == "july"

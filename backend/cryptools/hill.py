"""
Hill cipher.
Key must be a matrix in Z^{m x m}.  
(Question) What m's are allowed
"""
import numpy as np
from sympy import Matrix
from string import ascii_lowercase
from sympy.matrices.common import NonInvertibleMatrixError
from .util import text_to_int, int_to_text

# char to int
c = {x: idx for idx, x in enumerate(ascii_lowercase)}
# int to char
d = {idx: x for idx, x in enumerate(ascii_lowercase)}


def encrypt(plain_text, key):

    plain_text = text_to_int(plain_text)
    m = len(key)

    try:
        Matrix(key).inv_mod(26)
    except NonInvertibleMatrixError:
        return False

    key = np.array(key)

    y = [np.array(plain_text[i : i + m]) for i in range(0, len(plain_text), m)]

    x = [(y[i] @ key) % 26 for i in range(len(y))]
    
    
    
    return x


def encrypt_t(text, key):

    key = Matrix(key)

    try:
        kinv = key.inv_mod(26)
    except:
        return "ERRORLaMatrizIngresadaNoEsInvertible"

    l = len(text)
    n = key.shape[0]

    text += "Z" * (n - l % n)

    chunks = [text[i : i + n] for i in range(0, l, n)]

    chunksequence = [sp.Matrix([ord(x.lower()) - 97 for x in i]) for i in chunks]

    ciphersequence = [key * i % 26 for i in chunksequence]

    sequence = [x for i in ciphersequence for x in i]

    cipher = "".join([chr(i + 97).upper() for i in sequence])

    return cipher


def decrypt_t(text, key):

    key = Matrix(key)

    l = len(text)
    n = key.shape[0]

    text += "Z" * (n - l % n)

    try:
        kinv = key.inv_mod(26)
    except:
        return "ERRORLaMatrizIngresadaNoEsInvertible"

    chunks = [text[i : i + n] for i in range(0, l, n)]

    chunksequence = [Matrix([ord(x.lower()) - 97 for x in i]) for i in chunks]

    ciphersequence = [kinv * i % 26 for i in chunksequence]

    sequence = [x for i in ciphersequence for x in i]

    text = "".join([chr(i + 97).upper() for i in sequence])

    return text


def attack():
    pass


if __name__ == "__main__":

    print(encrypt("july", [[11, 8], [3, 7]]))

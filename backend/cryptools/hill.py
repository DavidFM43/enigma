"""
Hill cipher.
Key must be a matrix in Z^{m x m}. 
"""
import sympy as sp


def encrypt(key: str, key) -> str:

    return ""


def encrypt_t(text, key):

    key = sp.Matrix(key)

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

    key = sp.Matrix(key)

    l = len(text)
    n = key.shape[0]

    text += "Z" * (n - l % n)

    try:
        kinv = key.inv_mod(26)
    except:
        return "ERRORLaMatrizIngresadaNoEsInvertible"

    chunks = [text[i : i + n] for i in range(0, l, n)]

    chunksequence = [sp.Matrix([ord(x.lower()) - 97 for x in i]) for i in chunks]

    ciphersequence = [kinv * i % 26 for i in chunksequence]

    sequence = [x for i in ciphersequence for x in i]

    text = "".join([chr(i + 97).upper() for i in sequence])

    return text


def attack():
    pass

import numpy as np
from sympy import Matrix
from sympy.matrices.common import NonInvertibleMatrixError
from cryptools.util import str2int, int2str


def encrypt_image(img_arr: np.ndarray, key: np.ndarray):
    """
    Encrypts an image `img_arr` in the form of a numpy NDarray with a invertible matrix `key`
    modulo 256 using the Hill cipher.

    Returns the encrypted image array of the same shape.
    """
    return encrypt(img_arr.flatten(), key, 256).astype(np.uint8).reshape(*img_arr.shape)


def decrypt_image(img_arr: np.ndarray, key):
    """
    Decrypts an image `img_arr` in the form of a numpy NDarray with a invertible matrix `key`
    modulo 256 using the Hill cipher.

    Returns the original image array.
    """
    return decrypt(img_arr.flatten(), key, 256).astype(np.uint8).reshape(*img_arr.shape)


def encrypt_text(plain_text: str, key) -> str:
    """
    Encrypts a text `plain_text` given the matrix `key` with the Hill cipher.
    """
    data = str2int(plain_text)

    return int2str(list(encrypt(data, key, 26))).upper()


def decrypt_text(cipher_text: str, key) -> str:
    """
    Decrypts a cipher text `cipher_text` given the matrix `key` with the Hill cipher.
    """
    data = str2int(cipher_text.lower())
    return int2str(list(decrypt(data, key, 26))).lower()


def encrypt(
    data: list[int] | np.ndarray, key: list[list] | np.ndarray, mod: int
) -> np.ndarray:
    """
    Encrypts the numerical data `data` with the matrix key `key` modulo `mod`
    using the Hill cipher.

    Partitions the data in chunks of size `len(key)`, multiplies each chunk by
    the `key` matrix modulo `mod`, and reassembles the data.
    """
    try:
        Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        raise Exception(f"The key matrix is not invertible modulo {mod}.")

    m = len(key)
    key = np.array(key)

    if len(data) % m == 0:
        xs = [np.array(data[i : i + m]) for i in range(0, len(data), m)]
        ys = [(xs[i] @ key) % mod for i in range(len(xs))]
    else:
        raise Exception(
            "Data length must be a multiple of the order of the key matrix."
        )

    return np.concatenate(ys)


def decrypt(
    data: list[int] | np.ndarray, key: list[list] | np.ndarray, mod: int
) -> np.ndarray:
    """
    Decrypts the numerical data `data` with the matrix key `key` modulo `mod`
    using the Hill cipher
    """
    try:
        inv_key = Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        raise Exception(f"The key matrix is not invertible modulo {mod}.")

    m = len(key)
    inv_key = np.array(inv_key)

    if len(data) % m == 0:
        xs = [np.array(data[i : i + m]) for i in range(0, len(data), m)]
        ys = [(xs[i] @ inv_key) % mod for i in range(len(xs))]
    else:
        raise Exception(
            "Data size must be a multiple of the order of the key matrix."
        )

    return np.concatenate(ys)


def attack(cipher_text, plain_text, m: int) -> list[list]:
    """
    Función para que retorna la llave del cripto sistema Hill
    """

    cipher_text, plain_text = str2int(cipher_text.lower()), str2int(plain_text)

    """
    Condición para poder formar la matriz cuadrada
    Función para dejar la lista para formar la matriz cuadrada
    """
    if len(plain_text) // m < m:
        raise Exception("Cannot form the square matrix, try another m")

    def square(lst: list) -> list[int]:
        l = list()
        for i in range(0, m * m):
            l.append(lst[i])
        return l

    cipher_text, plain_text = square(cipher_text), square(plain_text)

    try:
        inv_plain_text = Matrix(np.array(plain_text).reshape(m, m)).inv_mod(26)
    except NonInvertibleMatrixError:
        raise Exception("The key matrix is not invertible modulo 26.")

    """
    Sistema en Z_26:
    cipher_text = plain_text * K
    """
    # Producto con la inversa
    inv_plain_text = np.array(inv_plain_text)
    key = (inv_plain_text @ Matrix(np.array(cipher_text).reshape(m, m))) % 26
    key = np.array(key).astype(int).flatten().tolist()

    return key

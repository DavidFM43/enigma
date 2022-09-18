"""
Hill cipher.
Key must be a matrix in Z^{m x m}.  
"""

import numpy as np
from urllib import request
from PIL import Image
from sympy import Matrix
from sympy.matrices.common import NonInvertibleMatrixError
from string import ascii_lowercase

# char to int
char2int = {x: idx for idx, x in enumerate(ascii_lowercase)}
# int to char
int2char = {idx: x for idx, x in enumerate(ascii_lowercase)}


def str2int(plain_text: str) -> list[int]:
    """
    Convertir de string a int.

    Codificación:
    enumeración del alfabeto en ingles
    """
    return [char2int[l] for l in plain_text]


def int2str(integer_text: list[int]) -> str:
    """
    Convertir int a string

    Invierte la codificacion de str2int
    """
    return "".join([int2char[l] for l in integer_text])


def encrypt_image(img_arr, key):
    """
    Encrypts an image `img_file` in the form of a numpy NDarray with a invertible matrix `key`
    using the Hill cipher.

    Returns the encrypted image array of the same shape.
    """
    return encrypt(img_arr.flatten(), key, 256).astype(np.uint8).reshape(*img_arr.shape)


def decrypt_image(img_arr, key):
    """
    Decrypts an image `img_file` in the form of a numpy NDarray with a invertible matrix `key`
    using the Hill cipher.

    Returns the original image array.
    """
    return decrypt(img_arr.flatten(), key, 256).astype(np.uint8).reshape(*img_arr.shape)


def encrypt_text(plain_text: str, key) -> str:
    """
    Encrypts a text `plain_text` given the matrix `key` with the Hill cipher.
    """
    data = str2int(plain_text)

    return int2str(encrypt(data, key, 26)).upper()


def decrypt_text(cipher_text: str, key) -> str:
    """
    Decrypts a cipher text `cipher_text` given the matrix `key` with the Hill cipher.
    """
    data = str2int(cipher_text.lower())
    return int2str(decrypt(data, key, 26)).lower()


def encrypt(data: list, key: list[list], mod: int):
    """
    Encrypts the numerical data `data` with the matrix key `key` modulo `mod`
    using the Hill cipher
    """
    try:
        Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        return False

    # Partición de la cadena y solución del sistema
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

def attack(cipher_text: str, plain_text: str, m: int) -> list[list]:
    """
    Función para que retorna la llave del cripto sistema Hill
    """

def attack(cipher_text: str, plain_text: str, m: int) -> list[list]:
    """
    Función para que retorna la llave del cripto sistema Hill
    """

    # codificación a numeros
    cipher_text, plain_text = str2int(cipher_text.lower()), str2int(plain_text)

    """
    Condición para poder formar la matriz cuadrada
    Función para dejar la lista para formar la matriz cuadrada
    """
    if len(plain_text) // m < m:
        return "No se puede formar la matriz cuadrada, intente con otro m"

    def square(
        lst: list,
    ) -> list[int]:  # como se pued mejorar eso para no hacer una funcion
        l = list()
        for i in range(0, m * m):
            l.append(lst[i])
        return l

    cipher_text, plain_text = square(cipher_text), square(plain_text)


def attack(cipher_text: str, plain_text: str, m: int) -> tuple[list[list], bool, str]:
    """
    Función para que retorna la llave del cripto sistema Hill
    """

    # codificación a numeros
    cipher_text, plain_text = str2int(cipher_text.lower()), str2int(plain_text)

    """
    Condición para poder formar la matriz cuadrada
    Función para dejar la lista para formar la matriz cuadrada
    """
    if len(plain_text) // m < m:
        return [], True, "Cannot form the square matrix, try another m"

    def square(lst: list) -> list[int]:
        l = list()
        for i in range(0, m * m):
            l.append(lst[i])
        return l

    cipher_text, plain_text = square(cipher_text), square(plain_text)

    # exist inverse
    try:
        inv_plain_text = Matrix(np.array(plain_text).reshape(m, m)).inv_mod(26)
    except NonInvertibleMatrixError:
        return [], True, "The matrix is not invertible"

    """
    Sistema en Z_26:
    cipher_text = plain_text * K
    """
    # Producto con la inversa
    inv_plain_text = np.array(inv_plain_text)
    key = (inv_plain_text @ Matrix(np.array(cipher_text).reshape(m, m))) % 26
    key = np.array(key).astype(int).flatten().tolist()

    return key, False, ""

    def square(lst: list)->list[int]:#como se pued mejorar eso para no hacer una funcion
        l = list()
        for i in range(0, m*m):
            l.append(lst[i])
        return l
    cipher_text, plain_text = square(cipher_text), square(plain_text)


    #exist inverse
    try:
        inv_plain_text = Matrix(np.array(plain_text).reshape(m, m)).inv_mod(26)
    except NonInvertibleMatrixError:
        return False

    """
    Sistema en Z_26:
    cipher_text = plain_text * K
    """
    # Producto con la inversa
    key = (inv_plain_text @ Matrix(np.array(cipher_text).reshape(m,m)) ) %26 

    return list(key)

if __name__ == "__main__":
    import re

    assert encrypt_text("july", [[11, 8], [3, 7]]) == "DELW"
    assert decrypt_text("DELW", [[11, 8], [3, 7]]) == "july"
    assert attack("PQCFKU", "friday", 2)[0] == [7, 19, 8, 3]

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
    img_arr = np.array(img)

    img.show()

    key = [[11, 8], [3, 7]]
    encrypted_img_arr = encrypt_image(img_arr, key)

    Image.fromarray(encrypted_img_arr).show()

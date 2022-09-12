"""
Hill cipher.
Key must be a matrix in Z^{m x m}.  
"""


import numpy as np
from util import str2int, int2str
from sympy import Matrix
from sympy.matrices.common import NonInvertibleMatrixError


def encrypt_text(plain_text: str, key: list[list]) -> str:
    """
    Codificación del texto plano.
    """
    # Codificación de texto
    data = str2int(plain_text)

    return int2str(encrypt(data, key, 26)).upper()

def decrypt_text(cipher_text: str, key):
    data = str2int(cipher_text.lower())
    return int2str(decrypt(data, key, 26)).lower()

def encrypt(data: list, key: list[list], mod: int) -> str:
    """
    Encriptacion general
    """

    #Verifica que la matriz sea invertible
    try:
        Matrix(key).inv_mod(mod)
    except NonInvertibleMatrixError:
        return False
    
    #Partición de la cadena y solución del sistema
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

def attack(cipher_text: str, plain_text: str, m: int) -> list[list]:
    """
    Función para que retorna la llave del cripto sistema Hill
    """

    #codificación a numeros
    cipher_text, plain_text = str2int(cipher_text.lower()), str2int(plain_text)
    
    """
    Condición para poder formar la matriz cuadrada
    Función para dejar la lista para formar la matriz cuadrada
    """
    if len(plain_text)// m < m: return "No se puede formar la matriz cuadrada, intente con otro m" 

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

    assert encrypt_text("july", [[11, 8], [3, 7]]) == "DELW"
    assert decrypt_text("DELW", [[11, 8], [3, 7]]) == "july"
    assert attack("PQCFKU", "friday", 2) == [7, 19, 8,3]
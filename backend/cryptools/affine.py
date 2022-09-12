"""
Affine cipher.
`key` must a tuple of two integer from Z_26 and the firt one must be
relatively prime with 26
"""
from typing import Tuple, Union
from math import gcd
from util import char2int, int2char, probs
import string
import math


def encrypt(plain_text: str, key: Tuple[int, int]) -> Union[str, bool]:
    plain_text = plain_text.replace(" ", "").lower()
    a, b = key

    if gcd(a, 26) != 1:
        return False

    return "".join([int2char[(a * char2int[l] + b) % 26] for l in plain_text]).upper()


def decrypt(cipher_text: str, key: Tuple[int, int]) -> Union[str, bool]:
    cipher_text = cipher_text.replace(" ", "").lower()
    a, b = key

    if gcd(a, 26) != 1:
        return False

    a_inv = pow(a, -1, 26)

    return "".join(
        [int2char[(a_inv * (char2int[l] - b)) % 26] for l in cipher_text]
    ).lower()


"""
Conjetura

Las suposiciones seran apartir de los dos valores con mayor frecuencia 
de nuestra cadena, estos los coincidimos con los valores de mayor frecuencia
en la tabla de frecuencia para el idioma en ingles. Vamos a fijar el primer 
valor de mayor frecuencia y el otro iremos rotandolo a uno de menor 
frecuencia, esto para las dos tablas
"""


def attack(plain_cipher: str) -> str:
    """Comentarios de la funcion: """

    # Frecuencia de la caneda, alfabeto, Frecuencia en ingles
    frecuency_text = {i: plain_cipher.count(i) for i in set(plain_cipher)}
    alphabet = string.ascii_lowercase
    freq = {letter: freq for letter, freq in zip(alphabet, probs)}
    # freq = analysis.freq

    # Selección de la letra con mayor frecuencia
    letter_input = max(frecuency_text, key=frecuency_text.get)
    frecuency_text.pop(letter_input)

    letter = max(freq, key=freq.get)
    freq.pop(letter)

    # Indice de las dos letras de mayor frecuencia
    n, m = alphabet.index(letter.lower()), alphabet.index(letter_input.lower())

    """'
    Sistema en Z_26

        n*x + y = m
        p*x + y = q
    con n ,m , p y q estan en Z_26
    """
    # inversos
    inv = {
        1: 1,
        3: 9,
        5: 21,
        7: 25,
        9: 3,
        11: 19,
        15: 7,
        17: 23,
        19: 11,
        21: 5,
        23: 17,
        25: 25,
    }
    a = 0
    c = 0
    textos = list()
    # Proceso para la segunda conjetura
    while True:
        while True:
            letter_input = max(frecuency_text, key=frecuency_text.get)  # d->t
            frecuency_text.pop(letter_input)

            letter = max(freq, key=freq.get)
            if c == 3:
                # prueba de la siguiente mas frecuente
                freq.pop(letter)
                frecuency_text = dict()
                frecuency_text = {i: plain_cipher.count(i) for i in set(plain_cipher)}
                frecuency_text.pop(letter_input)
                c = 0

            p, q = alphabet.index(letter.lower()), alphabet.index(letter_input.lower())

            c += 1

            if (n - p) % 2 == 0 or (n - p) % 13 == 0:
                break

            x = int((m - q) * inv[(n - p) % 26]) % 26
            y = int((q - x * p) % 26)

            if math.gcd(x, 26) > 1:
                break

            textos.append(decrypt(plain_cipher, [x, y]))
            a += 1
            if a == 4:
                return textos


if __name__ == "__main__":
    assert encrypt("hot", (7, 3)) == "AXG"
    assert decrypt("AXG", (7, 3)) == "hot"

    cadena = "FMXVEDKAPHFERBNDKRXRSREFMORUDSDKDVSHVUFEDKAPRKDLYEVLRHHRH"
    p = attack(cadena)

    for i in p:
        print(i)

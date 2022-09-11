"""
Affine cipher.
`key` must a tuple of two integer from Z_26 and the firt one must be
relatively prime with 26
"""
from string import ascii_lowercase
from typing import Tuple, Union
from math import gcd

# char to int
c = {x: idx for idx, x in enumerate(ascii_lowercase)}
# int to char
d = {idx: x for idx, x in enumerate(ascii_lowercase)}


def encrypt(plain_text: str, key: Tuple[int, int]) -> Union[str, bool]:
    plain_text = plain_text.replace(" ", "").lower()
    a, b = key
    # TODO: especify error
    if gcd(a, 26) != 1:
        return False

    return "".join([d[(a * c[l] + b) % 26] for l in plain_text]).upper()


def decrypt(cipher_text: str, key: Tuple[int, int]) -> Union[str, bool]:
    cipher_text = cipher_text.replace(" ", "").lower()
    a, b = key
    # TODO: especify error
    if gcd(a, 26) != 1:
        return False

    a_inv = pow(a, -1, 26)
    return "".join([d[(a_inv * (c[l] - b)) % 26] for l in cipher_text]).lower()


def attack():
    pass


if __name__ == "__main__":
    key = (7, 3)
    assert encrypt("hot", key) == "AXG"
    assert decrypt("AXG", key) == "hot"

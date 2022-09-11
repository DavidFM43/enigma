"""
Affine cipher.
`key` must a tuple of two integer from Z_26 and the firt one must be
relatively prime with 26
"""
from typing import Tuple, Union
from math import gcd
from util import char2int, int2char

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

    return "".join([int2char[(a_inv * (char2int[l] - b)) % 26] for l in cipher_text]).lower()


def attack():
    pass


if __name__ == "__main__":
    assert encrypt("hot", (7, 3)) == "AXG"
    assert decrypt("AXG", (7, 3)) == "hot"

"""
Vigenère cipher.
`key` must a string of alphabetical characters
"""
from string import ascii_lowercase
from math import ceil


# char to int
c = {x: idx for idx, x in enumerate(ascii_lowercase)}
# int to char
d = {idx: x for idx, x in enumerate(ascii_lowercase)}


def encrypt(plain_text: str, key: str) -> str:
    key_int = [c[l] for l in key.lower()]
    plain_text_int = [c[l] for l in plain_text]
    n = ceil(len(plain_text_int) / len(key_int))

    return "".join(
        [d[(x + y) % 26] for x, y in zip(plain_text_int, key_int * n)]
    ).upper()


def decrypt(cipher_text: str, key: str) -> str:
    key_int = [c[l] for l in key.lower()]
    cipher_text_int = [c[l] for l in cipher_text.lower()]
    n = ceil(len(cipher_text_int) / len(key_int))

    return "".join(
        [d[(x - y) % 26] for x, y in zip(cipher_text_int, key_int * n)]
    ).lower()


def attack():
    pass


if __name__ == "__main__":
    clear_text = "thiscryptosystemisnotsecure"
    cipher_text = "VPXZGIAXIVWPUBTTMJPWIZITWZT"
    assert encrypt(clear_text, "CIPHER") == cipher_text
    assert decrypt(cipher_text, "CIPHER") == clear_text

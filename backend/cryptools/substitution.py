"""
Substitution cipher.

`key` must be a (uppercase) permutation of the english alphabet.
"""
import string


def encrypt(plain_text: str, key: str) -> str:

    plain_text = plain_text.replace(" ", "").lower()
    c = {e: d for e, d in zip(string.ascii_lowercase, key)}
    return "".join([c[l] for l in plain_text]).upper()


def decrypt(cipher_text: str, key: str) -> str:

    cipher_text = cipher_text.replace(" ", "").upper()
    d = {d: e for d, e in zip(key.upper(), string.ascii_lowercase)}
    return "".join(d[l] for l in cipher_text)


def attack():
    pass


if __name__ == "__main__":
    key = "XNYAHPOGZQWBTSFLRCVMUEKJDI"
    plain_text = "thisciphertextcannotbedecrypted"
    cipher_text = "MGZVYZLGHCMHJMYXSSFMNHAHYCDLMHA"
    assert encrypt(plain_text, key) == cipher_text
    assert decrypt(cipher_text, key) == plain_text

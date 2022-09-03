import string
from itertools import permutations


def encrypt(plain_text, key):
    alphabet = string.ascii_lowercase
    plain_text = plain_text.lower()
    table = str.maketrans(alphabet, key)
    decrypt_plain_text = plain_text.translate(table)
    return decrypt_plain_text.upper()


def decrypt(cipher_text, key):
    cipher_text = cipher_text.lower()
    alphabet = string.ascii_lowercase
    table = str.maketrans(key, alphabet)
    encrypt_plain_text = cipher_text.translate(table)
    return encrypt_plain_text


key = "fcpevqkzgmtrayonujdlwhbxsi"
print(encrypt("Hello", key))
print(decrypt("ZVRRO", key))

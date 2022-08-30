import string
from itertools import permutations


def encrypted(plain_text, key):
    alphabet = string.ascii_lowercase
    plain_text = plain_text.lower()
    table = str.maketrans(alphabet, key)
    decrypted_plain_text = plain_text.translate(table)
    return decrypted_plain_text.upper()


def decrypted(cipher_text, key):
    cipher_text = cipher_text.lower()
    alphabet = string.ascii_lowercase
    table = str.maketrans(key, alphabet)
    encrypted_plain_text = cipher_text.translate(table)
    return encrypted_plain_text


key = "fcpevqkzgmtrayonujdlwhbxsi"
print(encrypted("Hello", key))
print(decrypted("ZVRRO", key))

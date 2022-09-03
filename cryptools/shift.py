import string
import random


def encrypt(plain_text, key):
    plain_text = plain_text.replace(" ", "")
    plain_text = plain_text.lower()
    alphabet = string.ascii_lowercase
    shifted = alphabet[key:] + alphabet[:key]
    table = str.maketrans(alphabet, shifted)
    encrypt_plain_text = plain_text.translate(table)
    return encrypt_plain_text.upper()


def decrypt(cipher_text):
    cipher_text = cipher_text.lower()
    for i in range(1, 26):
        key = 26 - i
        key %= 26
        alphabet = string.ascii_lowercase
        shifted = alphabet[key:] + alphabet[:key]
        table = str.maketrans(alphabet, shifted)
        decrypt_plain_text = cipher_text.translate(table)
        print(decrypt_plain_text)


key = random.randint(1, 25)
plain_text = input()
print("Encrypting ......")
print(encrypt(plain_text, key))
cipher_text = encrypt(plain_text, key)
print("Decrypting ......")
print(decrypt(cipher_text))

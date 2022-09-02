import string
import random


def encrypted(plain_text, key):
    plain_text = plain_text.replace(" ", "")
    plain_text = plain_text.lower()
    alphabet = string.ascii_lowercase
    shifted = alphabet[key:] + alphabet[:key]
    table = str.maketrans(alphabet, shifted)
    encrypted_plain_text = plain_text.translate(table)
    return encrypted_plain_text.upper()


def decrypted(cipher_text):
    cipher_text = cipher_text.lower()
    for i in range(1, 26):
        key = 26 - i
        key %= 26
        alphabet = string.ascii_lowercase
        shifted = alphabet[key:] + alphabet[:key]
        table = str.maketrans(alphabet, shifted)
        decrypted_plain_text = cipher_text.translate(table)
        print(decrypted_plain_text)


key = random.randint(1, 25)
plain_text = input()
print("Encrypting ......")
print(encrypted(plain_text, key))
cipher_text = encrypted(plain_text, key)
print("Decrypting ......")
print(decrypted(cipher_text))

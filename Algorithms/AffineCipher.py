import string
import math as mt


def encryted(plain_text, key):
    plain_text = plain_text.lower()

    if mt.gcd(key[0], 26) != 1:
        return False

    alphabet = string.ascii_lowercase
    alphabet_copy = list(alphabet)
    for i in range(26):
        x = (key[0] * i + key[1]) % 26
        alphabet_copy[x] = alphabet[i]
    alphabet_copy = ''.join(alphabet_copy)
    table = str.maketrans(alphabet_copy, alphabet)
    decrypted_plain_text = plain_text.translate(table)
    return decrypted_plain_text.upper()


def decrypted(plain_cipher, key):

    plain_cipher = plain_cipher.lower()

    if mt.gcd(key[0], 26) != 1:
        return False

    inverse = pow(key[0], -1, 26)
    alphabet = string.ascii_lowercase
    alphabet_copy = list(alphabet)

    for i in range(26):
        x = (inverse*(i - key[1])) % 26
        alphabet_copy[x] = alphabet[i]

    alphabet_copy = ''.join(alphabet_copy)
    table = str.maketrans(alphabet_copy, alphabet)
    decrypted_plain_text = plain_cipher.translate(table)
    return decrypted_plain_text.lower()


key = [7, 3]
plain_cipher = encryted("hot", key)
print(plain_cipher)
plain_text = decrypted(plain_cipher, key)
print(plain_text)

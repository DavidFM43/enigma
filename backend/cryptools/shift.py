"""
Shift cipher
`key` must be an integer from Z_26.
"""
from util import char2int, int2char


def encrypt(plain_text: str, k: int) -> str:
    plain_text = plain_text.replace(" ", "").lower()
    return "".join([int2char[(char2int[i] + k) % 26] for i in plain_text]).upper()


def decrypt(cipher_text: str, k: int) -> str:
    cipher_text = cipher_text.replace(" ", "").lower()
    return "".join([int2char[(char2int[i] - k) % 26] for i in cipher_text])


def attack(chipher_text: str):
    """Returns a dictionary of all 26 possible (decryption, key) pairs"""
    return {decrypt(chipher_text, k): k for k in range(26)}


if __name__ == "__main__":
    assert encrypt("attackatdown", 11) == "LEELNVLEOZHY"
    assert decrypt("LEELNVLEOZHY", 11) == "attackatdown"

import string


# char to int
c = {x: idx for idx, x in enumerate(string.ascii_lowercase)}
# int to char
d = {idx: x for idx, x in enumerate(string.ascii_lowercase)}


def encrypt(plain_text: str, k: int) -> str:
    return "".join([d[(c[i] + k) % 26] for i in plain_text]).upper()


def decrypt(cipher_text: str, k: int) -> str:
    return "".join([d[(c[i] - k) % 26] for i in cipher_text.lower()])


if __name__ == "__main__":
    assert encrypt("attackatdown", 11) == "LEELNVLEOZHY"
    assert decrypt("LEELNVLEOZHY", 11) == "attackatdown"

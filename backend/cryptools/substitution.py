"""
Substitution cipher.

`key` must be a (uppercase) permutation of the english alphabet.
"""
from nltk.util import trigrams, bigrams
from string import ascii_lowercase
from collections import Counter


def encrypt(plain_text: str, key: str) -> str:
    plain_text = plain_text.replace(" ", "").lower()
    c = {e: d for e, d in zip(ascii_lowercase, key)}

    return "".join([c[l] for l in plain_text]).upper()


def decrypt(cipher_text: str, key: str) -> str:
    cipher_text = cipher_text.replace(" ", "").upper()
    d = {d: e for d, e in zip(key.upper(), ascii_lowercase)}

    return "".join(d[l] for l in cipher_text)


def attack(cipher_text: str):
    return {
        "letters": Counter(cipher_text),
        "bigrams": Counter(bigrams(cipher_text)),
        "trigrams": Counter(trigrams(cipher_text)),
    }


if __name__ == "__main__":
    import re

    assert (
        encrypt("thisciphertextcannotbedecrypted", "XNYAHPOGZQWBTSFLRCVMUEKJDI")
        == "MGZVYZLGHCMHJMYXSSFMNHAHYCDLMHA"
    )
    assert (
        decrypt("MGZVYZLGHCMHJMYXSSFMNHAHYCDLMHA", "XNYAHPOGZQWBTSFLRCVMUEKJDI")
        == "thisciphertextcannotbedecrypted"
    )
    cipher_text = re.sub(
        re.compile(r"\s+"),
        "",
        """
        YIFQFMZRWQFYVECFMDZPCVMRZWNMDZVEJBTXCDDUMJ
        NDIFEFMDZCDMOZKCEYFCJMYRNCWJCSZREXCHZUNMXZ
        NZUCDRJXYYSMRTMEYIFZWDYVZVYFZUMRZCRWNZDZJJ
        XZWGCHSMRNMDHNCMFQCHZJMXJZWIEJYUCFWDJNZDIR
        """,
    )

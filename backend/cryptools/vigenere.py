"""
Vigenère cipher.
`key` must a string of alphabetical characters
"""

from nltk.util import trigrams
from string import ascii_lowercase, ascii_uppercase
from math import ceil, gcd
from collections import Counter
from itertools import islice
from cryptools.util import int2char, str2int, probs


def encrypt(plain_text: str, key: str) -> str:
    """
    Encrypts a text in Vigenere cipher given a `cipher_text` and the `key`.
    """

    key_int = str2int(key.lower())
    plain_text_int = str2int(plain_text.lower())

    if len(key_int) > len(plain_text_int):
        raise Exception("Key length can't be greater than plain tet length.")

    n = ceil(len(plain_text_int) / len(key_int))

    return "".join(
        [int2char[(x + y) % 26] for x, y in zip(plain_text_int, key_int * n)]
    ).upper()


def decrypt(cipher_text: str, key: str) -> str:
    """
    Decrypts a text in Vigenere cipher given a `cipher_text` and the `key`.
    """
    key_int = str2int(key.lower())
    cipher_text_int = str2int(cipher_text.lower())
    n = ceil(len(cipher_text_int) / len(key_int))

    return "".join(
        [int2char[(x - y) % 26] for x, y in zip(cipher_text_int, key_int * n)]
    ).lower()


def kasiski_test(cipher_text: str):
    """
    Finds the possible length of the key of a text encrypted with
    the Vigenère cipher using the kasiski test.

    Returns dictionary with the following keys:
        `trg`: Most common trigram in the cipher text.
        `trg_indices`: Indices of the most common trigrams in the cipher text.
        `m_kasiski`: Possible length of the key.
    """
    trgs = list(trigrams(cipher_text))
    most_common = Counter(trgs).most_common(1)[0][0]
    idxs = [idx for idx, trg in enumerate(trgs) if trg == most_common]
    m_kasiski = gcd(*[i - idxs[0] for i in idxs])

    return {
        "trg": most_common,
        "trg_indices": idxs,
        "m_kasiski": m_kasiski,
    }


def index_of_coincidence(cipher_text: str):
    """
    Finds the possible length of the key of a text encrypted with
    the Vigenère cipher using the index of coincidence.
    Returns the integer k that gave the highest mean index of coincidence
    amongst the k substrings of the cipher text.

    Returns a dictionary with the following keys:
        `mean_iocs`: mean ioc of the set of kth-substrings for k up to 7.
        `m_ioc`: Possible Length of the key.
    """

    def ioc(x):
        # freqs are off by 1
        freqs = Counter(ascii_uppercase) + Counter(x)
        n = len(x)
        return sum([(i - 1) * (i - 2) for i in freqs.values()]) / (n * (n - 1))

    mean_iocs = []

    # substrings must be of length of at least 2
    max_word_size = 1
    while len(cipher_text) // max_word_size > 2 and max_word_size < 8:
        max_word_size += 1

    for k in range(1, max_word_size + 1):
        # k substrings of the cipher text
        ys = [list(islice(cipher_text, i, None, k)) for i in range(k)]
        # mean of the iocs of the k substrings
        mean_iocs_k = sum([ioc(y_i) for y_i in ys]) / k
        mean_iocs.append(mean_iocs_k)

    return {"mean_iocs": mean_iocs, "m_ioc": mean_iocs.index(max(mean_iocs)) + 1}


def attack(cipher_text: str, m: int):
    """
    Finds the key of the Vigenère cipher given the key length `m` by means
    of a frequency analysis.
    """

    # m substrings of the cipher text
    y = [list(islice(cipher_text, i, None, m)) for i in range(m)]

    key = ""

    for i in range(m):
        # frecuencies of letter in the ith substring
        f = Counter(ascii_lowercase) + Counter("".join(y[i]).lower())
        # Mgs (C.t.p pg 35)
        mg_quantity = [
            sum([probs[j] * (f[int2char[(j + g) % 26]] - 1) for j in range(26)])
            / len(y[i])
            for g in range(26)
        ]
        # index with the highest
        key += int2char[mg_quantity.index(max(mg_quantity))]

    return key.upper()

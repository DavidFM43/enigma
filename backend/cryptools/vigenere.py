"""
Vigenère cipher.
`key` must a string of alphabetical characters
"""

from nltk.util import trigrams
from string import ascii_lowercase, ascii_uppercase
from math import ceil, gcd
from collections import Counter
from itertools import islice


# char to int
c = {x: idx for idx, x in enumerate(ascii_lowercase)}
# int to char
d = {idx: x for idx, x in enumerate(ascii_lowercase)}

# probabilities of ocurrence of the 26 letters of alphabet
p = [
    0.082,
    0.015,
    0.028,
    0.043,
    0.127,
    0.022,
    0.02,
    0.061,
    0.07,
    0.002,
    0.008,
    0.04,
    0.024,
    0.067,
    0.075,
    0.019,
    0.001,
    0.06,
    0.063,
    0.091,
    0.028,
    0.01,
    0.023,
    0.001,
    0.02,
    0.001,
]


def encrypt(plain_text: str, key: str) -> str:
    key_int = [c[l] for l in key.lower()]
    plain_text_int = [c[l] for l in plain_text]
    n = ceil(len(plain_text_int) / len(key_int))

    return "".join(
        [d[(x + y) % 26] for x, y in zip(plain_text_int, key_int * n)]
    ).upper()


def decrypt(cipher_text: str, key: str) -> str:
    key_int = [c[l] for l in key.replace(" ", "").lower()]
    cipher_text_int = [c[l] for l in cipher_text.lower()]
    n = ceil(len(cipher_text_int) / len(key_int))

    return "".join(
        [d[(x - y) % 26] for x, y in zip(cipher_text_int, key_int * n)]
    ).lower()


def kasiski_test(cipher_text: str):
    """
    Finds the possible lenght of the key of a text encrypted with
    the Vigenère cipher using the kasiski test.
    """
    trgs = list(trigrams(cipher_text))
    most_common = Counter(trgs).most_common(1)[0][0]
    idxs = [idx for idx, trg in enumerate(trgs) if trg == most_common]

    return gcd(*[i - idxs[0] for i in idxs])


def index_of_coincidence(cipher_text: str):
    """
    Finds the possible lenght of the key of a text encrypted with
    the Vigenère cipher using the index of coincidence.
    Returns the integer k that gave the highest mean index of coincidence
    amongst the k substrings of the cipher text.
    """

    def ioc(x):
        # freqs are off by 1
        freqs = Counter(ascii_uppercase) + Counter(x)
        n = len(x)
        return sum([(i - 1) * (i - 2) for i in freqs.values()]) / (n * (n - 1))

    mean_iocs = dict()
    for k in range(1, 8):
        # k substrings of the cipher text
        ys = [list(islice(cipher_text, i, None, k)) for i in range(k)]
        # mean of the iocs of the k substrings
        mean_iocs_k = sum([ioc(y_i) for y_i in ys]) / k
        mean_iocs[round(mean_iocs_k, 3)] = k

    return mean_iocs[max(mean_iocs)]


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
        mgs = [
            sum([p[j] * (f[d[(j + g) % 26]] - 1) for j in range(26)]) / len(y[i])
            for g in range(26)
        ]

        # index with the highest
        key += d[mgs.index(max(mgs))]

    return key.upper()


if __name__ == "__main__":
    import re

    assert (
        encrypt("thiscryptosystemisnotsecure", "CIPHER")
        == "VPXZGIAXIVWPUBTTMJPWIZITWZT"
    )
    assert (
        decrypt("VPXZGIAXIVWPUBTTMJPWIZITWZT", "CIPHER")
        == "thiscryptosystemisnotsecure"
    )

    pattern = re.compile(r"\s+")
    cipher_text = re.sub(
        pattern,
        "",
        """
        CHREEVOAHMAERATBIAXXWTNXBEEOPHBSBQMQEQERBW
        RVXUOAKXAOSXXWEAHBWGJMMQMNKGRFVGXWTRZXWIAK
        LXFPSKAUTEMNDCMGTSXMXBTUIADNGMGPSRELXNJELX
        VRVPRTULHDNQWTWDTYGBPHXTFALJHASVBFXNGLLCHR
        ZBWELEKMSJIKNBHWRJGNMGJSGLXFEYPHAGNRBIEQJT
        AMRVLCRREMNDGLXRRIMGNSNRWCHRQHAEYEVTAQEBBI
        PEEWEVKAKOEWADREMXMTBHHCHRTKDNVRZCHRCLQOHP
        WQAIIWXNRMGWOIIFKEE
        """,
    )

    assert kasiski_test(cipher_text) == 5
    assert index_of_coincidence(cipher_text) == 5
    assert attack(cipher_text, 5) == "JANET"

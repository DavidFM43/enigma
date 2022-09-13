"""
Vigenère cipher.
`key` must a string of alphabetical characters
"""

from nltk.util import trigrams
from string import ascii_lowercase, ascii_uppercase
from math import ceil, gcd
from collections import Counter
from itertools import islice
<<<<<<< HEAD
from .util import int2char, str2int, probs
=======
from string import ascii_lowercase

# char to int
char2int = {x: idx for idx, x in enumerate(ascii_lowercase)}
# int to char
int2char = {idx: x for idx, x in enumerate(ascii_lowercase)}

# probabilty density function of the letter in the alphabet
probs = [
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


def str2int(plain_text: str) -> list[int]:
    """
    Convertir de string a int.

    Codificación:
    enumeración del alfabeto en ingles
    """
    return [char2int[l] for l in plain_text]


def int2str(integer_text: list[int]) -> str:
    """
    Convertir int a string

    Invierte la codificacion de str2int
    """
    return "".join([int2char[l] for l in integer_text])
>>>>>>> origin/routes-hill-permutation


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
    # key size must be less than 8
    while len(cipher_text) // max_word_size > 1 and max_word_size < 8:
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

    cipher_text = re.sub(
        re.compile(r"\s+"),
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

    assert kasiski_test(cipher_text)["m_kasiski"] == 5
    assert index_of_coincidence(cipher_text)["m_ioc"] == 5
    assert attack(cipher_text, 5) == "JANET"
    plain_text = re.sub(
        re.compile(r"\s+"),
        "",
        """
        thealmondtreewasintentativeblossomthedays
        werelongeroftenendingwithmagnificenteveni
        ngsofcorrugatedpinkskiesthehuntingseasonw
        asoverwithhoundsandgunsputawayforsixmonth
        sthevineyardswerebusyagainasthewellorgani
        zedfarmerstreatedtheirvinesandthemorelack
        adaisicalneighborshurriedtodothepruningth
        eyshouldhavedoneinnovember
        """,
    )
    assert decrypt(cipher_text, "JANET") == plain_text

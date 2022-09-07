from collections import Counter

freq = {
    "E": 0.127,
    "T": 0.091,
    "A": 0.082,
    "O": 0.075,
    "I": 0.07,
    "N": 0.067,
    "S": 0.063,
    "H": 0.061,
    "R": 0.06,
    "D": 0.043,
    "L": 0.04,
    "C": 0.028,
    "U": 0.028,
    "M": 0.024,
    "W": 0.023,
    "F": 0.022,
    "G": 0.02,
    "Y": 0.02,
    "P": 0.019,
    "B": 0.015,
    "V": 0.01,
    "K": 0.008,
    "J": 0.002,
    "Q": 0.001,
    "X": 0.001,
    "Z": 0.001,
}

freqbigrams = [
    "TH",
    "HE",
    "IN",
    "ER",
    "AN",
    "RE",
    "ED",
    "ON",
    "ES",
    "ST",
    "EN",
    "AT",
    "TO",
    "NT",
    "HA",
    "ND",
    "OU",
    "EA",
    "NG",
    "AS",
    "OR",
    "TI",
    "IS",
    "ET",
    "IT",
    "AR",
    "TE",
    "SE",
    "HI",
    "OF",
]

freqtrigrams = [
    "THE",
    "ING",
    "AND",
    "HER",
    "ERE",
    "ENT",
    "THA",
    "NTH",
    "WAS",
    "ETH",
    "FOR",
    "DTH",
]


def frequency(cipher):
    return dict(sorted(Counter(cipher).items(), key=lambda item: item[1], reverse=True))


def bigrams(cipher):
    return dict(
        sorted(
            Counter(cipher[x : x + 2] for x in range(len(cipher) - 1)).items(),
            key=lambda item: item[1],
            reverse=True,
        )
    )


def trigrams(cipher):
    return dict(
        sorted(
            Counter(
                cipher[x : x + 3]
                for x in range(len(cipher) - 1)
                if len(cipher[x : x + 3]) == 3
            ).items(),
            key=lambda item: item[1],
            reverse=True,
        )
    )

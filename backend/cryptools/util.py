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

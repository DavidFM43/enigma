from string import ascii_lowercase

c = {x: idx for idx, x in enumerate(ascii_lowercase)}
# int to char
d = {idx: x for idx, x in enumerate(ascii_lowercase)}


def text_to_int(plain_text: str) -> list[int]:
    return [c[l] for l in plain_text]


def int_to_text(integer_text: list[int]) -> str:
    return "".join([d[l] for l in integer_text])

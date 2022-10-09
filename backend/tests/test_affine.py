from cryptools.affine import encrypt, decrypt, attack


def test_encrypt():
    assert encrypt("hot", (7, 3)) == "AXG"


def test_decrypt():
    assert decrypt("AXG", (7, 3)) == "hot"


def attack():
    cadena = "FMXVEDKAPHFERBNDKRXRSREFMORUDSDKDVSHVUFEDKAPRKDLYEVLRHHRH"
    pass

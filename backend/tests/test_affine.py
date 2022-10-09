from cryptools.affine import encrypt, decrypt, attack


def test_encrypt():
    assert encrypt("hot", [7, 3]) == "AXG"


def test_decrypt():
    assert decrypt("AXG", [7, 3]) == "hot"


def test_attack():
    cipher_text = "FMXVEDKAPHFERBNDKRXRSREFMORUDSDKDVSHVUFEDKAPRKDLYEVLRHHRH"
    plain_text, key = attack(cipher_text)
    assert plain_text == "algorithmsarequitegeneraldefinitionsofarithmeticprocesses"
    assert key == [3,5]

from cryptools.permutation import encrypt, decrypt

def test_encrypt():
    assert (
        encrypt("shesellsseashellsbytheseashore", [3, 6, 1, 5, 2, 4])
        == "EESLSHSALSESLSHBLEHSYEETHRAEOS"
    )

def test_decrypt():
    assert (
        decrypt("EESLSHSALSESLSHBLEHSYEETHRAEOS", [3, 6, 1, 5, 2, 4])
        == "shesellsseashellsbytheseashore"
    )

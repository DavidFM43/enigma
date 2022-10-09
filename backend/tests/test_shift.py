from cryptools.shift import encrypt, decrypt, attack


def test_encrypt():
    assert encrypt("attackatdown", 11) == "LEELNVLEOZHY"


def test_decrypt():
    assert decrypt("LEELNVLEOZHY", 11) == "attackatdown"


def test_attack():
    assert attack("LEELNVLEOZHY") == [
        "leelnvleozhy",
        "kddkmukdnygx",
        "jccjltjcmxfw",
        "ibbiksiblwev",
        "haahjrhakvdu",
        "gzzgiqgzjuct",
        "fyyfhpfyitbs",
        "exxegoexhsar",
        "dwwdfndwgrzq",
        "cvvcemcvfqyp",
        "buubdlbuepxo",
        "attackatdown",
        "zsszbjzscnvm",
        "yrryaiyrbmul",
        "xqqxzhxqaltk",
        "wppwygwpzksj",
        "voovxfvoyjri",
        "unnuweunxiqh",
        "tmmtvdtmwhpg",
        "sllsucslvgof",
        "rkkrtbrkufne",
        "qjjqsaqjtemd",
        "piiprzpisdlc",
        "ohhoqyohrckb",
        "nggnpxngqbja",
        "mffmowmfpaiz",
    ]

from cryptools.vigenere import (
    encrypt,
    decrypt,
    kasiski_test,
    index_of_coincidence,
    attack,
)

plain_text = (
    "thealmondtreewasintentativeblossomthedays"
    "werelongeroftenendingwithmagnificenteveni"
    "ngsofcorrugatedpinkskiesthehuntingseasonw"
    "asoverwithhoundsandgunsputawayforsixmonth"
    "sthevineyardswerebusyagainasthewellorgani"
    "zedfarmerstreatedtheirvinesandthemorelack"
    "adaisicalneighborshurriedtodothepruningth"
    "eyshouldhavedoneinnovember"
)
cipher_text = (
    "CHREEVOAHMAERATBIAXXWTNXBEEOPHBSBQMQEQERBW"
    "RVXUOAKXAOSXXWEAHBWGJMMQMNKGRFVGXWTRZXWIAK"
    "LXFPSKAUTEMNDCMGTSXMXBTUIADNGMGPSRELXNJELX"
    "VRVPRTULHDNQWTWDTYGBPHXTFALJHASVBFXNGLLCHR"
    "ZBWELEKMSJIKNBHWRJGNMGJSGLXFEYPHAGNRBIEQJT"
    "AMRVLCRREMNDGLXRRIMGNSNRWCHRQHAEYEVTAQEBBI"
    "PEEWEVKAKOEWADREMXMTBHHCHRTKDNVRZCHRCLQOHP"
    "WQAIIWXNRMGWOIIFKEE"
)


def test_encrypt():
    assert (
        encrypt("thiscryptosystemisnotsecure", "CIPHER")
        == "VPXZGIAXIVWPUBTTMJPWIZITWZT"
    )


def test_decrypt():
    assert (
        decrypt("VPXZGIAXIVWPUBTTMJPWIZITWZT", "CIPHER")
        == "thiscryptosystemisnotsecure"
    )


def test_attack():
    assert kasiski_test(cipher_text)["m_kasiski"] == 5
    assert index_of_coincidence(cipher_text)["m_ioc"] == 5
    assert attack(cipher_text, 5) == "JANET"
    assert decrypt(cipher_text, "JANET") == plain_text

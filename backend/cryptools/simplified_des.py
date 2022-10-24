from base64 import b64encode, b64decode


KeyLength = 10
SubKeyLength = 8
DataLength = 8
FLength = 4

# Tables for initial and final permutations (b1, b2, b3, ... b8)
IPtable = (2, 6, 3, 1, 4, 8, 5, 7)
FPtable = (4, 1, 3, 5, 7, 2, 8, 6)

# Tables for subkey generation (k1, k2, k3, ... k10)
P10table = (3, 5, 2, 7, 4, 10, 1, 9, 8, 6)
P8table = (6, 3, 7, 4, 8, 5, 10, 9)

# Tables for the fk function
EPtable = (4, 1, 2, 3, 2, 3, 4, 1)
S0table = (1, 0, 3, 2, 3, 2, 1, 0, 0, 2, 1, 3, 3, 1, 3, 2)
S1table = (0, 1, 2, 3, 2, 0, 1, 3, 3, 0, 1, 0, 2, 1, 0, 3)
P4table = (2, 4, 3, 1)


def perm(inputByte, permTable):
    """Permute input byte according to permutation table"""
    outputByte = 0
    for index, elem in enumerate(permTable):
        if index >= elem:
            outputByte |= (inputByte & (128 >> (elem - 1))) >> (index - (elem - 1))
        else:
            outputByte |= (inputByte & (128 >> (elem - 1))) << ((elem - 1) - index)
    return outputByte


def ip(inputByte):
    """Perform the initial permutation on data"""
    return perm(inputByte, IPtable)


def fp(inputByte):
    """Perform the final permutation on data"""
    return perm(inputByte, FPtable)


def swapNibbles(inputByte):
    """Swap the two nibbles of data"""
    return (inputByte << 4 | inputByte >> 4) & 0xFF


def keyGen(key):
    """Generate the two required subkeys"""

    def leftShift(keyBitList):
        """Perform a circular left shift on the first and second five bits"""
        shiftedKey = [None] * KeyLength
        shiftedKey[0:9] = keyBitList[1:10]
        shiftedKey[4] = keyBitList[0]
        shiftedKey[9] = keyBitList[5]
        return shiftedKey

    # Converts input key (integer) into a list of binary digits
    keyList = [(key & 1 << i) >> i for i in reversed(range(KeyLength))]
    permKeyList = [None] * KeyLength
    for index, elem in enumerate(P10table):
        permKeyList[index] = keyList[elem - 1]
    shiftedOnceKey = leftShift(permKeyList)
    shiftedTwiceKey = leftShift(leftShift(shiftedOnceKey))
    subKey1 = subKey2 = 0
    for index, elem in enumerate(P8table):
        subKey1 += (128 >> index) * shiftedOnceKey[elem - 1]
        subKey2 += (128 >> index) * shiftedTwiceKey[elem - 1]
    return (subKey1, subKey2)


def fk(subKey, inputData):
    """Apply Feistel function on data with given subkey"""

    def F(sKey, rightNibble):
        aux = sKey ^ perm(swapNibbles(rightNibble), EPtable)
        index1 = (
            ((aux & 0x80) >> 4)
            + ((aux & 0x40) >> 5)
            + ((aux & 0x20) >> 5)
            + ((aux & 0x10) >> 2)
        )
        index2 = (
            ((aux & 0x08) >> 0)
            + ((aux & 0x04) >> 1)
            + ((aux & 0x02) >> 1)
            + ((aux & 0x01) << 2)
        )
        sboxOutputs = swapNibbles((S0table[index1] << 2) + S1table[index2])
        return perm(sboxOutputs, P4table)

    leftNibble, rightNibble = inputData & 0xF0, inputData & 0x0F
    return (leftNibble ^ F(subKey, rightNibble)) | rightNibble


def encrypt(key, plain_text):
    """Encrypt plaintext with given key"""
    data = fk(keyGen(key)[0], ip(plain_text))
    return fp(fk(keyGen(key)[1], swapNibbles(data)))


def decrypt(key, cipher_text):
    """Decrypt ciphertext with given key"""
    data = fk(keyGen(key)[1], ip(cipher_text))
    return fp(fk(keyGen(key)[0], swapNibbles(data)))


def encrypt_text(key, plain_text):
    cipher_text_bits = [encrypt(key, ord(i)) for i in plain_text]
    cipher_text_bytes = [i.to_bytes(1, byteorder="big") for i in cipher_text_bits]

    return b64encode(b"".join(cipher_text_bytes)).decode()


def decrypt_text(key, cipher_text):
    print(b64decode(cipher_text))
    cipher_text = [i for i in b64decode(cipher_text)]
    plain_text_bytes = [decrypt(key, i) for i in cipher_text]

    return "".join([chr(i) for i in plain_text_bytes])


if __name__ == "__main__":
    string = "attackatdown"
    print(0b0110010110)
    cipher_text = encrypt_text(0b0110010110, string)
    print(cipher_text)
    decrypted_text = decrypt_text(0b0110010110, cipher_text)
    print(decrypted_text)

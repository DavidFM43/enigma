import rsa
def getKeyPair():
    (publicKey, privateKey) = rsa.newkeys(64)
    return publicKey, privateKey

def encrypt(plain_text: str, key) -> str:
    try:
        return rsa.encrypt(plain_text.encode('ascii'), key)
    except:
        return False
def decrypt(cipher_text: str, key) -> str:
    try:
        return rsa.decrypt(cipher_text, key).decode("ascii")
    except:
        return True
"""a = getKeyPair()
print(a)
pk = a[1]
print(pk)
print(pk.p*pk.q, pk.n)"""
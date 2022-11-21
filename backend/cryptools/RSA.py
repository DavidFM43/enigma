import rsa.pkcs1
from sympy.ntheory.factor_ import totient
import base64
def getKeyPair():
    (publicKey, privateKey) = rsa.newkeys(64)
    return publicKey, privateKey

def encrypt(plain_text: str, key) -> str:
    plain_text = plain_text.encode('ascii')
    en2 = []
    en = ""
    keyLength = rsa.common.byte_size(key.n)
    print("key len en,", keyLength)
    chunks = [plain_text[i:i+keyLength] for i in range(0, len(plain_text), keyLength)]
    print(chunks)
    for ch in chunks:
        payload = rsa.transform.bytes2int(ch)
        encrypted = rsa.core.encrypt_int(payload, key.e, key.n)
        block = rsa.transform.int2bytes(encrypted, keyLength)
        en += base64.b64encode(block).decode('ascii')
        en2.append(base64.b64encode(block).decode('ascii'))
    print(en2, len(en2[0]))
    print("return: ", en)
    return en
  
def decrypt(cipher_text: str, key) -> str:
    print("cipher: ",cipher_text)
    if True:
        plain = ""
        keyLength = rsa.common.byte_size(key.n)
        lenBytes = len(encrypt("a", key))
        print(lenBytes)
        bytesEnc = [base64.b64decode(cipher_text[i:i+lenBytes].encode('ascii')) for i in range(0, len(cipher_text), lenBytes)]
        print(bytesEnc)
        for by in bytesEnc:
            blocksize = keyLength
            encrypted = rsa.transform.bytes2int(by)
            decrypted = rsa.core.decrypt_int(encrypted,key.d, key.n)
            plain += rsa.transform.int2bytes(decrypted, blocksize).replace(b'\00', b'').decode('ascii')
        print("return: ", plain)
        return plain

def calculeND(P, Q, E):
    return {
        "N": str(P * Q), 
        "D": str(pow(E, -1, int(totient(P * Q))))
    }

(publicKey, privateKey) = rsa.newkeys(64)
en = encrypt("Hola este es un mensaje de prueba a ver si sirev gran hpta vida 45 ?", publicKey)
print(en)
print(decrypt(en, privateKey))
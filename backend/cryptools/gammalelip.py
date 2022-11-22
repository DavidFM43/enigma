from tinyec import registry
from Crypto.Cipher import AES
import hashlib, secrets, binascii
import tinyec.ec as ec

# Code from: https://cryptobook.nakov.com/asymmetric-key-ciphers/ecc-encryption-decryption

def encrypt_AES_GCM(msg, secretKey):
    aesCipher = AES.new(secretKey, AES.MODE_GCM)
    ciphertext, authTag = aesCipher.encrypt_and_digest(msg)
    return (ciphertext, aesCipher.nonce, authTag)

def decrypt_AES_GCM(ciphertext, nonce, authTag, secretKey):
    aesCipher = AES.new(secretKey, AES.MODE_GCM, nonce)
    plaintext = aesCipher.decrypt_and_verify(ciphertext, authTag)
    return plaintext

def ecc_point_to_256_bit_key(point):
    sha = hashlib.sha256(int.to_bytes(point.x, 32, 'big'))
    sha.update(int.to_bytes(point.y, 32, 'big'))
    return sha.digest()

curve = registry.get_curve('brainpoolP256r1')

def encrypt_ECC(msg, pubKey):
    ciphertextPrivKey = secrets.randbelow(curve.field.n)
    sharedECCKey = ciphertextPrivKey * pubKey
    secretKey = ecc_point_to_256_bit_key(sharedECCKey)
    ciphertext, nonce, authTag = encrypt_AES_GCM(msg, secretKey)
    ciphertextPubKey = ciphertextPrivKey * curve.g
    return (ciphertext, nonce, authTag, ciphertextPubKey)

def decrypt_ECC(encryptedMsg, privKey):
    privKey = int(privKey)
    encryptedMsg = [hex(int(x,16)) for x in encryptedMsg.replace('[', '').replace(']','').replace(' ', '').replace("'", "").split(',')]
    #(ciphertext, nonce, authTag, ciphertextPubKey) = encryptedMsg
    ciphertext = bytes.fromhex(encryptedMsg[0][2:])
    nonce = bytes.fromhex(encryptedMsg[1][2:])
    authTag = bytes.fromhex(encryptedMsg[2][2:])
    ciphertextPubKey = ec.Point(curve=curve,x=int(encryptedMsg[3], 16),y=int(encryptedMsg[4], 16))
    sharedECCKey = privKey * ciphertextPubKey
    secretKey = ecc_point_to_256_bit_key(sharedECCKey)
    plaintext = decrypt_AES_GCM(ciphertext, nonce, authTag, secretKey)
    return plaintext

def get_priv_key():
    return secrets.randbelow(curve.field.n)

def get_curve():
    return registry.get_curve('brainpoolP256r1')

def get_obj(encryptedMsg):
    return {
        'ciphertext': encryptedMsg[0].hex(),
        'nonce': encryptedMsg[1].hex(),
        'authTag': encryptedMsg[2].hex(),
        'ciphertextPubKey_x': hex(encryptedMsg[3].x),
        'ciphertextPubKey_y': hex(encryptedMsg[3].y)
    }


if __name__ == "__main__":
    #msg = b'Text to be encrypted by ECC public key and decrypted by its corresponding ECC private key'
    msg = bytes('星を出ていくのに、王子さまは渡り鳥の旅を利用したのだと思う', 'utf-16')
    print("original msg:", msg)
    privKey = get_priv_key()
    pubKey = privKey * get_curve().g

    
    encryptedMsg = encrypt_ECC(msg, pubKey)

    print("cipher_text",encryptedMsg[0].hex())
    encryptedMsgObj = get_obj(encryptedMsg)

    decryptedMsg = decrypt_ECC(str(list(encryptedMsgObj.values())), str(privKey))
    print("decrypted msg:", decryptedMsg.decode("utf-16") )
    
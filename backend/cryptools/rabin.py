import base64
from Crypto.Util import number
from pprint import pprint

def pad_text(text: str) -> str:
    """
    Pads the text to get a size that is multiple of 4
    """
    pad_len = 4 - (len(text) % 4)
    text += str(pad_len) * pad_len
    return text


def encrypt_rabin(plain_text: str, n: int):
    plain_text = pad_text(plain_text)

    # decode to base64
    enc = base64.b64decode(plain_text)
    # cast bytes to int
    enc_i = bytes2int(enc)
    # encrypt int
    ct_int = encrypt(enc_i, n)
    # cast int to bytes 
    ct_bytes = int2bytes(ct_int)
    # cast bytes to string with base64 encoding
    ct = bytes2str(ct_bytes)

    return ct.decode()


def decrypt_rabin(cipher_text, p, q) -> list:

    # decode from base64
    ct_enc = str2bytes(cipher_text)
    # cast bytes to int
    ct_i = bytes2int(ct_enc)
    # get 4 roots
    pt_ops = decrypt(ct_i, p, q)
    # int to bytes to string
    ct_ops = [bytes2str(int2bytes(op)).decode() for op in pt_ops]
    # unpad options
    ct_ops = [op[: -int(op[-1])] if op[-1].isdigit() else op for op in ct_ops]

    return ct_ops


def encrypt(plain_text: int, n: int) -> int:
    return plain_text**2 % n


def decrypt(a, p, q):
    n = p * q
    r, s = 0, 0

    r = sqrt_p_3_mod_4(a, p)
    s = sqrt_p_3_mod_4(a, q)

    gcd, c, d = egcd(p, q)
    x = (r * d * q + s * c * p) % n
    y = (r * d * q - s * c * p) % n

    return x, n - x, y, n - y


def sqrt_p_3_mod_4(a, p):
    r = pow(a, (p + 1) // 4, p)
    return r


def egcd(a, b):
    if a == 0:
        return b, 0, 1
    else:
        gcd, y, x = egcd(b % a, a)
        return gcd, x - (b // a) * y, y


def bytes2int(x):
    return int.from_bytes(x, byteorder="big")


def int2bytes(x):
    return x.to_bytes((x.bit_length() + 7) // 8, byteorder="big")


def bytes2str(x):
    return base64.b64encode(x)


def str2bytes(x):
    return base64.b64decode(x)


def prime_3mod4():
    while True:
        p, q = number.getPrime(1024), number.getPrime(1024)
        if p % 4 == 3 and q % 4 == 3:
            return p, q


if __name__ == "__main__":

    p, q = prime_3mod4()
    n = p * q

    plain_text = "z"
    c = 1
    while True: 
        c += 1  
        plain_text = pad_text(plain_text)

        # decode to base64
        enc = base64.b64decode(plain_text)
        # cast bytes to int
        enc_i = bytes2int(enc)

        if enc_i >= n:
            break
        else:
            plain_text = "z"*c

    print(f"Maximum text size: {c}")

    plain_text = "attack at dawn"
    plain_text = plain_text.replace(" ", "").lower()
    cipher_text = encrypt_rabin(plain_text, n)
    plane_text = decrypt_rabin(cipher_text, p, q)

    print(cipher_text)
    pprint(plane_text)

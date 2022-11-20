import base64
from Crypto.Util import number
from pprint import pprint

def prime_3mod4():
    while True:
        p, q = number.getPrime(1524), number.getPrime(1524)
        if p % 4 == 3 and q % 4 == 3:
            return p, q


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


if __name__ == "__main__":
    p, q = prime_3mod4()
    n = p * q

    pt = " assddhbvfyufbubfvubfsyuvbudfsbvusdfuvbsadiubiusdabkjv vdvndsiubvusbdaiuvbfsyuabvyudfyu vfdu vuysdbvyubsyudavbisdbavbsduvbuyfbvdabvjbdfavbfudvbjabvuyf hubdfuvbaubvdsuybsduabvdf hd fubdv dfah vusduvsdbubvsabdvifjsbvbidsabviusbad dsu vsd vsbdisdbviubsdj sduv disiv ud usdbiusbadyubdaivbiudsbiuvdbsivaaaaaafdmvomdfspvfpdsomvpmdfmmdfosvjdfnvbdnsnvfnlk fslkv ldf vklsdfd sklncsnlasnascl aaaaaaaaak rpvpereosmavpomvav apmvpoerpvnavpa erpoverpvnavrp v vep pav io rvo erpv   vj vra vjre vkja jv rj vhav rvkf djkd fj j fd iurfniovnbfkjdbkjsddnklnasvlnrlvnl "
    pt = pt.replace(" ", "").lower()

    while len(pt) %4 !=0: pt = pt+"w"
    # encryption

    # decode to base64
    enc = base64.b64decode(pt)
    # cast bytes to int
    enc_i = bytes2int(enc)
    # enctypt int
    ct_int = encrypt(enc_i, n)
    # cast int to bytes
    ct_bytes = int2bytes(ct_int)
    # cast bytes to string with base64 encoding
    ct = bytes2str(ct_bytes)
    print(f"Texto encriptado: {ct}")

    # decryption
    ct_enc = str2bytes(ct)
    ct_i = bytes2int(ct_enc)
    pt_ops = decrypt(ct_i, p, q)
    ct_ops = [bytes2str(int2bytes(op)) for op in pt_ops]
    pprint("Opciones de texto claro")
    print(ct_ops)
    print(n> enc_i)
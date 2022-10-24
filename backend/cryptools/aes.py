from cryptools.util import pad_image_arr, unpad_image_arr
from Crypto.Cipher import AES
import numpy as np


def encrypt_image(plain_img_arr, *args, **kwargs):

    modes = {
        "ECB": AES.MODE_ECB,
        "CBC": AES.MODE_CBC,
        "OFB": AES.MODE_OFB,
        "CFB": AES.MODE_CFB,
        "CTR": AES.MODE_CTR,
    }

    args = (args[0], modes[args[1]])

    if args[1] == AES.MODE_CTR:
        kwargs["nonce"] = b""

    plain_img_arr = pad_image_arr(plain_img_arr, 16)
    aes = AES.new(*args, **kwargs)

    shape = plain_img_arr.shape
    plain_img_arr_bytes = plain_img_arr.tobytes()
    encrypted_img_bytes = aes.encrypt(plain_img_arr_bytes)
    cipher_img_arr = np.frombuffer(encrypted_img_bytes, dtype=np.uint8).reshape(shape)

    return cipher_img_arr


def decrypt_image(cipher_img_arr, *args, **kwargs):

    modes = {
        "ECB": AES.MODE_ECB,
        "CBC": AES.MODE_CBC,
        "OFB": AES.MODE_OFB,
        "CFB": AES.MODE_CFB,
        "CTR": AES.MODE_CTR,
    }

    args = (args[0], modes[args[1]])

    if args[1] == AES.MODE_CTR:
        kwargs["nonce"] = b""

    aes = AES.new(*args, **kwargs)

    shape = cipher_img_arr.shape
    cipher_img_arr_bytes = cipher_img_arr.tobytes()
    decrypted_img_bytes = aes.decrypt(cipher_img_arr_bytes)
    plain_img_arr = np.frombuffer(decrypted_img_bytes, dtype=np.uint8).reshape(shape)

    plain_img_arr = unpad_image_arr(plain_img_arr)

    return plain_img_arr

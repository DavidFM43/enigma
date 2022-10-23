from PIL import Image
from Crypto.Cipher import DES3
# from base64 import b64encode, b64decode
from cryptools.triple_des import encrypt_image, decrypt_image
import numpy as np
from os import listdir, path
from os.path import isfile, join

# def bitstring_to_bytes(s):
#     return int(s, 2).to_bytes((len(s) + 7) // 8, byteorder='big')

# bitstring = "".join([str(random.randint(0,1)) for _ in range(64)])
# bytes = bitstring_to_bytes(bitstring)

# print(bytes)
# print(b64encode(bytes))
# print(len(b64encode(bytes)))
# print(b64decode(b64encode(bytes)))

key = b"holamellamodavid"
iv = b"initvect"
ctr = b"casaverd"
img_name = "deers"
img_path = f"tests/imgs/block/clear/{img_name}.png"
nonce = b""

img_arr = np.asarray(Image.open(img_path))
# des3 = DES3.new(key, DES3.MODE_CTR, nonce=nonce)
# des3.encrypt(img_arr.tobytes())
cipher_img_arr = encrypt_image(img_arr, key, "OFB", iv=iv)
cipher_path = f"tests/imgs/block/cipher_triple_des/{img_name}.png"
Image.fromarray(cipher_img_arr).save(cipher_path, "png")




# des = DES.new(key, DES.MODE_ECB)
# onlyfiles = [f for f in listdir(imgs_path) if isfile(join(imgs_path, f))]

# for img_path in onlyfiles:
#     img = Image.open(path.join("tests/imgs/cipher/", img_path.split(".")[0]))
#     img_arr = np.asarray(img)

#     decrypted_img_arr = decrypt_image(img_arr, key, "ecb")
#     Image.fromarray(decrypted_img_arr).show()

# Image.fromarray(img_arr).save(
#     os.path.join(
#         pathlib.Path(__file__).parent.resolve(), "triple_des", "woman_clear.png"
#     ),
#     "png",
# )

# cipher_img = Image.open("tests/imgs/triple_des/tree_cipher.png")

# cipher_arr = np.asarray(cipher_img)

# decrypted_img_arr = decrypt_image(cipher_arr, key, "ecb")

# Image.fromarray(decrypted_img_arr).show()

# Image.fromarray(img_arr).save(
#     os.path.join(pathlib.Path(__file__).parent.resolve(), "tree_clear.png"), "png"
# )
# cipher_img_arr = encrypt_image(img_arr, key, "ecb")
# Image.fromarray(cipher_img_arr).save(
#     os.path.join(
#         pathlib.Path(__file__).parent.resolve(), "triple_des", "tree_cipher.png"
#     ),
#     "png",
# )

# img.show()
# Image.fromarray(cipher_img_arr).show()
# shape = img_arr.shape
# img_arr_bytes = img_arr.tobytes()

# num_pad_rows = 8 - (shape[0] % 8)

# # TODO: Haddle when image is 2D and not 3D
# last_row = img_arr[-1:, :, :]


# # padding
# pad_shape = (num_pad_rows,) + shape[1:]
# pad = np.full(pad_shape, num_pad_rows, dtype=np.uint8)
# padded_arr = np.vstack((img_arr, pad))


# # encryption
# padded_arr_bytes = padded_arr.tobytes()
# encrypted_img_bytes = des.encrypt(padded_arr_bytes)
# deserialized_bytes = np.frombuffer(encrypted_img_bytes, dtype=np.uint8).reshape(
#     *padded_arr.shape
# )
# encrypted_img = Image.fromarray(deserialized_bytes)

# # encrypted_img.show()


# # decryption
# cipher_img_arr = np.asarray(encrypted_img)
# cipher_img_arr_bytes = cipher_img_arr.tobytes()
# plain_img_bytes = des.decrypt(cipher_img_arr_bytes)
# plain_img_arr = np.frombuffer(plain_img_bytes, dtype=np.uint8).reshape(
#     *cipher_img_arr.shape
# )
# num_pad_rows2 = int(plain_img_arr[-1, -1, -1])

# plain_img_arr = plain_img_arr[:-num_pad_rows2, :, :]
# # Image.fromarray(plain_img_arr).show()

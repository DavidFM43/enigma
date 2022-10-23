from PIL import Image
# from cryptools.triple_des import encrypt_image, decrypt_image
from cryptools.aes import encrypt_image, decrypt_image
import numpy as np


key = bytes.fromhex("36 0D 3B 72 0E 4D EA 2B 19 18 06 D7 9E BD BA 19")
iv = bytes.fromhex("3E B2 66 97 3F 64 CC A0 4F E6 B5 A7 F6 95 D3 27")
ctr = bytes.fromhex("8C F1 AC 1A B2 A1 AE D6 32 73 85 D5 B2 19 62 9F")

img_name = "woman"
img_path = f"tests/imgs/block/clear/{img_name}.png"

img_arr = np.asarray(Image.open(img_path))
cipher_img_arr = encrypt_image(img_arr, key, "CTR", initial_value=ctr)
cipher_path = f"tests/imgs/block/cipher_aes/{img_name}.png"
Image.fromarray(cipher_img_arr).save(cipher_path, "png")

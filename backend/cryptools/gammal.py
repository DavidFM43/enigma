import numpy as np
import math

import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning) 

# Test de primalidad
def is_prime(n):
    if n % 2 == 0 and n > 2: 
        return False
    return all(n % i for i in range(3, int(math.sqrt(n)) + 1, 2))

# Criba de Eratostenes (generar primos)
def primes_sieve2(limit):
    a = [True] * limit
    a[0] = a[1] = False

    for (i, isprime) in enumerate(a):
        if isprime:
            yield i
            for n in range(i*i, limit, i):     # Marcar factores no primos
                a[n] = False

# Encontrar los factores primos (para encontrar las raices primitivas)
def primeFactors(n):
    if type(n) != int:
        print("Wrong argument!")
        return
    if n <= 1:
        print("Wrong argument!")
        return
    if is_prime(n): # no tiene factores primos
        return None
    factors = []
    while n % 2 == 0: #if n is even
        n = n // 2
        if 2 not in factors:
            factors.append(2)
    #now n is odd
    for i in range(3,int(math.sqrt(n))+2,2):
        while n % i == 0: 
            if i not in factors:
                factors.append(i) 
            n = n // i
    if n > 2:
        if n not in factors:
            factors.append(n)
    return factors

# Encontrar las raices primitivas (explicacion adentro)
def primitiveRoot(n, allRoots=False):
    if type(n) != int or n <= 1:
        return
    if is_prime(n):
        s = n-1  # phi function
        factors = primeFactors(s)
        powers = [(s // f) for f in factors]  # powers for testing
        roots = []  # list of primitive roots
        while (True):
            g = np.random.randint(2, n-1)
            primitiveRoot = True
            for p in powers:
                if pow(g, p, n) == 1:
                    primitiveRoot = False
                    break
            if primitiveRoot:
                if not allRoots:  # if we want only 1 primitive root
                    return g
                roots.append(g)
                break  # we found smallest primitive root
        return roots

# generar llave publica y privada
def generate_keys():
    a = [x for x in primes_sieve2(2**25)]
    p = a[int(len(a)/2) + np.random.randint(int(len(a)/4))]
    g = primitiveRoot(p)
    x = np.random.randint(1, (p-1)//2)
    h = pow(g, x, p)

    return (p, g, h), (p, g, x)

# string -> array de codigos ASCII
def encode(plain_text):
    return list(filter((' ').__ne__, [ord(x) for x in ''.join([i for i in plain_text if i.isalpha()]).lower()]))

# array de codigos ASCII -> string
def decode(ciphered_text):
    return ''.join(ciphered_text)

# Elgamal para cada letra, retorna array de parejas
def encrypt(public_key, sPlaintext):
	text_array = encode(sPlaintext)

	# cipher_pairs list will hold pairs (c, d) corresponding to each integer in text_array
	cipher_pairs = []
	# i is an integer in z
	for i in text_array:
		# pick random y from (0, p-1) inclusive
		y = np.random.randint(0, public_key[0])
		# c = g^y mod p
		c = pow(public_key[1], y, public_key[0])
		# d = ih^y mod p
		d = (i*pow(public_key[2], y, public_key[0])) % public_key[0]
		# add the pair to the cipher pairs list
		cipher_pairs.append([c, d])

	return cipher_pairs

# Desencripta cada pareja y rearma el string
def decrypt(private_key, cipher):
	#decrpyts each pair and adds the decrypted integer to list of plaintext integers
	plaintext = []
	for i in range(0, len(cipher)):
		#c = first number in pair
		c = int(cipher[i][0])
		#d = second number in pair
		d = int(cipher[i][1])

		#s = c^x mod p
		s = pow(c, private_key[0]-1-private_key[2], private_key[0])
		#plaintext integer = ds^-1 mod p
		plain = s*d  % private_key[0]
		#add plain to list of plaintext integers
		plaintext.append(plain)

	decryptedText = decode([chr(x) for x in plaintext])

	return decryptedText

if __name__ == "__main__":
    text = '星を出ていくのに、王子さまは渡り鳥の旅を利用したのだと思う'
    pub_key, priv_key = generate_keys()
    print(f'Public key: P:{pub_key[0]}, G:{pub_key[1]}, H:{pub_key[2]},')
    print(f'Public key: P:{priv_key[0]}, G:{priv_key[1]}, X:{priv_key[2]},')
    ciphered = encrypt(pub_key, text)
    print(ciphered)
    print(decrypt(priv_key, ciphered))
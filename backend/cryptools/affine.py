import string
import math
import analysis
import sympy

def encrypt(plain_text, key):
    plain_text = plain_text.lower() 

    if math.gcd(key[0], 26) != 1:
        return False

    alphabet = string.ascii_lowercase 
    alphabet_copy = list(alphabet)

    for i in range(26):
        x = (key[0] * i + key[1]) % 26
        alphabet_copy[x] = alphabet[i]

    alphabet_copy = "".join(alphabet_copy)
    table = str.maketrans(alphabet_copy, alphabet)
    decrypt_plain_text = plain_text.translate(table)
    return decrypt_plain_text.upper() #por que se lo retorna en mayus?


def decrypt(plain_cipher, key):

    plain_cipher = plain_cipher.lower()

    if math.gcd(key[0], 26) != 1:
        return False

    inverse = pow(key[0], -1, 26)
    alphabet = string.ascii_lowercase
    alphabet_copy = list(alphabet)

    for i in range(26):
        x = (inverse * (i - key[1])) % 26
        alphabet_copy[x] = alphabet[i]

    alphabet_copy = "".join(alphabet_copy)
    table = str.maketrans(alphabet_copy, alphabet)
    decrypt_plain_text = plain_cipher.translate(table)
    return decrypt_plain_text.lower()

'''
Conjetura

Las suposiciones seran apartir de los dos valores con mayor frecuencia 
de nuestra cadena, estos los coincidimos con los valores de mayor frecuencia
en la tabla de frecuencia para el idioma en ingles. Vamos a fijar el primer 
valor de mayor frecuencia y el otro iremos rotandolo a uno de menor 
frecuencia, esto para las dos tablas
'''

def analyze(plain_cipher):
    #Frecuencia de la caneda, alfabeto, Frecuencia en ingles
    frecuencyText = {i : plain_cipher.count(i) for i in set(plain_cipher)}
    alphabet = string.ascii_lowercase 
    freq = analysis.freq

    #Selección de la letra con mayor frecuencia 
    letterInput = max(frecuencyText, key=frecuencyText.get)
    letter = max(freq, key=freq.get)

    #Función de asignación de la encriptación e_k(4)=17
    e_k =  dict() 
    e_k[alphabet.index(letter.lowe())] = alphabet.index(letterInput.lower()) 

    #Solución del sistema de ecuaciones en Z_n 


key = [7, 3]
plain_cipher = encrypt("hot", key)
print(plain_cipher)
plain_text = decrypt(plain_cipher, key)
print(plain_text)

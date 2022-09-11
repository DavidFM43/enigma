from ast import Break
from multiprocessing.resource_sharer import stop
from re import A
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
    letterInput = max(frecuencyText, key=frecuencyText.get) #r-e
    frecuencyText.pop(letterInput)

    letter = max(freq, key=freq.get)
    freq.pop(letter)

    #Indice de las dos letras de mayor frecuencia
    n , m = alphabet.index(letter.lower()), alphabet.index(letterInput.lower()) 

    ''''
    Sistema en Z_26

        n*x + y = m
        p*x + y = q
    con n ,m , p y q estan en Z_26
    '''
    #inversos
    inv = {
        1:1, 3:9, 5:21, 7:25, 9:3, 11:19, 15:7, 17:23, 
        19:11, 21:5, 23:17, 25:25
    }
    a = 0
    c = 0
    textos = list()
    #Proceso para la segunda conjetura
    while True:
        while True:
            letterInput = max(frecuencyText, key=frecuencyText.get) #d->t
            frecuencyText.pop(letterInput)

            letter = max(freq, key=freq.get)
            if c == 3:
                #prueba de la siguiente mas frecuente
                freq.pop(letter)
                frecuencyText = dict()
                frecuencyText = {i : plain_cipher.count(i) for i in set(plain_cipher)}
                frecuencyText.pop(letterInput)
                c = 0


            p, q = alphabet.index(letter.lower()), alphabet.index(letterInput.lower()) 
            
            c += 1

            if (n-p)%2 == 0 or (n-p)%13 == 0: 
                break

            x = int((m-q) *inv[(n-p)%26]) %26   
            y = int( (q-x*p) %26)

            if math.gcd(x, 26) >1 :
                break

            
            textos.append(decrypt(plain_cipher, [x,y]))
            a +=1 
            if a ==3:
                return textos


#key = [7, 3]

cadena = 'FMXVEDKAPHFERBNDKRXRSREFMORUDSDKDVSHVUFEDKAPRKDLYEVLRHHRH'
p =analyze(cadena)

for i in p:
    print(i)
 
#plain_cipher = encrypt("hot", key)
#print(plain_cipher)
#plain_text = decrypt(cadena, [3,5] )
#print(plain_text)

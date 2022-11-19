
"""
1. Elegir primos grandes bajo la condicion
2. Encriptar
3. Desencriptar
4. Elegir el correcto 

"""

from Crypto.Util import number

def prime_3mod4()->int:
    """
    return a prime n = p*q
    """
    while True:
        p,q = number.getPrime(1024), number.getPrime(1024)
        if p%4==3 and q%4 ==3: return p*q

def encrypt_rabin(plain_text:str, n:int)->int:
    """
    Function of encryption f(x)= x^2 mod n
    """
    plain_text = int(plain_text.replace(" ", "").lower(),36) #remove spaces and block code with base 32
    print("texto codificado en bloque en base 36: ",plain_text)
    return plain_text ** 2 % n

def fast_pow(num, power, mod):

    #result
    res = 1 
    # (b ^ k) * p = num ^ power
    while power > 0:
        while power % 2 == 0:
            power /= 2
            num = (num * num) % mod
        power -= 1
        res = (res * num) % mod
    return res      

def decrypt(cipher_text, p, q):
    '''
    Дешифровка одного элемента шифротекста
    Возвращает List исходных элементов
    '''
    n = p * q #открытый ключ

    mp = fast_pow(cipher_text, (p + 1) // 4, p)
    mq = fast_pow(cipher_text, (q + 1) // 4, q)

    #Расширенный алгоритм евклида
    yp, yq, _gcd = extended_euclid(p, q) #третий возвращаемый параметр не используется
    
    
    # di - корень из дискриминанта
    d1 = (yp * p * mq + yq * q * mp) % n 
    d2 = n - d1
    d3 = (yp * p * mq - yq * q * mp) % n
    d4 = n - d3

    d = (d1, d2, d3, d4)
 
    return d

def extended_euclid(a, b):
    '''
    Расширенный алгоритм Евклида
    НОД(a, b) = x * a + y * b
    Возвращает (x, y, gcd)
    '''

    #Индекс 1 - текущий элемет, 0 - предыдущий
    x0, x1 = 1, 0
    y0, y1 = 0, 1
    while b:
        # r2 = r0 - r1 * q
        # r - остаток от деления
        # q целая часть от a / b 
        q = a // b 

        a, b = b, a % b

        # чтобы не создавать промежуточные переменные, присваивание кортежем
        x0, x1 = x1, x0 - x1 * q
        y0, y1 = y1, y0 - y1 * q
    return (x0, y0, a)     



if __name__ == "__main__":
    plain_text= "wxyz "
    print("Bloque encriptado " ,encrypt_rabin(plain_text, 77))
    l= decrypt(25, 11, 7)
    print(l)
    for i in l:
        print(int(i,36))
    
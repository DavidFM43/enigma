from .hill import attack


def encrypt(plain_text: str, key: list[int]) -> str:
    """
    text-> str(texto para encriptar)
    key -> list[imagenes de la permutación en orden 1,2,3,...]

    Retorna un texto encriptado (en mayusculas) con el cripto sistema de permutaciones
    """

    # partición en m bloques de tamaño m, llaves desde el indice 0, aginación de la llave con el dic
    m = len(key)
    key = [x - 1 for x in key]
    asignacion = {x: idx for idx, x in enumerate(key)}

    # Validación para partir el texto
    if len(plain_text) % m != 0:
        return "El texto no se puede partir"

    # Partiendo la cadena en m = len(key)
    def chunks(text: str, m: int) -> list[list[str]]:
        pieces = list()
        buffer = list()
        c = 0
        for i in plain_text:
            buffer.append(i)
            c += 1
            if c == m:
                pieces.append(buffer)
                buffer = list()
                c = 0
        return pieces

    pieces = chunks(plain_text, m)

    # Agregando las letras encriptadas
    cipher_text = ""
    for box in range(0, m - 1):  # Selección de la subcadena
        for i in range(0, m):  # Encriptación por letra
            cipher_text += pieces[box][asignacion[i]]
    return cipher_text.upper()


def decrypt(cipher_text: str, key: list[int]) -> str:
    """
    Retorna un texto decifrado (en minusculas) con el cripto sistema de permutaciones
    """
    # partición en m bloques de tamaño m, llaves desde el indice 0, aginación de la llave con el dic.
    cipher_text = cipher_text.lower()
    m = len(key)
    key = [x - 1 for x in key]
    asignacion = {idx: x for idx, x in enumerate(key)}

    # Validación para partir el texto
    if len(cipher_text) % m != 0:
        return "El texto no se puede partir"

    # Partiendo la cadena en m = len(key)
    def chunks(text: str, m: int) -> list[list[str]]:
        pieces = list()
        buffer = list()
        c = 0
        for i in cipher_text:
            buffer.append(i)
            c += 1
            if c == m:
                pieces.append(buffer)
                buffer = list()
                c = 0
        return pieces

    pieces = chunks(cipher_text, m)

    # Agregando las letras encriptadas
    plain_text = ""
    for box in range(0, m - 1):  # Selección de la subcadena
        for i in range(0, m):  # Encriptación por letra
            plain_text += pieces[box][asignacion[i]]

    return plain_text


"""
def attack(): 

Es igual para la función que ataqua el hill. Por lo tanto usaremos la del Hill

Aquí el usuario llega con una matriz dada
"""

if __name__ == "__main__":

    """
    Para la permutación, se ingresan las imagenes de cada permutación en orden 1,2,3,...
    """
    assert (
        encrypt("shesellsseashellsbytheseashore", [3, 6, 1, 5, 2, 4])
        == "EESLSHSALSESLSHBLEHSYEETHRAEOS"
    )
    assert (
        decrypt("EESLSHSALSESLSHBLEHSYEETHRAEOS", [3, 6, 1, 5, 2, 4])
        == "shesellsseashellsbytheseashore"
    )

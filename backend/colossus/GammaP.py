from typing import Tuple
from flask import Blueprint, request
from json import dumps
from cryptools.GammaP import encrypt_gammaP, decrypt_gammaP, graphing

import json
import plotly
import plotly.express as px



bp = Blueprint("GammaP", __name__, url_prefix="/GammaP")


@bp.route("/encrypt", methods=["POST"])
def encrypt_r():
    """
    GammaP cipher encryption route.
    Receives plain text, permutation y coordinates x,y as request arguments
    Returns JSON with cipher text and if needed error information.
    """
    plain_text: str = request.args["plainText"]
    permutation: str = request.args["permutation"]
    x_0: int =  request.args["x_0"]
    y_0: int =  request.args["y_0"]

    fig, matrix = graphing(x_0, y_0, permutation)
    cipher_text, percentage = encrypt_gammaP(plain_text, matrix) 
    error = False
    typeError = ""
    # lo que vamos enviar: 
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
    response_dict = {"cipherText": cipher_text, "percentage": percentage, "grapgJSON": graphJSON}
    
    return dumps(response_dict)


@bp.route("/decrypt", methods=["POST"])
def decrypt_r():
    """
    GammaP cipher decryption route.
    Receives cipher text and key as request arguments
    Returns JSON with clear text and, if needed, error information.
    """
    cipher_text: list[Tuple] = request.args["cipherText"]
    permutation: str = request.args["permutation"]
    x_0: int =  request.args["x_0"]
    y_0: int =  request.args["y_0"]
    fig, matrix = graphing(x_0, y_0, permutation)

    plain_text = decrypt_gammaP(cipher_text, matrix)
    error = False
    typeError = ""

    response_dict = {"decipherText": plain_text, "error": error, "typeError": typeError}

    return dumps(response_dict)

if __name__ == "__main__":
    encrypt_r()

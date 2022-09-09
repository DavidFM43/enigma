from urllib import response
from flask_cors import CORS
from flask import Flask, request
from flask import jsonify
import json

app = Flask(__name__)
CORS(app)
@app.route('/shift', methods=["GET"])
def shift():
    textToEncrypt = request.args['textToEncrypt']
    key = request.args['key']
    decryptedText = 'def text'
    error = False
    typeError = ''
    ##decryptedText =  
    responseDic = { 'decryptedText': decryptedText, 'error': error, 'typeError': typeError}
    return json.dumps(responseDic)
""""
@app.route('/search', methods=["GET"])
def searchF():
    almacenL = almacen()
    elm = almacenL.search(request.args['target'])
    if elm == None:
        return json.dumps([])
    else:
        return json.dumps([elm])

@app.route('/delete', methods=["POST"])
def deleteF():
    names = request.get_json()['targets']
    almacenL = almacen()
    for name in names:
        almacenL.deleteInf(name)
    return '1'

@app.route('/deleteAll', methods=["DELETE"])
def deleteAllF():
    almacenL = almacen()
    almacenL.deletInf()
    return '1'
@app.route('/edit', methods=["POST"])
def editF():
    editAPI(request.get_json()['elm'])
    return '1'
@app.route('/add', methods=["POST"])
def addF():
    elm = request.get_json()['elm']
    almacenL = almacen()
    almacenL.addInf(elm['nombre'], elm['precio'], elm['codigo'], elm['cantidad'], elm['fecha'])
    return '1'
@app.route('/sort', methods=["GET"])
def sortF():
    almacenL = almacen()
    
    return json.dumps(almacenL.sortBy(request.args['type'], int(request.args['fisrt']), int(request.args['last'])))
@app.route('/login', methods=["GET"])
def logIn():
    return json.dumps(validarLogin(request.args['user'], request.args['pass']))
"""
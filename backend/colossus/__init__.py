from flask import Flask
from flask_cors import CORS
from . import (
    shift,
    substitution,
    affine,
    vigenere,
    hill,
    permutation,
    triple_des,
    aes,
    gammap,
    simplified_des,
    rabin,
    RSA,
    elgamal,
    gammalelip,
)


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    # register ciphers routes
    app.register_blueprint(shift.bp)
    app.register_blueprint(substitution.bp)
    app.register_blueprint(affine.bp)
    app.register_blueprint(vigenere.bp)
    app.register_blueprint(hill.bp)
    app.register_blueprint(permutation.bp)
    app.register_blueprint(triple_des.bp)
    app.register_blueprint(aes.bp)
    app.register_blueprint(gammap.bp)
    app.register_blueprint(simplified_des.bp)
    app.register_blueprint(rabin.bp)
    app.register_blueprint(RSA.bp)
    app.register_blueprint(elgamal.bp)
    app.register_blueprint(gammalelip.bp)
    
    return app

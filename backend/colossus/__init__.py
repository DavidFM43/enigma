from flask import Flask
from flask_cors import CORS
from . import shift


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    # register ciphers routes
    app.register_blueprint(shift.bp)

    return app
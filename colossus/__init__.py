from flask import Flask
from . import shift
from . import index


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    app.register_blueprint(shift.bp)
    app.register_blueprint(index.bp)
    app.add_url_rule("/", endpoint="index")

    return app

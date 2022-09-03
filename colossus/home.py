from flask import Blueprint


bp = Blueprint("home", __name__)


@bp.route("/")
def index():
    return "Welcome to Colossus"

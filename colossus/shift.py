from flask import Blueprint


bp = Blueprint("shift", __name__, url_prefix="/shift")


@bp.route("/encrypt", methods=["GET"])
def encrypt():
    return "encrypt shift"


@bp.route("/crypto_analysis", methods=["GET"])
def crypto_analysis():
    return "shift crypto analysis"

from flask import Blueprint, request, render_template


bp = Blueprint("shift", __name__, url_prefix="/shift")


@bp.route("/encrypt", methods=("GET", "POST"))
def encrypt():

    if request.method == "POST":
        plain_text = request.form["plain_text"]
        pass  

    return render_template("shift.html")


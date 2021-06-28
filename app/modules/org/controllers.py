# Import flask dependencies
from flask import Blueprint, request, render_template, flash, session, redirect, url_for
from sqlalchemy.exc import IntegrityError

# Import module forms

# Import module models (i.e. Organization)
from app.models.org import Organization

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_org = Blueprint("org", __name__, url_prefix="/org")

# Set the route and accepted methods
@mod_org.route("/<org_id>/logged-in/",  methods=["GET", "POST"])
def home (org_id: str) -> str:
    if int(org_id) != session["org_id"]:
        return render_template("org/403.html")

    org = Organization.query.filter_by(id=org_id).first()

    return render_template("org/login-sucessful.html", org_name=org.name)

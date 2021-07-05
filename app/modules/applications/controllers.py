# Import flask dependencies
from flask import Blueprint, json, Response, request, wrappers

# Import Util Modules
from app.util.json_encoder import AlchemyEncoder
from app.util.responses import ServerError

# Import module models (i.e. Organization)
from app.models.applications import Application

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_apply = Blueprint("applications", __name__, url_prefix="/applications")

@mod_apply.route("/",  methods=["GET"])
def list_applications () -> wrappers.Response:
    try:
        query = Application.query.all()

        return Response(
            response=json.dumps(query, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except Exception:
        return ServerError

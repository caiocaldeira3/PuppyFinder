# Import flask dependencies
from flask import Blueprint, json, Response, request, wrappers

# Import Util Modules
from app.util.json_encoder import AlchemyEncoder
from app.util.responses import NotFoundError, ServerError

# Import module models (i.e. Organization)
from app.models.animal import Animal
from app.models.applications import Application

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_anm = Blueprint("animals", __name__, url_prefix="/animals")

@mod_anm.route("/",  methods=["GET"])
def list_animals () -> wrappers.Response:
    # try:
    query = Animal.query.all()

    return Response(
        response=json.dumps(query, cls=AlchemyEncoder),
        status=200,
        mimetype="application/json"
    )
    # except Exception:
    #     return ServerError

@mod_anm.route("/animal-info/<int:animal_id>/", methods=["GET"])
def animal_info_id (animal_id: int) -> wrappers.Response:
    try:
        query = Animal.query.filter_by(id=animal_id).one()

        return Response(
            response=json.dumps(query, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except MultipleResultsFound:
        print("There was more than one org with such ID")
        return ServerError
    except NoResultFound:
        print("There was no org with such ID")
        return NotFoundError
    except Exception:
        return ServerError

# Set the route and accepted methods
@mod_anm.route("/animal-info/",  methods=["PUT"])
def animal_info () -> wrappers.Response:
    try:
        data = request.json
        if data.get("sex", None) is not None:
            data["sex"] = AnimalGenders(data["sex"])
        if data.get("size", None) is not None:
            data["size"] = AnimalSizes(data["size"])

        query = Animal.query.filter_by(**data).all()

        return Response(
            response=json.dumps(query, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except NoResultFound:
        print("There was no org with such e-mail")
        return NotFoundError
    except Exception:
        return ServerError

@mod_anm.route("/<int:animal_id>/applications/",  methods=["GET"])
def list_applications (animal_id: int) -> wrappers.Response:
    try:
        query = Application.query.filter_by(animal_id=animal_id).all()

        return Response(
            response=json.dumps(query, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except Exception:
        return ServerError

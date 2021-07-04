# Import flask dependencies
from flask import Blueprint, json, Response, request, wrappers

# Import JsonEncoder
from app.util.json_encoder import AlchemyEncoder
from app.util.errors import NotFoundError, ServerError

# Import module models (i.e. Organization)
from app.models.animal import Animal

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_anm = Blueprint("animals", __name__, url_prefix="/animals")

@mod_anm.route("/list-animals/",  methods=[ "GET" ])
def list_animals () -> wrappers.Response:
    try:
        all_animals = [ json.dumps(animal, cls=AlchemyEncoder) for animal in Animal.query.all() ]

        return Response(
            response=all_animals,
            status=200,
            mimetype="application/json"
        )
    except Exception:
        return ServerError

@mod_anm.route("/<int:animal_id>/",  methods=[ "GET" ])
def animal_info (animal_id: int) -> wrappers.Response:
    try:
        animal = Animal.query.filter_by(id=animal_id).one()

        return Response(
            response=json.dumps(animal, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except MultipleResultsFound:
        print("There was more than one animal with such ID")
        return ServerError
    except NoResultFound:
        print("There was no animal with such ID")
        return NotFoundError

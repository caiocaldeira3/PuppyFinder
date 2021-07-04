# Import flask dependencies
import flask
from flask import Blueprint, request, jsonify, flash

# Import module forms

# Import module models (i.e. Organization)
from app.models.animal import Animal

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_anm = Blueprint("animals", __name__, url_prefix="/animals")

@mod_anm.route("/list-animals/",  methods=[ "GET" ])
def list_animals () -> flask.wrappers.Response:
    all_animals = Animal.query.all()

    return jsonify(json_list=all_animals)

@mod_anm.route("/list-animals/",  methods=[ "GET" ])
def get_animal (animal_id: str) -> flask.wrappers.Response:
    return "oi"

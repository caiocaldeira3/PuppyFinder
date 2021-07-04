# Import flask dependencies
from flask import Blueprint, json, jsonify, Response, request, wrappers
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound

# Import Util Modules
from app.util.json_encoder import AlchemyEncoder
from app.util.responses import (
    AuthorizationError, DeletedObject, DuplicateError, NotFoundError, ServerError
)

# Import module models (i.e. Organization)
from app.models.org import Organization
from app.models.animal import Animal, AnimalGenders, AnimalSizes

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_org = Blueprint("org", __name__, url_prefix="/org")

@mod_org.route("/",  methods=["GET"])
def list_orgs () -> wrappers.Response:
    try:
        query = Organization.query.all()

        return Response(
            response=json.dumps(query, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except Exception:
        return ServerError

# Set the route and accepted methods
@mod_org.route("/org-info/<int:org_id>/",  methods=["GET"])
def org_info_id (org_id: int) -> wrappers.Response:
    try:
        query = Organization.query.filter_by(id=org_id).one()

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
@mod_org.route("/org-info/",  methods=["GET"])
def org_info () -> wrappers.Response:
    try:
        data = request.json

        query = Organization.query.filter_by(email=data["email"]).one()

        return Response(
            response=json.dumps(query, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except MultipleResultsFound:
        print("There was more than one org with such e-mail")
        return ServerError
    except NoResultFound:
        print("There was no org with such e-mail")
        return NotFoundError
    except Exception:
        return ServerError

@mod_org.route("/<int:org_id>/list-animals/",  methods=["GET"])
def list_animal (org_id: int) -> str:
    try:
        query = Animal.query.all()

        return Response(
            response=json.dumps(query, cls=AlchemyEncoder),
            status=200,
            mimetype="application/json"
        )
    except Exception:
        return ServerError

@mod_org.route("/<int:org_id>/animal-info/<int:animal_id>", methods=["GET"])
def animal_info_id (org_id: int, animal_id: int) -> wrappers.Response:
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
@mod_org.route("/<int:org_id>/animal-info/",  methods=["GET"])
def animal_info (org_id: int) -> wrappers.Response:
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

@mod_org.route("/<int:org_id>/add-animal/", methods=["POST"])
def add_animal (org_id: int) -> str:
    try:
        data = request.json

        stmt = db.insert(Animal).values(
            name=data["name"],
            age=data.get("age", None),
            sex=AnimalGenders(data["sex"]),
            fur=data.get("fur", None),
            size=AnimalSizes(data["size"]) if data.get("size", None) is not None else None,
            neutered=bool(data["neutered"]),
            vaccinated=bool(data["vaccinated"]),
            dewormed=bool(data["dewormed"]),
            desc=data.get("desc", None)
        )

        with db.engine.connect() as connection:
            result = connection.execute(stmt)
            query = Animal.query.filter_by(id=result.lastrowid).one()

            return Response(
                response=json.dumps(query, cls=AlchemyEncoder),
                status=200,
                mimetype="application/json"
            )
    except IntegrityError:
        return DuplicateError
    except Exception:
        return ServerError

@mod_org.route("/<int:org_id>/update-animal/<int:animal_id>/", methods=["PUT"])
def update_animal (org_id: int, animal_id: int) -> str:
    try:
        data = request.json
        if data.get("sex", None) is not None:
            data["sex"] = AnimalGenders(data["sex"])
        if data.get("size", None) is not None:
            data["size"] = AnimalSizes(data["size"])

        stmt = db.update(Animal).where(Animal.id == animal_id).values(**data)

        with db.engine.connect() as connection:
            result = connection.execute(stmt)
            query = Animal.query.filter_by(id=animal_id).one()

            return Response(
                response=json.dumps(query, cls=AlchemyEncoder),
                status=200,
                mimetype="application/json"
            )
    except MultipleResultsFound:
        return ServerError
    except NoResultFound:
	    return NotFoundError
    except Exception:
        return ServerError

@mod_org.route("/<int:org_id>/delete-animal/<int:animal_id>/", methods=["POST"])
def delete_animal(org_id: int, animal_id: int):
    try:
        animal = Animal.query.filter_by(id=animal_id).one()

        db.session.delete(animal)
        db.session.commit()

        return DeletedObject
    except MultipleResultsFound:
        print("There was more than one animal with such ID")
        return ServerError
    except NoResultFound:
        print("There was no animal with such ID")
        return NotModified

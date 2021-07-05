# Import flask dependencies
from flask import Blueprint, json, jsonify, Response, request, wrappers
from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound

# Import Util Modules
from app.util.json_encoder import AlchemyEncoder
from app.util.responses import (
    AuthorizationError, DeletedObject, NotFoundError, ServerError
)

# Import module models (i.e. Organization)
from app.models.user import User

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_user = Blueprint("user", __name__, url_prefix="/user")

# Set the route and accepted methods
@mod_user.route("/user-info/<int:user_id>/",  methods=["GET"])
def user_info_id (user_id: int) -> wrappers.Response:
    try:
        query = User.query.filter_by(id=user_id).one()

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
@mod_user.route("/user-info/",  methods=["GET"])
def user_info () -> wrappers.Response:
    try:
        data = request.json

        query = User.query.filter_by(email=data["email"]).one()

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

@mod_user.route("/update-user/<int:user_id>/", methods=["PUT"])
def update_user (user_id: int) -> wrappers.Response:
    try:
        data = request.json

        stmt = db.update(User).where(User.id == user_id).values(**data)

        with db.engine.connect() as connection:
            result = connection.execute(stmt)
            query = User.query.filter_by(id=user_id).one()

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

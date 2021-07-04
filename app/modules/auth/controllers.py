# Import flask dependencies
from flask import Blueprint, json, Response, request, wrappers
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound

# Import Util Modules
from app.util.json_encoder import AlchemyEncoder
from app.util.responses import AuthorizationError, DuplicateError, NotFoundError, ServerError

# Import password / encryption helper tools
from werkzeug.security import check_password_hash, generate_password_hash

# Import module models (i.e. User)
from app.models.user import User
from app.models.org import Organization

# Import application Database
from app import db

# Define the blueprint: "auth", set its url prefix: app.url/auth
mod_auth = Blueprint("auth", __name__, url_prefix="/auth")

def login_general (access: int) -> wrappers.Response:
    try:
        data = request.json

        user = User.query.filter_by(email=data["email"]).one()

        if user and user.access < access:
            return AuthorizationError
        elif user and check_password_hash(user.password, data["password"]):
            return Response(
                response=json.dumps({
                    "user": user.id,
                    "name": user.name
                }),
                status=200,
                mimetype="application/json"
            )
        else:
            return AuthorizationError
    except MultipleResultsFound:
        return ServerError
    except NoResultFound:
	    return NotFoundError
    except Exception:
        return AuthorizationError

# Set the route and accepted methods
@mod_auth.route("/signin-user/", methods=["GET"])
def signin_user () -> wrappers.Response:
    return login_general(access=0)

@mod_auth.route("/signin-admin/", methods=["GET"])
def signin_admin () -> wrappers.Response:
    return login_general(access=1)

@mod_auth.route("/signin-org/", methods=["GET"])
def signin_org () -> wrappers.Response:
    try:
        data = request.json

        org = Organization.query.filter_by(email=data["email"]).one()

        if org and check_password_hash(org.password, data["password"]):
            return Response(
                response=json.dumps({
                    "org": org.id,
                    "name": org.name
                }),
                status=200,
                mimetype="application/json"
            )
        else:
            return AuthorizationError

    except MultipleResultsFound:
        return ServerError
    except NoResultFound:
	    return NotFoundError
    except Exception:
        return AuthorizationError

def signup_general (access: int) -> wrappers.Response:
    try:
        data = request.json

        stmt = db.insert(User).values(
            email=data["email"],
            name=data["name"],
            password=generate_password_hash(data["password"]),
            access=access,
            telephone=data.get("telephone", None),
            description=data.get("description", None)
        )

        with db.engine.connect() as connection:
            result = connection.execute(stmt)
            query = User.query.filter_by(id=result.lastrowid).one()

            return Response(
                response=json.dumps(query, cls=AlchemyEncoder),
                status=200,
                mimetype="application/json"
            )
    except IntegrityError:
        return DuplicateError
    except Exception:
        return ServerError

@mod_auth.route("/signup-user/", methods=["POST"])
def signup_user () -> wrappers.Response:
    return signup_general(access=0)

@mod_auth.route("/signup-admin/", methods=["POST"])
def signup_admin () -> wrappers.Response:
    return signup_general(access=1)

@mod_auth.route("/signup-org/", methods=["POST"])
def signup_org () -> wrappers.Response:
    try:
        data = request.json

        stmt = db.insert(Organization).values(
            email=data["email"],
            name=data["name"],
            password=generate_password_hash(data["password"]),
            website=data.get("website", None),
            donation_url=data.get("donation_url", None),
            telephone=data.get("telephone", None),
            description=data.get("description", None)
        )

        with db.engine.connect() as connection:
            result = connection.execute(stmt)
            query = Organization.query.filter_by(id=result.lastrowid).one()

            return Response(
                response=json.dumps(query, cls=AlchemyEncoder),
                status=200,
                mimetype="application/json"
            )
    except IntegrityError:
        return DuplicateError
    except Exception:
        return ServerError

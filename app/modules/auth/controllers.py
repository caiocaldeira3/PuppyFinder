# Import flask dependencies
from flask import Blueprint, request, render_template, flash, session, redirect, url_for
from sqlalchemy.exc import IntegrityError

# Import password / encryption helper tools
from werkzeug.security import check_password_hash, generate_password_hash

# Import module forms
from app.modules.auth.forms import LoginForm, RegisterForm, RegisterOrgForm

# Import module models (i.e. User)
from app.models.user import User
from app.models.org import Organization

# Import application Database
from app import db

# Define the blueprint: "auth", set its url prefix: app.url/auth
mod_auth = Blueprint("auth", __name__, url_prefix="/auth")

def login_general (access: int, form_url: str, success_url: str) -> str:
    # If sign in form is submitted
    form = LoginForm(request.form)

    # Verify the sign in form
    if form.validate_on_submit():

        user = User.query.filter_by(email=form.email.data).first()

        if user and user.access < access:
            flash("Usuário não possui acesso à esta página", "error")

        elif user and check_password_hash(user.password, form.password.data):
            session["user_id"] = user.id
            flash(f"Bem Vindo {user.name}")

            return redirect(url_for(success_url))

        else:
            flash("Usuário ou senha inválidos", "error")

    return render_template(form_url, form=form)

# Set the route and accepted methods
@mod_auth.route("/signin-user/", methods=["GET", "POST"])
def signin_user () -> str:
    return login_general(access=0, form_url="auth/signin-user.html", success_url="auth.home")

@mod_auth.route("/signin-admin/", methods=["GET", "POST"])
def signin_admin () -> str:
    return login_general(access=1, form_url="auth/signin-admin.html", success_url="auth.home")

@mod_auth.route("/signin-org/", methods=["GET", "POST"])
def signin_org () -> str:
    # If sign in form is submitted
    form = LoginForm(request.form)

    # Verify the sign in form
    if form.validate_on_submit():

        org = Organization.query.filter_by(email=form.email.data).first()

        if org and check_password_hash(org.password, form.password.data):
            session["org_id"] = org.id
            flash(f"Bem Vindo {org.name}")

            return redirect(url_for("org.home", org_id=org.id))

        else:
            flash("Usuário ou senha inválidos", "error")

    return render_template("auth/signin-org.html", form=form)

def signup_general (access: int, form_url: str, success_url: str) -> str:
    # If sign up form is submitted
    form = RegisterForm(request.form)

    # Verify the sign up form
    if form.validate_on_submit():
        stmt = db.insert(User).values(
            email=form.email.data,
            name=form.name.data,
            password=generate_password_hash(form.password.data),
            access=access,
            telephone=form.telephone.data,
            description=form.description.data
        )

        try:
            with db.engine.connect() as connection:
                result = connection.execute(stmt)
                print(result)

        except IntegrityError:
            flash("E-mail de usuário já cadastrado", "error")

        except Exception:
            flash("Algo deu errado no cadastro do usuário", "error")

        else:
            return redirect(url_for(success_url))

    return render_template(form_url, form=form)

@mod_auth.route("/signup-user/", methods=["GET", "POST"])
def signup_user () -> str:
    return signup_general(access=0, form_url="auth/signup-user.html", success_url="auth.home")

@mod_auth.route("/signup-admin/", methods=["GET", "POST"])
def signup_admin () -> str:
    return signup_general(access=1, form_url="auth/signup-user.html", success_url="auth.home")

@mod_auth.route("/signup-org/", methods=["GET", "POST"])
def signup_org () -> str:
    # If sign up form is submitted
    form = RegisterOrgForm(request.form)

    # Verify the sign in form
    if form.validate_on_submit():
        stmt = db.insert(Organization).values(
            email=form.email.data,
            name=form.name.data,
            password=generate_password_hash(form.password.data),
            website=form.website.data,
            donation_url=form.donation_url.data,
            telephone=form.telephone.data,
            description=form.description.data
        )

        try:
            with db.engine.connect() as connection:
                result = connection.execute(stmt)
                print(result)

        except IntegrityError:
            flash("E-mail de Organização já cadastrado", "error")

        except Exception as e:
            flash("Algo deu errado no cadastro da Organização", "error")
            print(e)

        else:
            return redirect(url_for("auth.home"))

    return render_template("auth/signup-org.html", form=form)

@mod_auth.route("/logged-in/",  methods=["GET", "POST"])
def home () -> str:
    return render_template("auth/login-sucessful.html")

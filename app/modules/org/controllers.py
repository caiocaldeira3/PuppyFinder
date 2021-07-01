# Import flask dependencies
from flask import Blueprint, request, render_template, flash, session, redirect, url_for
from sqlalchemy.exc import IntegrityError

# Import module forms
from app.modules.org.forms import RegisterAnimalForm

# Import module models (i.e. Organization)
from app.models.org import Organization
from app.models.animal import Animal, AnimalGenders, AnimalSizes

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_org = Blueprint("org", __name__, url_prefix="/org")

# Set the route and accepted methods
@mod_org.route("/<org_id>/logged-in/",  methods=["GET", "POST"])
def home (org_id: str) -> str:
    print(session["org_id"])
    if int(org_id) != session["org_id"]:
        return render_template("org/403.html")

    org = Organization.query.filter_by(id=org_id).first()

    return render_template("org/login-sucessful.html", org=org)

@mod_org.route("/list-orgs/",  methods=["GET", "POST"])
def listagem_orgs () -> str:
    all_org = Organization.query.all()
    return render_template("org/list-org.html", all_org=all_org)

@mod_org.route("/list-animal/",  methods=["GET", "POST"])
def listagem_Animal () -> str:
    all_animal = Animal.query.all()
    return render_template("org/b.html", all_animal=all_animal) ##MUDAR

@mod_org.route("/add-animal/", methods=["GET", "POST"])
def add_animal () -> str:

    # If sign up form is submitted
    form = RegisterAnimalForm()
    form.sex.choices = [gender.name for gender in AnimalGenders]
    form.size.choices = [size.name for size in AnimalSizes]

    # Verify the sign in form
    if form.validate_on_submit():
        stmt = db.insert(Animal).values(
            name=form.name.data,
            age=form.age.data,
            sex=form.sex.data,
            fur=form.fur.data,
            size=form.size.data,
            neutered=bool(form.neutered.data),
            vaccinated=bool(form.vaccinated.data),
            dewormed=bool(form.dewormed.data),
            desc=form.desc.data
        )
        try:
            with db.engine.connect() as connection:
                result = connection.execute(stmt)
                print(result)

        except Exception as e:
            flash("Algo deu errado no cadastro do Animal", "error")
            print(e)

    return render_template("org/add-animal.html", form=form)
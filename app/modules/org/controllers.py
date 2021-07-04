# Import flask dependencies
from flask import Blueprint, request, render_template, flash, session, redirect, url_for
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound

# Import module forms
from app.modules.org.forms import RegisterAnimalForm

# Import module models (i.e. Organization)
from app.models.org import Organization
from app.models.animal import Animal, AnimalGenders, AnimalSizes

# Import application Database
from app import db

# Define the blueprint: "org", set its url prefix: app.url/org
mod_org = Blueprint("org", __name__, url_prefix="/org")

@mod_org.route("/list-orgs/",  methods=["GET", "POST"])
def list_orgs () -> str:
    all_org = Organization.query.all()
    return render_template("org/list-org.html", all_org=all_org)

# Set the route and accepted methods
@mod_org.route("/<int:org_id>/logged-in/",  methods=["GET", "POST"])
def home (org_id: int) -> str:
    if int(org_id) != session["org_id"]:
        return render_template("403.html")

    try:
        org = Organization.query.filter_by(id=org_id).one()

        return render_template("org/login-sucessful.html", org=org)

    except MultipleResultsFound:
        return render_template("500.html")
    except NoResultFound:
	    return render_template("500.html")

@mod_org.route("/<int:org_id>/list-animals/",  methods=["GET", "POST"])
def list_animal (org_id: int) -> str:
    if int(org_id) != session["org_id"]:
        return render_template("403.html")

    all_animal = Animal.query.all()
    return render_template("animals/list-animals.html", all_animal=all_animal) ##MUDAR

@mod_org.route("/<int:org_id>/add-animal/", methods=["GET", "POST"])
def add_animal (org_id: int) -> str:
    if int(org_id) != session["org_id"]:
        return render_template("403.html")

    # If form is submitted
    form = RegisterAnimalForm()
    form.sex.choices = [gender.name for gender in AnimalGenders]
    form.size.choices = [size.name for size in AnimalSizes]
    print(form.size.choices)

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

@mod_org.route("/<int:org_id>/update-animal/<int:animal_id>/", methods=["GET", "POST"])
def update_animal (org_id: int, animal_id: int) -> str:
    if int(org_id) != session["org_id"]:
        return render_template("403.html")

    form = RegisterAnimalForm()
    form.sex.choices = [gender.name for gender in AnimalGenders]
    form.size.choices = [size.name for size in AnimalSizes]

    try:
        animal = Animal.query.filter_by(id=animal_id).one()

        # Verify the sign in form
        if form.validate_on_submit():
            animal.name = form.name.data
            animal.age = form.age.data
            animal.sex = form.sex.data
            animal.fur = form.fur.data
            animal.size = form.size.data
            animal.desc = form.desc.data
            animal.neutered = ("True" == form.neutered.data)
            animal.vaccinated = ("True" == form.neutered.data)
            animal.dewormed = ("True" == form.neutered.data)

            db.session.commit()
            #flash("Você mudou os dados de ", animal.name)

            return redirect(url_for("org.list_animal"))

        elif request.method == 'GET':
            form.name.data = animal.name
            form.age.data = animal.age

            form.sex.data = animal.sex # TODO

            form.fur.data = animal.fur
            form.size.data = animal.size  # TODO

            form.desc.data = animal.desc

            form.neutered.data = animal.neutered # TODO
            form.vaccinated.data = animal.vaccinated # TODO
            form.dewormed.data = animal.dewormed # TODO

        return render_template(
            "org/update-animal.html", form=form, org_id=org_id, animal_id=animal_id
        )

    except MultipleResultsFound:
        return render_template("500.html")
    except NoResultFound:
        return render_template("500.html")

@mod_org.route("/<int:org_id>/delete-animal/<int:animal_id>/", methods=["POST"])
def delete_animal(org_id: int, animal_id: int):
    if int(org_id) != session["org_id"]:
        return render_template("403.html")

    try:
        animal = Animal.query.filter_by(id=animal_id).one()

        db.session.delete(animal)
        db.session.commit()

    except MultipleResultsFound:
        return render_template("500.html")
    except NoResultFound:
	    return redirect(url_for("org.list_animals"))

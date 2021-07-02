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

@mod_org.route("/list_orgs/",  methods=["GET", "POST"])
def list_orgs () -> str:
    all_org = Organization.query.all()
    return render_template("org/list-org.html", all_org=all_org)

@mod_org.route("/list_animal/",  methods=["GET", "POST"])
def list_animal () -> str:
    all_animal = Animal.query.all()
    return render_template("org/list-animal.html", all_animal=all_animal) ##MUDAR

@mod_org.route("/add_animal/", methods=["GET", "POST"])
def add_animal () -> str:

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

@mod_org.route("/update_animal/<animal_id>", methods=["GET", "POST"])
def update_animal (animal_id) -> str:
    form = RegisterAnimalForm()
    form.sex.choices = [gender.name for gender in AnimalGenders]
    form.size.choices = [size.name for size in AnimalSizes]

    animal = Animal.query.filter_by(id=animal_id).first_or_404()

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

    return render_template("org/update_animal.html", form=form, animal_id=animal_id)

@mod_org.route("/delete_animal/<animal_id>", methods=["GET", "POST"])
def delete_animal(animal_id):

	animal = Animal.query.filter_by(id=animal_id).first_or_404()

	db.session.delete(animal)
	db.session.commit()

	return redirect(url_for("org.list_animal"))
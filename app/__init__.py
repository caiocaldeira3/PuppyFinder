# Import flask and template operators
from flask import Flask, render_template

# Import SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

# Import Migration Module
from flask_migrate import Migrate

# Define the WSGI application object
app = Flask(__name__)

# Configurations
app.config.from_object('config')

# Define the database object which is imported
# by modules and controllers
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Sample HTTP error handling
@app.errorhandler(404)
def not_found (error: Exception) -> str:
    return render_template('404.html'), 404

# Import a module / component using its blueprint handler variable (mod_auth)

from app.modules.animal.controllers import mod_anm as anm_module
from app.modules.auth.controllers import mod_auth as auth_module
from app.modules.org.controllers import mod_org as org_module


# Register blueprint(s)
app.register_blueprint(auth_module)
app.register_blueprint(org_module)
app.register_blueprint(anm_module)
# app.register_blueprint(xyz_module)
# ..

# Build the database:
# This will create the database file using SQLAlchemy
db.create_all()

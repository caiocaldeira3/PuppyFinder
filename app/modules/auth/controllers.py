# Import flask dependencies
from flask import Blueprint, request, render_template, flash, g, session, redirect, url_for

# Import password / encryption helper tools
from werkzeug.security import check_password_hash, generate_password_hash

# Import module forms
from app.modules.auth.forms import LoginForm

# Import module models (i.e. User)
from app.models.user import User

# Define the blueprint: "auth", set its url prefix: app.url/auth
mod_auth = Blueprint("auth", __name__, url_prefix="/auth")

# Set the route and accepted methods
@mod_auth.route("/signin-user/", methods=["GET", "POST"])
def signin_user () -> str:

    # If sign in form is submitted
    form = LoginForm(request.form)

    # Verify the sign in form
    if form.validate_on_submit():

        user = User.query.filter_by(email=form.email.data).first()

        if user and check_password_hash(user.password, form.password.data):

            session["user_id"] = user.id

            flash(f"Welcome {user.name}")

            return redirect(url_for("auth.home"))

        flash("Wrong email or password", "error-message")

    return render_template("auth/signin-user.html", form=form)

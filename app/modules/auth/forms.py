from flask_wtf import FlaskForm
from wtforms import TextField, PasswordField
from wtforms.validators import Required, Email


class LoginForm (FlaskForm):
    email    = TextField(
        "Email", [Email(), Required(message="É obrigatório o uso do e-mail")]
    )
    password = PasswordField(
        "Senha", [Required(message="É obrigatório o uso da senha")]
    )

class RegisterForm (FlaskForm):
    name        = TextField(
        "Nome", [Required(message="É obrigatório fornecer seu nome")]
    )
    email       = TextField(
        "Email", [Email(), Required(message="É obrigatório o uso do e-mail")]
    )
    password    = PasswordField(
        "Senha", [Required(message="É obrigatório o uso da senha")]
    )
    telephone   = TextField("Telefone")
    description = TextField("Descrição")

class RegisterOrgForm (RegisterForm):
    donation_url    = TextField("Link para Doações")
    website         = TextField("Site da Organização")

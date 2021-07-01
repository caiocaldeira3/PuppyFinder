from flask_wtf import FlaskForm
from wtforms import TextField, PasswordField, RadioField, SelectField, IntegerField
from wtforms.validators import Required, Email, InputRequired

class RegisterAnimalForm (FlaskForm):
    name        = TextField(
        "Nome", [Required(message="É obrigatório fornecer seu nome")]
    )
    age         = IntegerField("Idade")
    sex         = SelectField(
        "Sexo",
        choices=[],
        validators=[InputRequired()]
    )  
    fur         = TextField("Pelagem")
    size        = SelectField("Sexo", choices=[]) 
    neutered    = RadioField(
        "Castrado",
        choices = [(True,'Sim'),(False,'Não')],
        validators=[InputRequired("É obrigatório informar se castrado")]
    )
    vaccinated    = RadioField(
        "Vacinado",
        choices = [(True,'Sim'),(False,'Não')],
        validators=[InputRequired("É obrigatório informar se vacinado")]
    )
    dewormed    = RadioField(
        "Vermifugado",
        choices = [(True,'Sim'),(False,'Não')],
        validators=[InputRequired("É obrigatório informar se vermifugado")]
    )
    desc         = TextField("Descrição")
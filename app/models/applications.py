import enum

from app import db
from app.models.animal import Animal
from app.models.user import User

class ApplicationStatus (enum.Enum):
    initial   = "Verificação com Organização"
    transit   = "Conversa entre Organização e Interessado"
    accepted  = "Aceito"
    failed    = "Recusado"

# Define a User model
class Application (db.Model):

    __tablename__   : str = "application"

    id              : db.Integer = db.Column(db.Integer, primary_key=True)

    user_id         : db.Integer = db.Column(db.Integer, db.ForeignKey('auth_user.id'))
    animal_id       : db.Integer = db.Column(db.Integer, db.ForeignKey('animals.id'))

    status          : ApplicationStatus = db.Column(
        db.Enum(ApplicationStatus), default=ApplicationStatus.initial, nullable=False
    )

    date_created    : db.DateTime = db.Column(db.DateTime, default=db.func.current_timestamp())
    date_modified   : db.DateTime = db.Column(
        db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp()
    )

    def __repr__ (self) -> str:
        return f"<Application > {self.user_id} -> {self.anima_id}"

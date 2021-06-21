import enum

from app import db

class AnimalGenders (enum.Enum):
    female      = "Fêmea"
    male        = "Macho"
    undefined   = "Indeterminado"

class AnimalSizes (enum.Enum):
    tiny        = "Minúsculo"
    small       = "Pequeno"
    medium      = "Médio"
    large       = "Grande"
    extra_large = "Extra Grande"

class Animal (db.Model):

    __tablename__   : str = "animals"
    id              : db.Integer = db.Column(db.Integer, primary_key=True)

    # Animal Name
    name            : db.String = db.Column(db.String(128), nullable=False)

    # Animal Attributes
    age             : db.Integer = db.Column(db.Integer, nullable=True)
    sex             : AnimalGenders = db.Column(
        db.Enum(AnimalGenders), default=AnimalGenders.undefined, nullable=False
    )
    fur             : db.String = db.Column(db.String(64), nullable=True)
    size            : AnimalSizes = db.Column(
        db.Enum(AnimalSizes), default=AnimalSizes.medium, nullable=True
    )

    neutered        : db.Boolean = db.Column(db.Boolean, nullable=False)
    vaccinated      : db.Boolean = db.Column(db.Boolean, nullable=False)
    dewormed        : db.Boolean = db.Column(db.Boolean, nullable=False)

    # Animal Description

    desc            : db.Text = db.Column(db.Text(500), nullable=True)
    # org_ownder      : db.Integer = db.Column(db.Integer, db.ForeignKey("auth_org"), nullable=False)

    def __repr__ (self) -> str:
        return f"<Animal {self.name}>"

import dataclasses as dc

from app import db

@dc.dataclass()
class BaseAuth(db.Model):

    __abstract__    : bool = True

    id              : db.Integer = db.Column(db.Integer, primary_key=True)

    # User Name
    name            : db.String = db.Column(db.String(128),  nullable=False)

    # Identification Data: email & password
    email           : db.String = db.Column(db.String(128),  nullable=False, unique=True)
    password        : db.String = db.Column(db.String(192),  nullable=False)

    date_created    : db.DateTime = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified   : db.DateTime = db.Column(
        db.DateTime,  default=db.func.current_timestamp(), onupdate=db.func.current_timestamp()
    )

    # New instance instantiation procedure
    def __init__ (self, name: str, email: str, password: str) -> None:

        self.name     = name
        self.email    = email
        self.password = password

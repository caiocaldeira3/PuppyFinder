from app import db
from app.models.base_auth import BaseAuth

# Define a User model
class User (BaseAuth):

    __tablename__   : str = "auth_user"

    access          : db.Integer = db.Column(db.Integer, default=0, nullable=False)

    # Extra Information
    telephone       : db.String = db.Column(db.String(15), nullable=True)
    description     : db.Text = db.Column(db.Text(500), nullable=True)

    def __repr__ (self) -> str:
        return f"<User > {self.name}"

from app import db
from app.models.base_auth import BaseAuth

class Organization (BaseAuth):

    __tablename__   : str = "auth_org"

    # Additional Data: Telephone / Website / Description
    telephone       : db.String = db.Column(db.String(16), nullable=True)
    website         : db.String = db.Column(db.String(64), nullable=True)

    donation_url    : db.String = db.Column(db.String(64), nullable=True)

    description     : db.Text = db.Column(db.Text(500), nullable=True)

    # Animal-Org Relationship | One-To-Many
    # animal          : db.RelationshipProperty = db.relationship("animals")

    def __repr__ (self) -> str:
        return f"<Organization {self.name}>"

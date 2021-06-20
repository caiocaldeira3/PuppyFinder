from app import db
from app.models.base_auth import BaseAuth

class Organization(BaseAuth):

    __tablename__   : str = 'auth_org'

    # Additional Data: Telephone / Website / Description /

    def __repr__ (self) -> str:
        return f"<Organization {self.name}>"

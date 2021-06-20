from app.models.base_auth import BaseAuth

# Define a User model
class User(BaseAuth):

    __tablename__   : str = 'auth_user'

    def __repr__ (self) -> str:
        return f"<User > {self.name}"

from app.models.base_auth import BaseAuth

# Define a User model
class User(BaseAuth):

    __tablename__   : str = "auth_user"

    access          : int

    def __init__ (self, name: str, email: str, password: str, access: int = 0) -> None:
        super().__init__(name, email)

        self.access = access

    def __repr__ (self) -> str:
        return f"<User > {self.name}"

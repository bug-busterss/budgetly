from typing import Optional

from pydantic import BaseModel


class SignupUser(BaseModel):
    name: str
    username: str
    password: str


class CreateTodo(BaseModel):
    title: str


class UpdateTodo(BaseModel):
    title: Optional[str]
    isCompleted: Optional[bool]

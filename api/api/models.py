from typing import Optional

from pydantic import BaseModel


class AddActivity(BaseModel):
    isExpense: bool
    name: str
    amount: int


class SignupUser(BaseModel):
    name: str
    username: str
    password: str


class CreateTodo(BaseModel):
    title: str


class UpdateTodo(BaseModel):
    title: Optional[str]
    isCompleted: Optional[bool]

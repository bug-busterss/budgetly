from fastapi import Depends, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login.exceptions import InvalidCredentialsException
from passlib.hash import bcrypt
from prisma import Prisma
from prisma.models import User

from .loginManager import manager, query_user
from .models import AddActivity, SignupUser

app = FastAPI()
manager.useRequest(app)

origins = [
    "http://127.0.0.1",
    "http://127.0.0.1:5173",
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/activities")
async def get_activities(user: User = Depends(manager)):
    async with Prisma() as db:
        activities = await db.activity.find_many(where={"userId": user.id})
    return {"activities": activities}


@app.post("/activities")
async def add_activity(activity: AddActivity, user: User = Depends(manager)):
    async with Prisma() as db:
        new_activity = await db.activity.create(
            data={
                "name": activity.name,
                "amount": activity.amount,
                "userId": user.id,
                "isExpense": activity.isExpense,
            }
        )
        if activity.isExpense:
            await db.user.update(
                where={"id": user.id}, data={"balance": {"decrement": activity.amount}}
            )
        else:
            await db.user.update(
                where={"id": user.id}, data={"balance": {"increment": activity.amount}}
            )
    return {"activity": new_activity}


@app.get("/balance")
async def get_balance(user: User = Depends(manager)):
    async with Prisma() as db:
        user = await db.user.find_unique(where={"id": user.id})
    return {"balance": user.balance}


@app.get("/users/me")
async def get_user(request: Request):
    token = await manager._get_token(request)
    return {"user": await manager.get_current_user(token), "token": token}


@app.post("/signup")
async def signup(data: SignupUser):
    print(data)
    name = data.name
    username = data.username
    hashed_password = bcrypt.hash(data.password)

    async with Prisma() as db:
        new_user = await db.user.create(
            data={
                "name": name,
                "username": username,
                "password": hashed_password,
            }
        )
    return {"user": new_user}


@app.post("/login")
async def login(data: OAuth2PasswordRequestForm = Depends()):
    username = data.username
    password = data.password

    user = await query_user(username)

    if user is None:
        raise InvalidCredentialsException
    elif not bcrypt.verify(password, user.password):
        raise InvalidCredentialsException

    access_token = manager.create_access_token(data={"sub": username})
    return {"access_token": access_token, "token_type": "bearer"}

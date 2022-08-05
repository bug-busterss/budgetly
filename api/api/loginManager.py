from datetime import timedelta

from fastapi_login import LoginManager
from prisma import Prisma

SECRET = "23803eb78b223d5e10527c0fe564ea5d559a6ee7051e737d"

manager = LoginManager(
    SECRET,
    token_url="/login",
    default_expiry=timedelta(weeks=52),
)


@manager.user_loader()
async def query_user(username: str):
    async with Prisma() as db:
        user = await db.user.find_unique(where={"username": username})
    return user

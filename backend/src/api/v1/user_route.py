from fastapi import APIRouter

from db.orm.user_orm import add_user
from db.schemas.user_schemas import UserAddSchema

from api.v1.common_route import SessionDep

router = APIRouter()


@router.post("/users")
async def add_user_api(data: UserAddSchema, session: SessionDep):
    result = await add_user(data=data, session=session)
    return result


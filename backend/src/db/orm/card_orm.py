# Файл с описанием функций (методов) для создания запросов и команд базе данных
from sqlalchemy.orm import Session

from src.db.models.card_model import cardModel
from src.db.schemas.card_shemas import CardAddSchema

async def add_card(data: CardAddSchema, session: Session):
    new_card = cardModel( 
        id = data.id,
        deck_id = data.deck_id,
        front_text = data.front_text,
        back_text = data.back_text
    )
    session.add(new_card)
    await session.commit()
    return {"ok": True}

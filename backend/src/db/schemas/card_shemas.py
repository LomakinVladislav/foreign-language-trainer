from pydantic import BaseModel

class CardAddSchema(BaseModel):
    deck_id: int
    front_text: str
    back_text: str
    transcription: str
    image_url: str

class CardSchema(CardAddSchema):
    id: int

# Схема для создания карточек вместе с новой колодой
class CardCreateSchema(BaseModel):
    front_text: str
    back_text: str
    transcription: str
    image_url: str

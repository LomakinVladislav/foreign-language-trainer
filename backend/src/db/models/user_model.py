from sqlalchemy.orm import Mapped, relationship, mapped_column
from sqlalchemy import DateTime
from db.database import Base, intpk
from datetime import datetime


class userModel(Base):
    __tablename__ = "users"  

    id: Mapped[intpk]
    username: Mapped[str] = mapped_column(unique=True)
    email: Mapped[str] = mapped_column(unique=True)
    full_name: Mapped[str]
    hashed_password: Mapped[str]
    disabled: Mapped[bool]
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    decks = relationship("deckModel", back_populates="users")
    favorites_decks = relationship("favoritesDecksModel", back_populates="users", passive_deletes=True)
    reset_passwords = relationship("resetPasswordModel", back_populates="users", passive_deletes=True)

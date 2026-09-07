from fastapi import FastAPI
from core.middleware import add_cors_middleware
from api.base import api_router
from core.redis_client import lifespan
import uvicorn


def create_app() -> FastAPI:
    app = FastAPI(title="foreign_language_trainer", version="beta", lifespan=lifespan)
    
    add_cors_middleware(app)
    
    app.include_router(api_router)
    
    return app

app = create_app()

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

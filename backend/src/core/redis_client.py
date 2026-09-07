import redis.asyncio as redis
from contextlib import asynccontextmanager

redis_pool = None

@asynccontextmanager
async def lifespan(app):
    global redis_pool
    redis_pool = redis.ConnectionPool.from_url(
        "redis://localhost:6379", decode_responses=True, max_connections=20
    )
    yield
    await redis_pool.disconnect()

def get_redis() -> redis.Redis:
    return redis.Redis(connection_pool=redis_pool)
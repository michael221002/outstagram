#python -m uvicorn main:app --reload


from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from pydantic import BaseModel, Field
from jose import jwt
from enum import Enum
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
import json
import time


items = [
    {"name": "Computer", "preis": 1000, "typ": "hardware"},
    {"name": "Monitor", "preis": 800, "typ": "hardware"},
    {"name": "Diablo 3", "preis": 50, "typ": "software"},
    {"name": "Windows", "preis": 90, "typ": "software"}
]

class Type(Enum):
    hardware = "hardware"
    software = "software"

class Item(BaseModel):
    name: str 
    preis: int = Field(100, gt=0, lt=2500)
    typ: Type

class ResponseItem(BaseModel):
    name: str
    typ: Type

app = FastAPI()
oauth2_schema = OAuth2PasswordBearer(tokenUrl="login")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##@app.post("/login")
##async def login(data: OAuth2PasswordRequestForm = Depends()):
##    if data.username == "test" and data.password == "test":
##        access_token = jwt.encode({"user": data.username}, key="secret")
##        return {"access_token": access_token, "token_type": "bearer"}
##    raise HTTPException(
##        status_code=status.HTTP_401_UNAUTHORIZED,
##        detail="Incorrect username oder password",
##        headers={"WWW-Authenticate": "Bearer"},
##    )
##
##@app.get("/items/", dependencies=[Depends(oauth2_schema)])
##async def hello(q: Optional[str] = None):
##    if q:
##        data = []
##        for item in items:
##            if item.get("typ") == q:
##                data.append(item)
##        return data
##    return items
##
##@app.get("/items/{itemd_id}", dependencies=[Depends(oauth2_schema)])
##async def get_item(item_id: int):
##    return items[item_id]
##
##@app.post("/items/", response_model=ResponseItem)
##async def create_item(data: Item):
##    items.append(data)
##    return data
##
##@app.put("/items/{itemd_id", dependencies=[Depends(oauth2_schema)])
##async def change_item(item_id: int, item: Item):
##    items[item_id] = item
##    return item
##
##@app.delete("/items/{itemd_id}")
##async def delete_item(item_id: int):
##    item = items[item_id]
##    items.pop(item_id)
##    return {"deleted: ", item}

@app.get("/hallo")
async def hallo():
    return {"message":"Hello World"}

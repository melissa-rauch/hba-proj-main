import os
import json
from random import choice, randint
from datetime import datetime
import server
import model
import crud



os.system('dropdb ratings')
os.system('createdb ratings')

model.connect_to_db(server.app)
model.db.create_all()

with open('data/midwives.json') as f:
    midwife_data = json.loads(f.read())

midwives_in_db = []

for midwife in midwife_data:

    name, email, password, website, address, bio, counties, img, lat, lng = (midwife['name'],
                                                        midwife['email'],
                                                        midwife['password'],
                                                        midwife['website'],
                                                        midwife['address'],
                                                        midwife['bio'],
                                                        midwife['counties'],
                                                        midwife['img'],
                                                        midwife['lat'],
                                                        midwife['lng'])
    db_midwife = crud.create_midwife(name,
                                    email,
                                    password,
                                    website,
                                    address,
                                    bio,
                                    counties,
                                    img,
                                    lat,
                                    lng)
    
    midwives_in_db.append(db_midwife)

with open('data/users.json') as f:
    user_data = json.loads(f.read())

users_in_db = []

for user in user_data:

    name, email, password, address, bio, img, lat, lng = (user['name'],
                                                        user['email'],
                                                        user['password'],
                                                        user['address'],
                                                        user['bio'],
                                                        user['img'],
                                                        user['lat'],
                                                        user['lng'])
    db_user = crud.create_user(name,
                                email,
                                password,
                                address,
                                bio,
                                img,
                                lat,
                                lng)
    
    users_in_db.append(db_user)


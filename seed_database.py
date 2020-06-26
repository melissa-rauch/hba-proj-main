import os
import json
from random import choice, randint
from datetime import datetime
import server
import model
import crud



os.system('dropdb babycatcher')
os.system('createdb babycatcher')

model.connect_to_db(server.app)
model.db.create_all()

with open('data/midwives.json') as f:
    midwife_data = json.loads(f.read())

midwives_in_db = []

for midwife in midwife_data:

    name, creds, email, password, phone, address, website, bio, counties, location, services, img, lat, lng = (midwife['name'],
                        midwife['creds'],
                        midwife['email'],
                        midwife['password'],
                        midwife['phone'],
                        midwife['address'],
                        midwife['website'],
                        midwife['bio'],
                        midwife['counties'],
                        midwife['location'],
                        midwife['services'],
                        midwife['img'],
                        midwife['lat'],
                        midwife['lng'])
    db_midwife = crud.create_midwife(name, 
                                    creds, 
                                    email, 
                                    password, 
                                    phone, 
                                    address, 
                                    website, 
                                    bio, 
                                    counties, 
                                    location, 
                                    services, 
                                    img, 
                                    lat, 
                                    lng)
    
    midwives_in_db.append(db_midwife)

with open('data/users.json') as f:
    user_data = json.loads(f.read())

users_in_db = []

for user in user_data:

    first_name, last_name, email, password, address, bio, img, lat, lng = (user['first_name'],
                                                                            user['last_name'],
                                                                            user['email'],
                                                                            user['password'],
                                                                            user['address'],
                                                                            user['bio'],
                                                                            user['img'],
                                                                            user['lat'],
                                                                            user['lng'])
    db_user = crud.create_user(first_name,
                                last_name,
                                email,
                                password,
                                address,
                                bio,
                                img,
                                lat,
                                lng)
    
    users_in_db.append(db_user)


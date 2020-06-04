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

    name, email, website, address, bio, counties, img = (midwife['name'],
                                                        midwife['email'],
                                                        midwife['website'],
                                                        midwife['address'],
                                                        midwife['bio'],
                                                        midwife['counties'],
                                                        midwife['img'])
    db_midwife = crud.create_midwife(name,
                                    email,
                                    website,
                                    address,
                                    bio,
                                    counties,
                                    img)
    
    midwives_in_db.append(db_midwife)

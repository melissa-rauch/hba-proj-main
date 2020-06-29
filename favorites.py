from flask import (Flask, request) 
import crud

def get_user_favs_from_db():
    
    data = request.args.get("userId")

    list_midwives = crud.get_fav_midwives(data)
    
    fav_mw = []
    print(list_midwives)
    for midwives in list_midwives:
        for midwife in midwives:
            mw = {
                "mwId" : midwife.mw_id,
                "name" : midwife.name,
                "creds": midwife.creds,
                "email" : midwife.email,
                "password" : midwife.password,
                "phone": midwife.phone,
                "address" : midwife.address,
                "website" : midwife.website,
                "bio" : midwife.bio,
                "counties" : midwife.counties,
                "location": midwife.location,            
                "services": midwife.services,
                "img" : midwife.img
            } 
            fav_mw.append(mw) 
    
    return fav_mw

def add_user_fav():

    data = request.get_json(force=True)

    if data["userId"] == None:
        return "Invalid"
    else:
        crud.create_fav(data["userId"], data["mwId"])
        return "Valid"
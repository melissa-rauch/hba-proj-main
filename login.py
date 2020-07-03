from flask import (Flask, request) 
import crud



def verify_user_login():
    """Validate user login"""
    data = request.get_json(force=True)

    email = data["email"]
    password = data["password"]

    user = crud.get_user_by_email(email)

    if user == None:
        return "Invalid"
    else:
        if user.password == password:
            user_profile = {
                            "user_id" : user.user_id,
                            "first_name" : user.first_name,
                            "last_name" : user.last_name,
                            "email" : user.email,
                            "password" : user.password,
                            "address" : user.address,
                            "lat" : user.lat,
                            "lng" : user.lng,
                            "img" : user.img,
                            "bio" : user.bio
                        }
            return user_profile
        else:
            return "Invalid"
  

def verify_mw_login():
    """Validate mw login"""
    data = request.get_json(force=True)

    email = data["email"]
    password = data["password"]

    midwife = crud.get_midwife_by_email(email)

    if midwife == None:
        return "Invalid"
    else:
        if midwife.password == password:
            midwife_profile = {
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
            return midwife_profile
        else:
            return "Invalid"


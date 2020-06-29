from flask import (Flask, request) 
import crud

def get_user_data_from_db():
    """Retrieve user data from database"""
    data = request.get_json(force=True)

    user = crud.get_user_by_email(data["email"])
    
    return data, user

def verify_user_login(data, user):
    """Validate password"""
    if user[0].password == data["password"]:
        user_profile = {
                        "user_id" : user[0].user_id,
                        "first_name" : user[0].first_name,
                        "last_name" : user[0].last_name,
                        "email" : user[0].email,
                        "password" : user[0].password,
                        "address" : user[0].address,
                        "lat" : user[0].lat,
                        "lng" : user[0].lng,
                        "img" : user[0].img,
                        "bio" : user[0].bio
                    }
        return user_profile
    else:
        return "Invalid"

def get_mw_data_from_db():
    """Retrieve midwife data from database"""
    data = request.get_json(force=True)

    midwife = crud.get_midwife_by_email(data['email'])
    
    return data, midwife

def verify_mw_login(data, midwife):
    """Validate password"""
    if not midwife.email:
        return "Invalid email"

    if midwife.password == data["password"]:
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
        return "Invalid Password"


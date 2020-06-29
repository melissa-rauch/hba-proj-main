from flask import (Flask, request) 
import crud



def verify_user_login():
    """Validate password"""
    data = request.get_json(force=True)

    user = crud.get_user_by_email(data["email"])
    print(user)
    if user == 'None':
        return "invalid email"
    else:
        if user.password == data["password"]:
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
            return "Invalid password"
  

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


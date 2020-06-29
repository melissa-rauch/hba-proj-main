from flask import (Flask, request) 
import crud

def get_midwife_from_db():
    data = request.args.get('mwId')

    midwife = crud.get_midwife_by_id(data)

    midwife_data = {  
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

    return midwife_data

def get_midwives_from_db():

    midwives = crud.get_midwives()
    dict_mw = []
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
            "img" : midwife.img,
            "lat" : midwife.lat,
            "lng" : midwife.lng
            } 
        dict_mw.append(mw)               

    return dict_mw
from flask import (Flask, request) 
import crud

def create_new_user():
    data = request.get_json(force=True)

    user = crud.get_user_by_email(data["email"])
    if user:
        return "Invalid"
    else:
        crud.quick_create_user(
                                data["email"], 
                                data["password"], 
                                data["firstName"], 
                                data["lastName"], 
                                data["address"], 
                                data["bio"], 
                                data['img'])
        return "Valid"

def create_new_mw():
    data = request.get_json(force=True)

    midwife = crud.get_midwife_by_email(data["email"])

    if midwife:
        return "Invalid"
    else:
        crud.add_midwife(
                            data["name"],
                            data["creds"], 
                            data["email"],
                            data["password"], 
                            data["phone"],
                            data["website"],
                            data["address"], 
                            data["counties"],
                            data["location"],
                            data["services"],
                            data["bio"]
                            )
        return "Valid"
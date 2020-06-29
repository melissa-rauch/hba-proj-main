from flask import (Flask, request) 
import crud

def get_user_from_db():
    
    data = request.args.get('userId')

    user = crud.get_user_by_id(data)

    user_data = {  
            "userId" : user.user_id,
            "firstName" : user.first_name,
            "lastName" : user.last_name,
            "email" : user.email,
            "password" : user.password,
            "address" : user.address,
            "img" : user.img,
            "bio" : user.bio
        } 
    return user_data
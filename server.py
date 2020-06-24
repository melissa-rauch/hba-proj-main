"""Server side"""

from flask import (Flask, render_template, request, flash, session, redirect, jsonify)
from model import connect_to_db
import crud
from jinja2 import StrictUndefined
import json
import twilio 
import os
#
import cloudinary
import cloudinary.uploader
import cloudinary.api

from werkzeug.utils import secure_filename

from twilio.rest import Client
import os

account_sid = os.environ["ACCOUNT_SID"]
auth_token = os.environ["AUTH_TOKEN"]
client = Client(account_sid, auth_token)

cloudinary.config(
    cloud_name = "mrauch",
    API_KEY = os.environ["API_KEY"],
    API_SECRET = os.environ["API_SECRET"]
)
#

ACCOUNT_SID = os.environ["ACCOUNT_SID"]
AUTH_TOKEN  = os.environ["AUTH_TOKEN"]

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route('/userfavorites')
@app.route('/logout')
@app.route('/midwife-login')
@app.route('/user-login')
@app.route('/directory')
@app.route('/')
def render_app():
    """Show App"""

    return render_template('index.html')

@app.route('/midwife-profile/<mwId>')
def render_midwife_user_profile(mwId):
    """direct a midwife's own user profile"""
    return render_template('index.html')

@app.route('/midwife/<mw_id>')
def render_midwife_profile(mw_id):
    """direct to individual midwive's profile"""
    return render_template('index.html')

@app.route('/user/<user_id>')
def render_user_profile(user_id):
    """direct to individual midwive's profile"""
    return render_template('index.html')



@app.route('/api/message', methods=['POST'])
def send_message():
    """Send a SMS to a Midwife"""
    data = request.get_json(force=True)

    message = client.messages \
                    .create(
                        body=(
                            "You recieved a message from The Babycatcher App: " + data["body"] + "  " +
                            "From: " + data['name'] +  "  " +
                            "Phone: " + data['phone'] +  "  " +
                            "Email: " + data['email']+  "  " +
                            "EDD: " + data['due']),
                        from_='+12512500805',
                        to=data['to']
                    )

    return message.sid

@app.route('/api/user')
def get_user_by_id():
    """Show directory of Midwives"""
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
    return jsonify(user_data)

@app.route('/api/midwife')
def get_midwife_by_id():
    """Show directory of Midwives"""
    data = request.args.get('mwId')

    midwife = crud.get_midwife_by_id(data)

    midwife_data = {  
            "mwId" : midwife.mw_id,
            "name" : midwife.name,
            "email" : midwife.email,
            "password" : midwife.password,
            "counties" : midwife.counties,
            "website" : midwife.website,
            "address" : midwife.address,
            "img" : midwife.img,
            "bio" : midwife.bio
        } 
                      

    return jsonify(midwife_data)    

@app.route('/api/midwives')
def show_directory():
    """Show directory of Midwives"""
    midwives = crud.get_midwives()
    dict_mw = []
    for midwife in midwives:
        mw = {"mw_id" : midwife.mw_id,
            "name" : midwife.name,
            "email" : midwife.email,
            "password" : midwife.password,
            "website" : midwife.website,
            "address" : midwife.address,
            "counties" : midwife.counties,
            "lat" : midwife.lat,
            "lng" : midwife.lng,
            "img" : midwife.img,
            "bio" : midwife.bio} 
        dict_mw.append(mw)               

    return jsonify(dict_mw)

@app.route('/api/fav-midwives')
def show_fav_midwives():
    """Show favorite midwives by userId"""
    data = request.args.get("userId")

    list_midwives = crud.get_fav_midwives(data)
    
    fav_mw = []
    print(list_midwives)
    for midwives in list_midwives:
        for midwife in midwives:
            mw = {
                "mw_id" : midwife.mw_id,
                "name" : midwife.name,
                "email" : midwife.email,
                "password" : midwife.password,
                "website" : midwife.website,
                "address" : midwife.address,
                "counties" : midwife.counties,
                "img" : midwife.img,
                "bio" : midwife.bio} 
            fav_mw.append(mw)               
    print(fav_mw)
    return jsonify(fav_mw)

@app.route('/api/add-fav', methods=['POST'])
def add_fav():
    """Register a new user"""

    data = request.get_json(force=True)

    if data["userId"] == None:
        return jsonify("Invalid")
    else:
        crud.create_fav(data["userId"], data["mwId"])
        return jsonify("Valid")
    
@app.route('/api/register', methods=['POST'])
def register_user():
    """Register a new user"""

    data = request.get_json(force=True)

    user = crud.get_user_by_email(data["email"])
#
    filename = data["img"]
    print(filename)

    if filename:
            response = cloudinary.uploader.upload(filename)
            print('response for cloudinary'. response)

    img = secure_filename(filename.filename)
#
    if user:
        return jsonify("Invalid")
    else:
        crud.quick_create_user(
                                data["email"], 
                                data["password"], 
                                data["firstName"], 
                                data["lastName"], 
                                data["address"], 
                                data["bio"], 
                                data["img"])
        return jsonify("Valid")

#import user_login

@app.route('/api/login', methods=['POST'])
def login_user():
    """Login a current user"""

    #data, user = user_login.get_user_data_from_db()
    #return jsonify(user_login.verify_login_against_user(data, user))
    data = request.get_json(force=True)

    user = crud.get_user_by_email(data["email"])
    
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
        return jsonify(user_profile)
    else:
        return jsonify("Invalid")

@app.route('/api/mw-login', methods=['POST'])
def login_midwife():
    """Login a midwife"""
    data = request.get_json(force=True)

    midwife = crud.get_midwife_by_email(data['email'])
    
    if midwife.password == data["password"]:
        midwife_profile = {
                        "mwId" : midwife.mw_id,
                        "name" : midwife.name,
                        "email" : midwife.email,
                        "password": midwife.password,
                        "address" : midwife.address,
                        "img" : midwife.img,
                        "bio" : midwife.bio
                    }
        # session[user_id] = user[0].user_id          
        return jsonify(midwife_profile)
    else:
        return jsonify("Invalid")



if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
"""Server side"""

from flask import (Flask, render_template, request, flash, session, redirect, jsonify)
from model import connect_to_db
import crud
from jinja2 import StrictUndefined
import json

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


@app.route('/directory')
@app.route('/')
def render_app():
    """Show App"""

    return render_template('index.html')

@app.route('/midwife/<mw_id>')
def render_midwife_profile(mw_id):
    """direct to individual midwive's profile"""
    return render_template('index.html')

@app.route('/user/<user_id>')
def render_user_profile(user_id):
    """direct to individual midwive's profile"""
    return render_template('index.html')


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
    """Show directory of Midwives"""
    midwives = crud.get_fav_midwives()
    fav_mw = []
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
        fav_mw.append(mw)               


    return jsonify(fav_mw)

@app.route('/api/register', methods=['POST'])
def register_user():
    """Register a new user"""

    data = request.get_json(force=True)

    user = crud.get_user_by_email(data["email"])

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
        # user_info[email] = data.email
        # user_info[password] = data.email




@app.route('/api/login', methods=['POST'])
def login_user():
    """Login a current user"""
    data = request.get_json(force=True)
    print(data)

    user = crud.get_user_by_email(data["email"])
    print(user)
    
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
        # session[user_id] = user[0].user_id          
        return jsonify(user_profile)
    else:
        return jsonify("Invalid")




if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
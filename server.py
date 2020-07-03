"""Server side"""

from flask import (Flask, render_template, request, flash, session, redirect, jsonify)
from model import connect_to_db
import crud
from jinja2 import StrictUndefined
import json
import twilio 
import os
from twilio.rest import Client


account_sid = os.environ["ACCOUNT_SID"]
auth_token = os.environ["AUTH_TOKEN"]
client = Client(account_sid, auth_token)


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

import users

@app.route('/api/user')
def get_user_by_id():
    """Return user data"""
    
    return jsonify(users.get_user_from_db())

import midwives

@app.route('/api/midwife')
def get_midwife_by_id():
    """Get individual Midwife by Id"""

    return jsonify(midwives.get_midwife_from_db()) 

@app.route('/api/midwives')
def show_directory():
    """Show directory of Midwives"""

    return jsonify(midwives.get_midwives_from_db())

import favorites
@app.route('/api/fav-midwives')
def show_fav_midwives():
    """Show favorite midwives by userId"""
              
    return jsonify(favorites.get_user_favs_from_db())

@app.route('/api/add-fav', methods=['POST'])
def add_fav():
    """Register a new user"""

    return jsonify(favorites.add_user_fav())
    
import login

@app.route('/api/login', methods=['POST'])
def login_user():
    """Login a current user"""

    return jsonify(login.verify_user_login())

@app.route('/api/mw-login', methods=['POST'])
def login_midwife():
    """Login a midwife"""
    
    return jsonify(login.verify_mw_login())
    
import register

@app.route('/api/register', methods=['POST'])
def register_user():
    """Register a new user"""
    
    return jsonify(register.create_new_user())

@app.route('/api/mwregister', methods=['POST'])
def register_midwife():
    """Register a new midwife"""

    return jsonify(register.create_new_mw())
    

if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
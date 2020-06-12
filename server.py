"""Server side"""

from flask import (Flask, render_template, request, flash, session, redirect, jsonify)
from model import connect_to_db
import crud
from jinja2 import StrictUndefined
import json

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined

# INSERT STUB ROUTES HERE

@app.route('/directory')
@app.route('/midwife')
@app.route('/user')
@app.route('/')
def render_app():
    """Show App"""

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

@app.route('/register', methods=['POST'])
def register_user():
    """Create a new user"""
    email = request.form.get('email')
    password = request.form.get('password')

    user = crud.get_user_by_email(email)
    if user:
        flash('Cannot create an account with that email.  Try again.')
    else:
        crud.create_user(email, password)
        flash('Account created! Please log in.')

    return redirect('/') # if login correct, direct to /profile/<user_id>


@app.route('/login', methods=['POST'])
def login_user():
    """Login a current user"""
    email = request.form.get('email')
    password = request.form.get('password')

    user = crud.get_user_by_email(email)
    if user:
        if user.email == email and user.password == password:
            session['user_id'] = user.user_id
            flash('Logged In!')
    # else:
    
    #     flash('Invalid user and password combination')

        return redirect('/') # if login correct, direct to /profile/<user_id>



if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
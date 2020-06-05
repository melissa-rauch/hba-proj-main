"""Server side"""

from flask import (Flask, render_template, request, flash, session, redirect)
from model import connect_to_db
import crud
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined

# INSERT STUB ROUTES HERE


@app.route('/')
def show_login():
    """Show login page"""

    return render_template('login.html')

@app.route('/home')
def show_user_home():
    """Show User homepage"""

    return render_template('home.html')

@app.route('/midwife')
def show_midwife_profile():
    """Show Midwife profile"""

    return render_template('midwife.html')

@app.route('/directory')
def show_directory():
    """Show directory of Midwives"""
    midwives = crud.get_midwives()

    return render_template('directory.html', midwives = midwives)


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
    else:
    
        flash('Invalid user and password combination')

    return redirect('/') # if login correct, direct to /profile/<user_id>


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
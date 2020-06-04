"""Server side"""

from flask import (Flask, render_template, request, flash, session, redirect)
from model import connect_to_db
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined

# INSERT STUB ROUTES HERE
@app.route('/')
def show_homepage():
    """Show the homepage."""

    return render_template('index.html')


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

    return redirect('/')


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

    return redirect('/')


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)
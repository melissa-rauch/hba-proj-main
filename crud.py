"""CRUD Operations"""

from model import db, User, Midwife, connect_to_db

#FUNCTIONS GO HERE



if __name__ == '__main__':
    from server import app
    connect_to_db(app)
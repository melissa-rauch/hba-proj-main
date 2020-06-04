"""Models for the catch app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """A user."""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_name = db.Column(db.String(50))
    user_email = db.Column(db.String(50), unique=True)
    user_password = db.Column(db.String(20))
    user_address = db.Column(db.String)
    user_lat = db.Column(db.Integer)
    user_lng = db.Column(db.Integer)
    user_bio = db.Column(db.Text)
    user_img = db.Column(db.String)
    fav_id = db.Column(db.Integer, db.ForeignKey('favorites.fav_id'))

    def __repr__(self):

        return f'<User user_id={self.user_id} name={self.user_name} email={self.user_email}>'


class Midwife(db.Model):
    """A Midwife"""

    __tablename__ = 'midwives'
   
    mw_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    mw_name = db.Column(db.String(50))
    mw_email = db.Column(db.String(50), unique=True)
    mw_password = db.Column(db.String(20))
    website = db.Column(db.String)
    mw_address = db.Column(db.String(20))
    mw_lat = db.Column(db.Integer)
    mw_lng = db.Column(db.Integer)
    mw_bio = db.Column(db.Text)
    mw_img = db.Column(db.String)

    def __repr__(self):
        return f'<Midwife mw_id={self.mw_id} name={self.mw_name} email={self.mw_email}>'

class Favorite(db.Model):
    """A Favorite"""

    __tablename__ = 'favorites'

    fav_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    mw_id = db.Column(db.Integer, db.ForeignKey('midwives.mw_id'))

    user = db.relationship('User', backref='favorites')
    midwife = db.relationship('Midwife', backref='favorites')

    def __repr__(self):
        return f'<Favorite fav_id={self.fav_id} mw_id={self.mw_id} user_id={self.user_id}>'



def connect_to_db(flask_app, db_uri='postgresql:///babycatcher', echo=False):
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    flask_app.config['SQLALCHEMY_ECHO'] = echo
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = flask_app
    db.init_app(flask_app)

    print('Connected to the db!')


if __name__ == '__main__':
    from server import app

#     # Call connect_to_db(app, echo=False) if your program output gets
#     # too annoying; this will tell SQLAlchemy not to print out every
#     # query it executes.

    connect_to_db(app)
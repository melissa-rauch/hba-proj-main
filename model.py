"""Objects Relational Mapper"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """A user."""

    __tablename__ = 'users'

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(20))
    address = db.Column(db.String)
    lat = db.Column(db.Integer)
    lng = db.Column(db.Integer)
    bio = db.Column(db.Text)
    img = db.Column(db.String)
    fav_id = db.Column(db.Integer, db.ForeignKey('favorites.fav_id'))

    def __repr__(self):

        return f'<User user_id={self.user_id} first_name={self.first_name} email={self.email} password={self.password}>'


class Midwife(db.Model):
    """A Midwife"""

    __tablename__ = 'midwives'
   
    mw_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(50))
    creds = db.Column(db.String)
    email = db.Column(db.String(100))
    password = db.Column(db.String(20))
    phone = db.Column(db.String)
    website = db.Column(db.String)
    address = db.Column(db.String())
    counties = db.Column(db.String)
    location = db.Column(db.String)
    services = db.Column(db.String)
    lat = db.Column(db.Integer)
    lng = db.Column(db.Integer)
    bio = db.Column(db.Text)
    img = db.Column(db.String)

    def __repr__(self):
        return f'<Midwife mw_id={self.mw_id} name={self.name} email={self.email}>'

class Favorite(db.Model):
    """A Favorite"""

    __tablename__ = 'favorites'

    fav_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    mw_id = db.Column(db.Integer, db.ForeignKey('midwives.mw_id'))


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
    connect_to_db(app)
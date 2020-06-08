"""CRUD Operations"""

from model import db, User, Midwife, connect_to_db



def create_user(email, password):
    """Create and return a new user"""

    user = User(email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user

def create_midwife(name, email, website, address, bio, counties, img):
    """Create and return a new midwife"""

    midwife = Midwife(name = name, 
                    email = email, 
                    website = website, 
                    address = address,
                    bio = bio,
                    counties = counties,
                    img = img)

    db.session.add(midwife)
    db.session.commit()

    return midwife

def get_user_by_email(email):
    """Return a user with given email, otherwise return None"""

    return User.query.filter(User.email == email).first()

def get_midwives():
    """Return all midwives in database"""

    return Midwife.query.all()


if __name__ == '__main__':
    from server import app
    connect_to_db(app)
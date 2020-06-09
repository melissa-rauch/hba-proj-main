"""CRUD Operations"""

from model import db, User, Midwife, connect_to_db



def create_user(name, email, password, address, bio, img, lat, lng):
    """Create and return a new user"""

    user = User(name=name,
                email=email, 
                password=password,
                address=address,
                bio=bio,
                img=img,
                lat=lat,
                lng=lng)

    db.session.add(user)
    db.session.commit()

    return user

def create_midwife(name, email, password, website, address, bio, counties, img, lat, lng):
    """Create and return a new midwife"""

    midwife = Midwife(name = name, 
                    email = email,
                    password = password, 
                    website = website, 
                    address = address,
                    bio = bio,
                    counties = counties,
                    img = img,
                    lat = lat,
                    lng = lng)

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
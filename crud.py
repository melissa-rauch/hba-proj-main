"""CRUD Operations"""

from model import db, User, Midwife, Favorite, connect_to_db

def create_user(first_name, last_name, email, password, address, bio, img, lat, lng):
    """Create and return a new user"""

    user = User(first_name=first_name,
                last_name=last_name,
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

def quick_create_user(email, password, first_name, last_name, address, bio, img):
    """Create and return a new user"""

    user = User(email=email, 
                password=password,
                first_name=first_name,
                last_name=last_name,
                address=address,
                bio=bio,
                img=img)

    db.session.add(user)
    db.session.commit()

    return user    

def get_user_by_email(email):
    """Return a user with given email, otherwise return None"""

    return User.query.filter(User.email == email).all()

def get_user_by_id(user_id):
    """Return a user with given email, otherwise return None"""

    return User.query.filter(User.user_id == user_id).first()    

def create_midwife(name, creds, email, password, phone, address, website, bio, counties, location, services, img):
    """Create and return a new midwife"""

    midwife = Midwife(name = name, 
                    creds = creds,
                    email = email,
                    password = password, 
                    phone = phone, 
                    address = address,
                    website = website,
                    bio = bio,
                    counties = counties,
                    location = location,
                    services = services,
                    img = img)

    db.session.add(midwife)
    db.session.commit()

    return midwife

def get_midwives():
    """Return all midwives in database"""

    return Midwife.query.all()

def get_midwife_by_email(email):
    """Return a Midwife by email"""
    
    return Midwife.query.filter(Midwife.email == email).first()

def get_midwife_by_id(mwId):
    """Return a midwife with a given id"""

    return Midwife.query.filter(Midwife.mw_id == mwId).first()

def create_fav(user_id, mw_id):
    """Create and return a new user"""

    favorite = Favorite(
                        user_id=user_id, 
                        mw_id=mw_id)

    db.session.add(favorite)
    db.session.commit()

    return favorite 

def get_fav_midwives(userId):
    """Return a user's favorite midwives"""
    list_midwives = []
    user_favs = Favorite.query.filter(Favorite.user_id == userId).all()
    
    for fav in user_favs:

        midwife = Midwife.query.filter(Midwife.mw_id == fav.mw_id).all()
        
        list_midwives.append(midwife)
    
    return list_midwives

if __name__ == '__main__':
    from server import app
    connect_to_db(app)
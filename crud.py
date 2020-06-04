"""CRUD Operations"""

from model import db, User, Midwife, connect_to_db


def create_midwife(name, email, website, address, bio, counties, img):
    """Create and return a new movie"""

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


if __name__ == '__main__':
    from server import app
    connect_to_db(app)
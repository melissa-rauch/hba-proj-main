from unittest import TestCase
from server import app
from model import connect_to_db, db, example_data
from flask import session

class FlaskTests(TestCase):
    
    def setUp(self):
        # Get the Flask test client
        self.client = app.test_client()
        # Show Flask errors that happen during tests
        app.config['TESTING'] = True

        #Connect to the test database
        connect_to_db(app, "postgresql:///testdb")
        db.create_all()
        example_data()
    
    def tearDown(self):
        """Done at end of every test"""

        db.session.remove()
        db.drop_all()
        db.engine.dispose()
        
    def test_login_user(self):
        """Test user Log-in"""

        result = self.client.post("/api/login",
                                    data = {"email":"janeaustin@test.com", "password": "Jane123"},
                                    follow_redirects=True)
        self.assertIn(b"You are a valued user", result.set_data)


#   def test_render_midwife_user_profile(self):
#       """Docstring here"""

#       result = self.client.get('/midwife-profile/<mwId>')
#       self.assertEqual(result.status_code, 200)
#       self.assertIn('<h1>Test</h1>', result.data)


class ServerTestCase(unittest.TestCase):
    def test_login_user(): 
        pass 
    
    def test_register_user():
        pass
    
    def show_fav_midwives():
        pass

    def show_directory():
        pass

    def render_app():
        pass

if __name__ == '__main__':
    unittest.main()


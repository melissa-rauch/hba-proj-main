from unittest import TestCase
from server import app

class FlaskTests(TestCase):

  def setUp(self):

      self.client = app.test_client()
      app.config['TESTING'] = True

  def test_render_midwife_user_profile(self):
      """Docstring here"""

      result = self.client.get('/midwife-profile/<mwId>')
      self.assertEqual(result.status_code, 200)
      self.assertIn('<h1>Test</h1>', result.data)





class ServerTestCase(unittest.TestCase):
    def test_login_user(): 
        assert 
    
    def test_register_user():
        assert
    
    def show_fav_midwives():
        assert

    def show_directory():
        assert

    def render_app():
        assert

if __name__ == '__main__':
    unittest.main()


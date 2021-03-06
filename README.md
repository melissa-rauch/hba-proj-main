# Babycatcher
Finding the right midwife can be a tricky process if you don't know where to look or who to ask for a referral.  Babycatcher is the first-ever app specifically designed to connect pregnant people with Midwives who provide home birth services in their county. 

Individuals can register, create a profile, and log in to their own profile page.  Logging in enables the user to view the directory, filter by county, view Midwife profiles and save Midwives to their collection of favorites.  Once a Midwife is saved in a User's collection, the user can send an SMS directly to the Midwife.  Midwives are also able to register, create a profile and log in to their own profile page, from there they can view their public profile as well as view or search the directory.

## Contents
- Tech Stack
- Features
- Installation
- About the Developer

## Tech Stack
**Frontend:** <br />
React, React Router, Javascript, HTML5, CSS, Bootstrap <br />
**Backend:** <br />
Python Flask, PostgreSQL, SQLAlchemy <br />
**API:** <br />
Twilio <br />

## Features
**Landing Page and Directory** <br />
Arrival at the landing page offers the individual to either view the Directory of Midwives, filter by county and view individual Midwife Profiles.  Login/Register allows the user to interact with the full functionality of the app.
<br  />
![Directory Demo](/static/gifs/Directory.gif)
<br  />

**User Features** <br />
With Login/Register, the user is also able to select a midwife, save her to their collection of favorites and send an SMS to Midwife. <br />
<br  />
![User Login Demo](/static/gifs/UserLogin.gif)
<br  />

**Midwife Login** <br />
Midwives are also able to Login/Register to create a profile on the app.  The directory updates with the new midwife profile as soon as it is created and that midwife will be part of a user's search.  To protect midwive's personal contact information, it hidden from the users and only visible to the logged in midwife.  <br />
<br  />
![Midwife Login Demo](/static/gifs/MidwifeLogin.gif)

## Installation
To run Babycatcher on your local machine, you can follow the easy steps below:<br  />
1. Install PostgreSQL (MacOSX)
2. Clone or fork this repo: <br  />
`https://github.com/melissa-rauch/hba-proj-main.git`
3. Create and activate a virtual environment hba-proj-main directory: <br  />
`virtualenv env`
`source env/bin/activate`
4. Install the dependencies:<br  />
`pip3 install -r requirements.txt`
5. Set up the database:<br  />
`createdb babycatcher`
`python3 seed-database.py`
6. Run the app!<br  />
`python3 server.py`
7. Navigate to 'localhost:5000' in your browser to access Babycatcher!<br  />


## About the Developer
Former midwife, Melissa is a graduating software engineering fellow at HackBright Academy. Despite truly enjoying her work as a midwife, she made a bold decision in pursuit of an equally challenging career with a better work-life balance. After hanging up her stethoscope, she caught a glimpse of the world of software engineering during her time working at a tech start-up in the Bay Area.  She may be one of the only midwife-turned-developers you’ll ever meet, but her experience as a midwife has taught her skills that are key to being an engineer. Her ability to handle high-stress situations with grace and her comfortability in navigating uncertain, at times ambiguous environments and situations transfer as an asset to any engineering team.

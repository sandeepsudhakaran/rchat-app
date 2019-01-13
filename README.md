# Flask-Socketio Chat App Deployed in Heroku

## Introduction
This is a chat application, implemented using Flask-SocketIO with both the database (PostgreSQL) and the app deployed in Heroku. It also has user registration and authentication functionalities.

## Demo
(https://github.com/sandeepsudhakaran/templates/images/demo.gif "RChat - Chat rooms are back in style!")

## Files in the program
- **application.py**: This is the main app file and contains both the registration/login page logic and the Flask-SocketIO backend for the app.
- **login_required.py**: Contains the code for @login-required decorator used in application.py
- **models.py**: Contains Flask-SQLAlchemy models used for user registration and login in application.py
- **wtform_fields.py**: Contains the classes for WTForms/Flask-WTF and the custom validators for the fields
- **create.py**: optional file only required if repo is to be cloned. *See 'Usage' section below.*
- **Procfile**: file required for Heroku
- **requirements.txt**: list of Python packages installed (also required for Heroku)
- **templates/**: folder with all HTML files
- **static/**: for with all JS scripts and CSS files


## Usage
1. To run the app, use [the link to the production server](https://rchat-app.herokuapp.com) directly.

2. To clone and edit, first modify application.py to replace the secret key *(i.e. os.environ.get('SECRET'))* with a secret key of your choice and the database link *(i.e. os.environ.get('DATABASE_URL'))* with the link to your own database.

    The two lines to be edited in application.py are shown below:
```python
app.secret_key=os.environ.get('SECRET')
app.config['SQLALCHEMY_DATABASE_URI']=os.environ.get('DATABASE_URL')
```
Next, edit *create.py* and once again replace *os.environ.get('DATABASE_URL')* with the link to your database.

    And finally, run *create.py* from the terminal to create the tables
```bash
python create.py
```

## Roadmap
Add security features relating to Input Validation, Cross Domain, Secure Transmission and Logging.

*See [OWASP Cheat Sheet Series](https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series#tab=Main)*.

## License
(https://badges.mit-license.org/)

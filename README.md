# Flask-Socketio Chat App Deployed in Heroku

## Introduction
This is a chat app that uses flask-socketio with both the database and the app deployed in Heroku. It also has a user registration and authentication functionalities. Database used in PostgreSQL.

## Demo
(https://github.com/sandeepsudhakaran/templates/images/demo.gif "RChat - Chat rooms are back in style!")

## Files in the program
- **application.py**: This is the registration/login page logic and Flask-SocketIO backend for the app.
- **login_required.py**: Contains the code for @login-required decorator
- **models.py**: Contains Flask-SQLAlchemy models used for user registration and authentication
- **wtform_fields.py**: Contains the classes for WTForms and the custom validators for the fields
- **templates/**: HTML files
- **static/**: JS scripts and CSS files
- **Procfile**: Heroku file

## Usage
1. To run the app use [the link to the production server](https://rchat-app.herokuapp.com) directly.

2. To clone and edit, first modify application.py to replace the secret key *(i.e. os.environ.get('SECRET'))* with a secret key of your choice and the database link *(i.e. os.environ.get('DATABASE_URL'))* with the link to your own database. The two lines to be edited are shown below:
```python
app.secret_key=os.environ.get('SECRET')
app.config['SQLALCHEMY_DATABASE_URI']=os.environ.get('DATABASE_URL')
```
Next, edit *create.py* and once again replace **os.environ.get('DATABASE_URL')** with the link to your database.

    And finally, run *create.py* from the terminal
```terminal
python create.py
```

## Roadmap
Add security features relating to Input Validation, Cross Domain, Secure Transmission and Logging.

*See [OWASP Cheat Sheet Series](https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series#tab=Main)*.

## License
(https://badges.mit-license.org/)

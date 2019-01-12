from functools import wraps
from flask import session, redirect, url_for, flash


def login_required(func):
    """ Login required decorator """

    @wraps(func)
    def decorator_function(*args, **kwargs):
        # User not logged in
        if session.get("user_id") is None:
            flash('Please login', 'danger')
            return redirect(url_for('login'))
        # User logged in
        return func(*args, **kwargs)
    return decorator_function

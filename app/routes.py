from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import LoginForm

@app.route('/')
def home():
    return render_template("home.html", title="Parent Buddy")

@app.route('/index')
def index():
    return render_template("index.html", title="Parent Buddy")

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.username.data != 'kelly' or form.password.data != 'abc123':
            # print(f'Invalid username or password: {form.username.data} - {form.username.data}')
            flash('Invalid username or password')
            return redirect(url_for('login'))
        return redirect(url_for('index'))
    return render_template('login.html', title='Sign In', form=form)
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Print the DATABASE_URL to ensure it's being loaded correctly
print("DATABASE_URL:", os.getenv('DATABASE_URL'))

# Create an instance of the Flask class
app = Flask(__name__)

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db = SQLAlchemy(app)

# Define the FavQuotes model
class FavQuotes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(100), nullable=False)
    quote = db.Column(db.String(500), nullable=False)

# Use a root decorator to create a root for the application
@app.route('/')
def index():
    listColors = ['magenta', 'babyblue', 'olive']
    quotes = FavQuotes.query.all()  
    return render_template('index.html', quote1="I cannot teach anybody anything, I can only make them think. - Socrates", colors=listColors, result=quotes)

@app.route('/quotes')
def quotes():
    return render_template('quotes.html')

@app.route('/process', methods=['POST'])
def process():
    author = request.form['author']
    quote = request.form['quote']
    quotedata = FavQuotes(author=author, quote=quote)
    db.session.add(quotedata)
    db.session.commit()
    return redirect(url_for('index'))

if __name__ == '__main__':
    print("Creating tables...")
    with app.app_context():
        try:
            db.create_all()
            print("Tables created.")
        except Exception as e:
            print(f"Error creating tables: {e}")
    app.run(debug=True)

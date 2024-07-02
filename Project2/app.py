from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from datetime import datetime  

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

############ MODELS ############

# Products
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    brand = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    main_image = db.Column(db.String(200), nullable=False)
    images = db.relationship('Image', backref='product', lazy=True)

    def __repr__(self):
        return f'<Product {self.title}>'

# Images
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    image_url = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f'<Image {self.image_url}>'

# Orders
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    buyer_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    total_price = db.Column(db.Float, nullable=False)
    items = db.Column(db.JSON, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)  # Use datetime.utcnow correctly

    def __repr__(self):
        return f'<Order {self.id}>'

############ ROUTES ############
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/shop')
def shop():
    products = Product.query.all()
    return render_template('shop.html', products=products)

@app.route('/brand/<brand_name>')
def brand(brand_name):
    products = Product.query.filter_by(brand=brand_name).all()
    return render_template('brand.html', products=products, brand=brand_name)

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = Product.query.get_or_404(product_id)
    images = Image.query.filter_by(product_id=product_id).all()
    return render_template('product_detail.html', product=product, images=images)

@app.route('/favorites')
def favorites():
    return render_template('favorites.html')

@app.route('/past_orders')
def past_orders():
    return render_template('past_orders.html')

if __name__ == '__main__':
    print("Creating tables...")
    with app.app_context():
        try:
            db.create_all()
            print("Tables created.")
        except Exception as e:
            print(f"Error creating tables: {e}")
    app.run(debug=True)

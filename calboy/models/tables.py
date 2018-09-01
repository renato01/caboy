from app import db

class User(db.Model):
	__tablename__ = "users"

	id = db.Column(db.Interger, primary_key=True)
	username = db.Column(db.String, unique=True)
	password = db.Column(db.String)
	name = db.Column(db.String)
	email = db.Column(db.String, unique=True)

	def __init__(self, username, password, name, email):
		self.username = username
		self.password = password
		self.name = name
		self.email = email

	def __repr__(self):
		return "<User %r>" % self.username

class Food(db.Model):
	__tablename__ = "foods"

	id = db.Column(db.Interger, primary_key=True)
	name = db.Column(db.String, unique=True)
	price = db.Column(db.Float)

	def __init__(self, name, price):
		self.name = name
		self.price = price

	def __repr__(self):
		return "<Food %r>" % self.name

class Request(db.Model):
	id = db.Column(db.Interger, primary_key=True)
	user_id = db.Column(db.Interger, db.ForeingKey(users.id))
	user = db.Relationship('User', foreing_keys='user_id')
	food_id = db.Column(db.Interger, db.ForeingKey(foods.id))
	food = db.Relationship('Food', foreing_keys='food_id')

	def __int__(self, user_id, food_id):
		self.user_id = user_id
		self.food_id = food_id

	def __repr__(self):
		return "<Request %r>" % self.id


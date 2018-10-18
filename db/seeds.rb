# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'james@james.com', first_name: 'james', last_name: 'james', password: '123456')
user2 = User.create(email: 'tim@tim.com', first_name: 'Tim', last_name: 'Stapes', password: '123456')
user3 = User.create(email: 'nick@nick.com', first_name: 'Nick', last_name: 'Cas', password: '123456')
user4 = User.create(email: 'oli@oli.com', first_name: 'Oli', last_name: 'Pierce', password: '123456')
user5 = User.create(email: 'tony@tony.com', first_name: 'Tony', last_name: 'Spamony', password: '123456')
user6 = User.create(email: 'allan@allan.com', first_name: 'Allan', last_name: 'Verk', password: '123456')

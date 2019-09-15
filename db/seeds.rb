# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!({'name':'Michael Thomas', 'email':'Mt@saints.com', 'password':'saints1'})
User.create!({'name':'Drew Brees', 'email':'Db@saints.com', 'password':'saints1'})
User.create!({'name':'Alvin Kamara', 'email':'Ak@saints.com', 'password':'saints1'})
User.create!({'name':'Ten Ginn', 'email':'Tg@saints.com', 'password':'saints1'})
User.create!({'name':'Latavius Murray', 'email':'Lt@saints.com', 'password':'saints1'})
User.create!({'name':'Jared Cook', 'email':'Jc@saints.com', 'password':'saints1'})
User.create!({'name':'Cameron Jordan', 'email':'Cj@saints.com', 'password':'saints1'})
User.create!({'name':'Marshon Latimore', 'email':'Ml@saints.com', 'password':'saints1'})
User.create!({'name':'AJ Klein', 'email':'AJK@saints.com', 'password':'saints1'})
User.create!({'name':'Sheldon Rankins', 'email':'Sr@saints.com', 'password':'saints1'})
User.create!({'name':'Sean Payton', 'email':'sp@saints.com', 'password':'saints1'})
Post.create!({'content':'Who Dat', 'user_id':'1'})
Post.create!({'content':'We Dat', 'user_id':'2'})
Post.create!({'content':'Saints to the superbowl!', 'user_id':'3'})
Post.create!({'content':'Dome Patrol', 'user_id':'4'})
Post.create!({'content':'This is our year', 'user_id':'5'})
Post.create!({'content':'Drew Brees for Pesident', 'user_id':'6'})
Post.create!({'content':'Cant guard mike is the best', 'user_id':'7'})
Post.create!({'content':'Best in the league', 'user_id':'8'})
Post.create!({'content':'Sains are going to win it all', 'user_id':'9'})
Post.create!({'content':'Who Dat baby!!!!', 'user_id':'10'})
Comment.create!({'content':'Yea','user_id':'10', 'post_id':'1'})
Comment.create!({'content':'Yea','user_id':'9', 'post_id':'2'})
Comment.create!({'content':'Yea','user_id':'8', 'post_id':'3'})
Comment.create!({'content':'Yea','user_id':'7', 'post_id':'4'})
Comment.create!({'content':'Yea','user_id':'6', 'post_id':'5'})
Comment.create!({'content':'Yea','user_id':'5', 'post_id':'6'})
Comment.create!({'content':'Yea','user_id':'4', 'post_id':'7'})
Comment.create!({'content':'Yea','user_id':'3', 'post_id':'8'})
Comment.create!({'content':'Yea','user_id':'2', 'post_id':'9'})
Comment.create!({'content':'Yea','user_id':'1', 'post_id':'10'})
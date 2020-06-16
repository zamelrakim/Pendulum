# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Zamel', email: 'zh@email.com', password: 'zamelhill')
furret = User.create(username: 'furret', email:'stan@furret.com', password: 'stanfurret')
steve = User.create(username: 'Steve', email: 'steve@ga.com', password: 'jokes')
ali = User.create(username: 'Ali', email: 'ali@ga.com', password: 'ali')
bruno = User.create(username: 'Bruno', email: 'bruno@ga.com', password: 'mustache')
david = User.create(username: 'David', email: 'david@ga.com', password: 'beard')

tara = User.create(username: 'Tara', email: 'tara@ga.com', password: 'tara')
corey = User.create(username: 'Corey', email: 'corey@ga.com', password: 'corey')
jordan = User.create(username: 'Jordan', email: 'jordan@ga.com', password: 'jordan')
soleil = User.create(username: 'Soleil', email: 'soleil@ga.com', password: 'soleil')

Tool.create(name: 'HTML', description: 'DOM', creator: steve)
Tool.create(name: 'CSS', description: 'Styling' creator: steve)
Tool.create(name: 'JavaScript', description: 'NOT JAVA!', creator: steve)
Tool.create(name: 'React', description: 'Hooks', creator: ali)
Tool.create(name: 'Axios', description: 'External APIs', creator: bruno)
Tool.create(name: 'Furret', description: 'STAN FURRET!!!', creator: furret)
Tool.create(name: 'bcrypt' description: 'Hash Passwords', creator: bruno)
Tool.create(name: 'JWT', description: 'User Auth' creator: bruno)
Tool.create(name: 'Rails', description: 'Ruby On Rails', creator: david)

Job.create(company: 'Project 1', engineers: [steve, corey, tara, jordan, soleil])
Job.create(company: 'Project 2', engineers: [ali, corey, tara, jordan, soleil])
Job.create(company: 'Project 3', engineers: [bruno, corey, tara, jordan, soleil])
Job.create(company: 'Project 4', engineers: [david, corey, tara, jordan, soleil])
# Task Manager Application
Built on PostgreSQL, Ruby on Rails & React

## Setup & Versioning

#### Before Starting: 
Be sure to start the the database, then the server, and then the frontend in that order to ensure data is displayed and loaded properly.

Make sure the correct versions are available before trying to run the backend.

### Backend Database
The database is built on PostgreSQL version 14.15.
#### Setup
1. Replace if necessary the user and password `development` in `config/database.yml` to an existing user in your own Postgres installation

### Backend API
The backend is built on Ruby 3.4.0 and Rails 8.0.1. 
#### Setup
1. Run `bundle install` to install dependencies
2. Run `bin/rails db:reset` to create, load and seed db
3. Run `bin/rails s -p 3000` to start the server on localhost port 3000

### Frontend
The frontend is built on React 19.0.0 with Vite 6.1.0
#### Setup
1. Run `npm install` to install all project dependencies
2. Run `npm run dev` to start the site on localhost port 5173 (default) 
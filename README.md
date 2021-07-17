# Cardshop Storefront Backend Project

## How To Use:
This API uses a PostgreSQL database, here are the instructions on how to initialize the project once PostgreSQL is installed locally.

### Creating a Database
- Please start up psql and create a user:

CREATE ROLE udacity PASSWORD 'udacity' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;

- Using the SUPERUSER we created, please sign in as udacity
- Please create a PostgreSQL database locally called 'card_shop_db'

CREATE DATABASE card_shop_db

- when starting up the database, sign in as udacity

### Starting up the API
- Open up a terminal and run 'npm install' to get all the mode_modules we are using in the API

npm install

- Run the app using [INSERT RUN COMMAND], the port is 8000



- Run 'db-migrate up' in the terminal to generate all the required tables, and product datapoints.

db-migrate up

### Testing endpoints
- routes for CRUD

## Database Schema


## .env
The variables used for the dotenv file are the following:

POSTGRES_HOST=127.0.0.1
POSTGRES_DB=card_shop_db
POSTGRES_USER=udacity
POSTGRES_PASSWORD=udacity
BCRYPT_PASSWORD=PepperedPassword
SALT_ROUNDS=10
TOKEN_SECRET=udacitysecret

Please copy and paste in a local .env file in the root folder.

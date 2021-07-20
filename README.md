# Cardshop Storefront Backend Project

## How To Initialize:
This API uses a PostgreSQL database, here are the instructions on how to initialize the project once PostgreSQL is installed locally.

### Creating a Database
- Please start up psql and create a user:

CREATE ROLE udacity PASSWORD 'udacity' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;

- Using the SUPERUSER we created, please sign in as udacity
- Please create a PostgreSQL database locally called 'card_shop_db'

CREATE DATABASE card_shop_db;

- when starting up the database, sign in as udacity

### Starting up the API
- Open up a terminal and run 'npm install' to get all the node_modules we are using in the API.

npm install

- Run the app using [npm run dev], the port is 8000
This build uses nodemon to run the TypeScript Server file.


- Run 'db-migrate up' in the terminal to generate all the required tables, and product datapoints.

db-migrate up


### .env
The variables used for the dotenv file are the following:

POSTGRES_HOST=
POSTGRES_DB=
POSTGRES_TEST_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
BCRYPT_PASSWORD=PepperedPassword
SALT_ROUNDS=10
TOKEN_SECRET=udacitysecret
ENV=dev

* for the sake of ensuring tests can run, the bcrypt password I use is 'PepperedPassword', with the salt rounds being 10, and token secret being 'udacitysecret'


Please create a local .env file in the root folder, with the mentioned information.

## TESTING SUITE
to test the endpoints 
first create a new test db:

CREATE DATABASE card_shop_test_db;

next, run:
npm run test

### Testing endpoints
Once DB Migrate is up, 3 tables, 2 users, 20 products  and 5 orders will be created.

#### Endpoints that do not require a token:
- '/' the root endpoint simply takes you too the title, and helps users know the app is running

- '/products/all' endpoint allows anyone to get an array of all products in the database
- 'products/:id' where id is the specific value from the products table will return the 1 specified product
- 'users/login' this endpoint will return a token if the body contains existing user information
The body for this post request should look like this:
{
    "firstName": "Udacity",
    "lastName": "User",
    "password": "password"
}


#### Endpoints that require a token:
- 'users/all' returns all users and information
- 'users/:id' returns information for a specified user
- 'users/create' creates a new user where the body of the post request looks like this:
{
    "first": "Udacity",
    "last": "Four",
    "password": "password"
}
- 'users/orders/:id/:status' where id is the user id, and status is 'completed' or active, returns an array containing all orders belonging to the requested status of the requested user.

- 'products/add' Post requst to create a new product, body of request looks like this:
{
    "name": "Exodia the Forbidden One",
    "price": "500",
    "rarity": "ultra",
    "cardType": "monster"
}

- 'users/orders/:id/add' Creates new order for specified user by ID. Body of request looks like this:
{
    "productId": 7,
    "qty": 3
}

## Database Schema
Information for the database can be found in the Requirements document.
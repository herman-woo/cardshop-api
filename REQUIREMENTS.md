# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index: /products/all
- Show: /products/:id
- Create [token required]: /products/add
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id (SERIAL PRIMARY KEY)
- name: product_name VARCHAR(100)
- price: product_price (integer)
- rarity: card_rarity VARCHAR(100)
- type: card_type VARCHAR(10)

#### User
- id (SERIAL PRIMARY KEY)
- firstName: first VARCHAR(20)
- lastName: last VARCHAR(20)
- password: password VARCHAR

#### Orders
- id (SERIAL PRIMARY KEY)
- id of each product in the order: product_id bigint REFERENCES products(id)
- quantity of each product in the order: order_quantity integer
- user_id: user_id bigint REFERENCES users(id)
- status of order (active or complete): order_status VARCHAR(10))


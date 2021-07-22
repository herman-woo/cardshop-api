# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints

### Users
- create = POST [generates token]: /users/create
- POST [generates token]: /users/login
- index = GET [token required] : /users/all
- show = GET [token required] : /users/:id

### Products
- index = GET : /products/all
- show = GET : /products/:id
- create = POST [token required]: /products/add

### Orders
- create = POST [token required]: /users/:id/orders/create
- show = GET  [token required]: /users/:id/orders/
 - update = POST [token required]: /users/:id/orders/update

### Orders-Products
- create = POST [token required]: /users/:id/orders/cart/add 
- show = POST  [token required]: /users/:id/orders/cart
- remove = DELETE [token required]: /users/:id/orders/cart/remove


## Data Shapes
### User
- id (SERIAL PRIMARY KEY)
- firstName: first VARCHAR(20)
- lastName: last VARCHAR(20)
- password: password VARCHAR

### Product
- id (SERIAL PRIMARY KEY)
- name: product_name VARCHAR(100)
- price: product_price (integer)
- rarity: card_rarity VARCHAR(100)
- type: card_type VARCHAR(10)

#### Orders
- id (SERIAL PRIMARY KEY)
- user_id: user_id bigint REFERENCES users(id)
- status of order (active or complete): order_status VARCHAR(10))

#### Orders-Products
- id (SERIAL PRIMARY KEY)
- order id: order_id bigint REFERENCES orders(id)
- product id : product_id bigint REFERENCES products(id)
- quantity of each product in the order: order_quantity integer



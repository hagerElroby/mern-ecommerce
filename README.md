# E-commerce Project

This is a full-stack e-commerce web application built with React, Redux Toolkit, Axios, Node.js, Styled Components, Material-UI Icons, React Router DOM, SweetAlert2, and Redux Persist.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)

## Features

- User authentication (register/login)
- logout and delete account
- Product listing
- Product details
- Add to cart
- View cart
- Update cart items
- Remove cart items
- Checkout process
- Persistent cart state
- Profile page
- Filter products

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hagerElroby/mern-ecommerce.git
    cd ecommerce-project
    ```

2. Install dependencies for client:

    ```bash
    npm install
    ```

## Usage

### Running the Application

- Ensure that the client is running.
- Open your browser and navigate to `http://localhost:3000`.

### Adding Products to the Cart

1. Browse products on the home page.
2. Click on a product to view details.
3. Select color and size.
4. Adjust the quantity.
5. Click the "Add to Cart" button.

### Viewing and Managing the Cart

- Click on the cart icon in the navigation bar to view the items in your cart.
- Adjust quantities or remove items as needed.

##Technologies Used
- Frontend: React, Redux Toolkit, Axios, Styled Components, Material-UI Icons, React Router DOM, SweetAlert2, Redux Persist
- Backend: Node.js, Express.js, Mongoose, MongoDB
- Authentication: JWT (JSON Web Tokens)

## Folder Structure

### Client

```plaintext
├── public/
├── src/
│   ├── components/
│   │   ├── Announcement.jsx
│   │   ├── Categories.jsx
│   │   ├── CategoryItem.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Product.jsx
│   │   ├── Products.jsx
│   │   └── Slider
│   ├── images/
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Product.jsx
│   │   ├── ProductList.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│   │   └── Success.jsx
│   ├── redux/
│   │   ├── apiCalls.js
│   │   ├── cartRedux.js
│   │   ├── store.js
│   │   └── userRedux.js
│   ├── requestMethods.js
│   ├── App.js
│   ├── data.js
│   ├── index.js
│   └── responsive.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json


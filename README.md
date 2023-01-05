# 13-E-Commerce-Site

# Table of Contents
- [Description](#description)
- [User-Story](#user-story)
- [Usage](#usage)
- [Installation](#installation)
- [Testing](#testing)
- [Mock-Up](#mock-up)

# Description
E Commerce Site is an application that uses Node.js, Express and MySQL to host backend data using the CRUD functionalities. There is no front end that was written for this front end so an additional resource is needed to test and view API requests.

# User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

# Usage
This application was created to help online shopping platforms manage and track their inventory by creating an application that uses a backend database to store all their invetory and product information.

# Installation
* To run this application follow these steps:
    ```
    1. clone the repository using https or SSH
    2. npm init --y
    * Install the following dependencies:
    3. npm install sequelize
    4. npm install mysql2
    5. npm install express
    6. run npm i
    ```
* open mysql2 by using: mysql -u root -p

    ```
    1. enter your SQL password
    2. input source db/schema.sql
    3. use ecommerce_db
    ```

* Exit mysql by running "quit", then enter:

    ```
    1. npm run seed
    2. make sure you have a .env file with the structure:
    `- DB_name='ecommerce_db'
     - DB_USER='root'
     - DB_PASSWORD='*this should be your personal sql password*'
    3. npm start or node server.js
    ```


# Testing
To test that these routes are working you must also have access to the app Insomnia or an equivalent that allows you to run Get, Put, Post and Delete requests. From here the application will be running on localhost:3001 where you'll add your route to run your requests.

# Mock-Up
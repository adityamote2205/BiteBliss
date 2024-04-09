# BiteBliss

BiteBliss is a full-stack restaurant recommendation app built using the PERN stack (PostgreSQL, Express, React, Node.js). It allows users to discover, review, and recommend restaurants based on their experience.

## Features

- View a list of restaurants
- See detailed information about each restaurant, including reviews, location, and price range
- Add new restaurants to the database
- Update restaurant information
- Leave reviews and ratings for restaurants

## Technologies Used

- PostgreSQL: Database management system for storing restaurant and review data
- Express.js: Backend framework for building the RESTful API
- React.js: Frontend library for building the user interface
- Node.js: JavaScript runtime environment for running the server-side code
- Axios: Promise-based HTTP client for making API requests
- React Router: Routing library for handling navigation within the React app
- Bootstrap: Frontend framework for styling and layout
- HTML/CSS: Markup and styling languages for building the UI

## Setup Instructions

1. Clone the repository: https://github.com/adityamote2205/BiteBliss.git
   
2. Install dependencies for the backend and frontend:
   - cd BiteBliss
   - cd client && npm install
   - cd ../server && npm install

3. Set up the PostgreSQL database:
   - Create a new database named `bitebliss`
   - Import the database schema from `server/database.sql`
   - Set up your environment variables in `server/.env`

4. Start the backend server:
   - cd server && npm start

5. Start the frontend development server:
   - cd client && npm start

6. Access the app in your browser at `http://localhost:3000`

## API Endpoints

- GET `/api/v1/restaurants`: Get a list of all restaurants
- GET `/api/v1/restaurants/:id`: Get a single restaurant by ID
- POST `/api/v1/restaurants`: Add a new restaurant
- PUT `/api/v1/restaurants/:id`: Update an existing restaurant
- DELETE `/api/v1/restaurants/:id`: Delete a restaurant by ID
- POST `/api/v1/restaurants/:id/addReview`: Add a review to a restaurant

## Authors

- [Aditya Mote](https://github.com/adityamote2205)

## Acknowledgements

- This project was inspired by YELP.







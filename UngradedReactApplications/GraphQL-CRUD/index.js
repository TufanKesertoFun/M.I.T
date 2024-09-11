const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const express = require("express");

// Sample data for restaurants
const restaurants = [
  {
    id: 1,
    name: "WoodsHill",
    description: "American cuisine, farm to table, with fresh produce every day",
    dishes: [
      { name: "Swordfish grill", price: 27 },
      { name: "Roasted Broccoli", price: 11 },
    ],
  },
  {
    id: 2,
    name: "Fiorellas",
    description: "Italian-American home cooked food with fresh pasta and sauces",
    dishes: [
      { name: "Flatbread", price: 14 },
      { name: "Carbonara", price: 18 },
      { name: "Spaghetti", price: 19 },
    ],
  },
  {
    id: 3,
    name: "Karma",
    description: "Malaysian-Chinese-Japanese fusion, with great bar and bartenders",
    dishes: [
      { name: "Dragon Roll", price: 12 },
      { name: "Pancake roll", price: 11 },
      { name: "Cod cakes", price: 13 },
    ],
  },
];

// GraphQL schema definition
const schema = buildSchema(`
  type Query {
    restaurant(id: Int!): restaurant
    restaurants: [restaurant]
  }

  type restaurant {
    id: Int
    name: String
    description: String
    dishes: [Dish]
  }

  type Dish {
    name: String
    price: Int
  }

  input restaurantInput {
    name: String
    description: String
  }

  type DeleteResponse {
    ok: Boolean!
  }

  type Mutation {
    setrestaurant(input: restaurantInput): restaurant
    deleterestaurant(id: Int!): DeleteResponse
    editrestaurant(id: Int!, name: String!): restaurant
  }
`);

// Resolver functions for the schema fields
const root = {
  // Query to get a specific restaurant by id
  restaurant: ({ id }) => {
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    console.log('restaurant:', restaurant); // Debugging line
    return restaurant;
  },

  // Query to get the list of all restaurants
  restaurants: () => {
    console.log('restaurants:', restaurants); // Debugging line
    return restaurants;
  },

  // Mutation to add a new restaurant
  setrestaurant: ({ input }) => {
    const newId = restaurants.reduce((maxId, restaurant) => Math.max(maxId, restaurant.id), 0) + 1;
    const newRestaurant = {
      id: newId,
      name: input.name,
      description: input.description,
      dishes: [],
    };
    restaurants.push(newRestaurant);
    return newRestaurant;
  },

  // Mutation to delete a restaurant by id
  deleterestaurant: ({ id }) => {
    const index = restaurants.findIndex((restaurant) => restaurant.id === id);
    if (index !== -1) {
      restaurants.splice(index, 1);
      return { ok: true };
    } else {
      return { ok: false };
    }
  },

  // Mutation to edit the name of a restaurant by id
  editrestaurant: ({ id, name }) => {
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    if (restaurant) {
      restaurant.name = name;
      return restaurant;
    } else {
      return null;
    }
  },
};

// Setting up the Express server with GraphQL
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // GraphiQL interface available at /graphql
  })
);

// Start the server
const port = 4000;
app.listen(port, () => console.log(`Running GraphQL on port: ${port}`));

module.exports = root;

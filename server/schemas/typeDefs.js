const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]
  }

  type Bouquet {
    _id: ID
    name: String
    description: String
    image: String
    occasion: [Occasion]
    price: Float
    featured: Boolean 
  }

  type Occasion {
    _id: ID
    name: String
    image: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    totalCost: Float
    products: [Bouquet]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
    occasions: [Occasion]
    allBouquets(occasionId: ID!): [Bouquet]
    bouquet(bouquetId: ID!): Bouquet
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;

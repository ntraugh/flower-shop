const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Bouquet {
    _id: ID
    description: String
    price: Float
    occasion: String
    featured: Boolean 
  }

  type Occasion {
    name: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    totalCost: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    bouquets: [Bouquet]!
    bouquet(bouquetId: ID!): Bouquet
    occasions: [Occasion]!
    occasion(occasionId: ID!): Occasion 
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;

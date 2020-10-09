const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  type Query {
    pets(type: String!): [Pet]!
  }
`;

/*
  pets query...
    - query HAS to have a 'type' parameter
    - HAS to have the type param as a string
    - coordinates with the resolvers file

*/ 
module.exports = typeDefs

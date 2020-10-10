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
    hair: String!
    color: String!
  }

  
  input PetInput{
    name: String
    type: String
    hair: String
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
  }
`;

/*
  pets query HAS to have a 'type' parameter...
    - HAS to have the type param as a string
    - coordinates with the resolvers file

  input PetInput
    - different than a type
    - STILL a 'type' definition
    - ONLY used for reference in 




*/ 
module.exports = typeDefs

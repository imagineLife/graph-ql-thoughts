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

  input PetByTypeInput{
    petType: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
    petsByType(input: PetByTypeInput): [Pet]
  }

  input NewPetType{
    name: String!
    type: String!
  }

  type Mutation {
    newPet(input: NewPetType): Pet
  }
`;

/*
  pets query HAS to have a 'type' parameter...
    - HAS to have the type param as a string
    - coordinates with the resolvers file

  input PetInput
    - different than a type, key-word `input` declares an INPUT type
    - STILL a 'type' definition
*/ 
module.exports = typeDefs

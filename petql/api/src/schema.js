const { gql } = require('apollo-server')
/**
 * Type Definitions for our Schema using the SDL.

 User -> pets && Pet -> User are expressions of "relationships", abstract types
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    hair: String
    color: String
    owner: User!
  }

  input PetInput{
    name: String
    type: String
    hair: String
  }

  input UserInput{
    username: String
  }

  input PetByTypeInput{
    petType: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
    petsByType(input: PetByTypeInput): [Pet]
    user(input: UserInput): User!
  }

  input NewPetType{
    name: String!
    type: String!
  }

  type Mutation {
    newPet(input: NewPetType!): Pet!
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

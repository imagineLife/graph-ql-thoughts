## Thanks To F.E.M && Scott Moss

https://github.com/FrontendMasters/fullstack-graphql

# What is GraphQL

(_Interpreted from scott moss_)

- a spec
  - http://spec.graphql.org
- describing a declarative query language
- clients can consume to as an API for the exact data they want
- embraces 'strong types', a type-system 'in front of' an API

## Server vs Client Effort

### Server (_for the client_)

- Create a 'graph' based on 'shapes' of data
- allow client to select the 'graphed' data in 'any way possible'
- **will be working with apollo here**
  - https://www.apollographql.com/docs/apollo-server/

#### Server-Side GraphQL Elements

- Type Definitions
  - strongly-typed data representations, 'shapes' of data
- Resolvers
  - similar to a 'controller' in a rest api
  - **job is to fetch the data**
- Query Defs
  - define a 'query'
- Mutation Defs
  - ask api for data or modify data
- composition
  - compose many apis together
- ...all comes together as a **schema**

#### Client-Side GraphQL Elements

- Queries
- Mutations
- Fragments
  - shared queries + mutations

### How could this fit in with a current architecture?

- setup a graphQL server
  - connect it to 1 db
- A GraphQL **Server as a layer** in front of many 3rd party services
  - connects them all together with one GraphQL API

### Only 1 endpoint

- usually `POST`
- doesn't respect http
- always a 200
- everything is based off the response

### Creating Notes

- GraphQL Server Creates Nodes
- Client request matches queryAPI resolver assumptions

## Trivial Overview

### Setting up an apollo server

(_Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source._ [Docs](https://www.apollographql.com/docs/apollo-server/))

```js
// server.js
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { models, db } = require("./db");
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

### Including some type definitions

```js
// ./schema.js
const { gql } = require("apollo-server");
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
`;
module.exports = typeDefs;
```

### Inlcuding some Resolvers

```js
// ./resolvers.js

// data source
const myPets = [
  { type: "dog", name: "ralph", hair: "short", color: "blue" },
  { type: "cat", name: "sally", hair: "long", color: "orange" },
  { type: "dog", name: "donnie", hair: "long", color: "green" },
  { type: "giraffe", name: "shorty", hair: "short", color: "pink" },
  { type: "monkey", name: "boy", hair: "long", color: "white" },
];

module.exports = {
  Query: {
    pet(_, { input }, ctx) {
      return myPets.filter((p) => p.name === input.name)[0];
      // return ctx.models.Pet.findOne(input)
    },
  },
};
```

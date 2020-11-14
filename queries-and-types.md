## Queries, Types

- the only thing required in a schema is a query
- Expected to be present by GraphQL
- outlies the shape to the resulting data for the GraphQL-consuming-client
- the `!` means `not null`

## Resolvers

- a fn
- returs values for fields that exist on Types in a SChema
- dependant on an incoming query for execution
- `resolver names must match exact field-names on the schema types`
- ex...

```
  resolvers = {
    Query: {
      person(): {
        return {
          email: 'string',
          firstName: 'string',
          lastName: 'string'
        }
      }
    }
  }
```

this must match the `Query` type in the GraphQL typeDef...

```
const typeDefs = gql`
  type User {
    email: String
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`
```

- can be async... HMMM!
- can retrieve data from any source

## Input Types

- input types are strongly-casted types that are _Specific to client-request-argument objects_
- ...must resolve to...
  - other inputTypes
  - scalar vals
- Goals with input types
  - create strong type definitions for client-side query arguments
  - use args in Query resolvers to adjust/filter result/resolved data

### Input Type Example

**Server type defs**

```js
//schema.js, home of all types
const { gql } = require("apollo-server");
/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  input HumansInput {
    age: Int
    title: String
    org: String
  }

  type Human {
    age: Int
    title: String
    org: String
    address: String
    phone: String
    email: String
  }

  type Query {
    humans(input: HumansInput): [Human]
  }
`;
module.exports = typeDefs;
```

**Resolver accommodating input args from client**

```js
// resolvers.js
module.exports = {
  Query: {
    humans(_, { input }, ctx) {
      if (input.age) return humans.filter((h) => h.age === input.age);
      if (input.title) return humans.filter((h) => h.title === input.title);
      if (input.org) return humans.filter((h) => h.org === input.org);
    },
  },
};
```

**Client request example**

```js
{
  humans(input: {title: "admin"}){
    age
    title
    org
    email
  };
}
```

## Input Type Review

- input types are

`Schema + Resolvers => Resolver`  
That's the heart of GraphQL.

- Schema
- TypeDefs
- Resolvers...
  - resolving, or satisfying, some data request from a 'client'

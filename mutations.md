# Mutations

- Its a Type
  - on a schema, like `Query`, it is called `Mutation`
  - defining operations that a client can perform as a way of...mutating the data
- i.e
  - CREATE
  - UPDATE
  - DELETE
- requires a `Mutation` Type on Schema using SDL
- Add fields for mutation type
- add args for mutations
  - describing the mutation
  -

## How to Create a Mutation

- define a `Mutation` type using the SDL
- add fields for the Mutation type
  - just like queries and all other types
- add args for mutable fields
  - MOST mutations (create,delete,update)...have arguments to infor the work on which fields are being worked on
- create resolvers for mutation fields

## Trivial eample

- NOTE
  - mutations are not required

```js

// A Pre-Defined Human Type
type Human{
  name: String!
  age: Int!
  job: String
}

// The Input type for human Mutation
input HumanInput {
  name: String!
  age: Int
  job: String
}

// Mutation Type
type Mutation {
  newHuman(input: HumanInput!): Human!
}

// the resolver file or resolver logic below

Mutation:{
  newHuman(_, {input}){
    return input
  }
}


//querying from client

mutation {
  newHuman(input: {name: "Joe", age: 24})
  name
  age
}

// running above query will return {name: "Joe", age: 24}
```

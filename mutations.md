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
- add args for mutable fields
- create resolvers for mutation fields

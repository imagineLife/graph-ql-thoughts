## Queries, Types

- Expected to be present by GraphQL
- outlies the shape to the resulting data for the GraphQL-consuming-client
- the `!` means `not null`

## Resolvers

- a fn
- returs values for fields that exist on Types in a SChema
- dependant on an incoming query for execution
- `resolver names must match exact field-names on the schema types`
- ex.

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

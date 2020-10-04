## Thanks To F.E.M && Scott Moss

https://github.com/FrontendMasters/fullstack-graphql

# What is GraphQL

Interpreted from scott moss...

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

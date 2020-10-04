// Dependencies
const gql = require('graphql-tag')
const PORT = process.env.PORT || 4000;
/*
  Create a schema
  Converts to an AST undertandable by graphql

  '!' always has... here the friends should ALWAYS have an array
  graphql will break when the '!' is not met

  QUERY
    - Query is the 'default' that GraphQL looks for
*/ 
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

/*
  Resolvers
  - has to look identical to the typeDef above
*/ 
const resolver = {
  Query: {
    me(){
      return {
        email: 'test@yoda.com',
        avatar: 'http://myAvatar.png',
        friends: []
      }
    }
  }
}

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers
})

gqlServer.listen(PORT)
.then(() => console.log(`GraphQL Server listening on ${PORT}`))
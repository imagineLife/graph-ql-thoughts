// Dependencies
const gql = require('graphql-tag')
const {ApolloServer} = require('apollo-server');
const PORT = process.env.PORT || 4000;
const shoesArr = [
  {
    brand: 'Fancy',
    size: 10
  },
  {
    brand: 'Simple',
    size: 10
  },
  {
    brand: 'Workout',
    size: 10
  },
  {
    brand: 'Dance',
    size: 10
  }
]

const shirtsArr = [
  {
    brand: 'Simple',
    size: 'S',
    color: 'Dark Brown'
  },
  {
    brand: 'Simple',
    size: 'S',
    color: 'Black'
  },
  {
    brand: 'Simple',
    size: 'S',
    color: 'Dark Blue'
  },
  {
    brand: 'Simple',
    size: 'S',
    color: 'Gray'
  }
]


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

  type Shirt{
    brand: String!
    size: String!
    color: String!
  }

  type Shoe {
    brand: String!
    size: Int!
  }

  input ShoesInput {
    brand: String
    size: Int
  }

  type Query {
    me: User!
    shoes(input: ShoesInput): [Shoe]
    shirts: [Shirt]
  }
`

/*
  Resolvers
  - has to look identical to the typeDef above
*/ 
const resolvers= {
  Query: {
    me(){
      return {
        email: 'test@yoda.com',
        avatar: 'http://myAvatar.png',
        friends: []
      } 
    },
    shoes(_,{input}){
      return shoesArr.filter(d => {
        if(input && input.brand){
          return d.brand === input.brand
        }
        if(input && input.size){
          return d.size === input.size
        }
        return d
      })
    },
    shirts(){
      return shirtsArr
    }
  }
}

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers
})

gqlServer.listen(PORT)
.then(() => console.log(`GraphQL Server listening on ${PORT}`))

/*
  How to use
  - from cmd line - `node index.js`
  - from browser localhost:4000
  - !! view the batteries-included graphql apollo gui

  Querying for shirts
  from GraphQL Gui...
  {
    shirts {
      size
      brand
    }
  }

  OR

  {
    shirts {
      size
    }
  }

  OR

  {
    shirts {
      brand
    }
  }



  Querying for shoes, leveraging the filter
  {
    shoes(input: {brand: "Simple"}){
      size
    }
  }
*/ 
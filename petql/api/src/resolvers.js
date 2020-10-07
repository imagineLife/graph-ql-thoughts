/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_,__, ctx, info){
    /* 
      here can set DEFAULT returns
      returns [{id:1}, {id: 2}] returns the arr  2 
      returning via graphQL Playground ->
      {
        pets {
          id
        }
      }
      */  
    return [{id:1}, {id: 2}] 
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}

/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 * 
 * 
 * MOST USEFUL for 'computed' api values,
 * db-abstractions i.e
 *  instead of 2 fields 'firstName', 'lastName'
 *  the resolver can store the logic to return fullName `${firstName} ${lastName}`
 */

module.exports = {
  Query: {
    // pets(_,__, ctx, info){
      pets(_,{input}, ctx, info){
    /* 
      here can set DEFAULT returns
      NOTE: toggling these requires server restart despite hot-reloading

      return arr of ids
      returns [{id:1}, {id: 2}] returns the arr  2 
      returning via graphQL Playground ->
      {
        pets {
          id
        }
      }

      return arr of ids + names
      returns [{id:1, name: 'sally'}, {id: 2, name: 'john'}] returns the arr  2 
      returning via graphQL Playground ->
      {
        pets {
          id
        }
      

        NOTE the {input} in the fn param
        - input, here, is expected 
        - Has to match the schema def  
        - in schema def is...
          input PetInput{
            name: String
            type: String
          }

          type Query {
            pets(input: PetInput): [Pet]!
          }

      */  
    return [{id:1, name: 'init'}, {id: 2, name: 'hank'}] 
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

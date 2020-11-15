const myPets = [
  {type: 'dog', name: 'ralph', hair: 'short', color: 'blue'},
  {type: 'cat', name: 'sally', hair: 'long', color: 'orange'},
  {type: 'dog', name: 'donnie', hair: 'long', color: 'green'},
  {type: 'giraffe', name: 'shorty', hair: 'short', color: 'pink'},
  {type: 'monkey', name: 'boy', hair: 'long', color: 'white'}
]
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
      // user(_,__,ctx){
      //   return { id: 1, username: 'walter' }
      // },

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
    },
    pet(_,{input},ctx){
      return myPets.filter(p => p.name === input.name)[0]
      // return ctx.models.Pet.findOne(input)
    },
    petsByType(_,{input:{petType}},ctx){
      return myPets.filter(p => p.type === petType)
    }
  },

  Mutation:{
    newPet(_, {input}, ctx){
      const thisPet = ctx.models.Pet.create(input)
      console.log('thisPet')
      console.log(thisPet)
      
      return thisPet
    }
  },
  Pet: {
    owner(pet, _, {models}) {
      console.log('Pet -> Owner');
      return models.User.findOne() // could pass a param here{id: pet.owner}
    }
  }
}

/*
  Pet -> owner is a field-level resolver
    a resolver for a field on a type that is NOT a mutaiton OR query
*/ 

/*
  queries that work
  
  // Pets By Type
  query{
    petsByType(input: {petType: "cat"}){
      name
      type
      hair
    }
  }

  
*/
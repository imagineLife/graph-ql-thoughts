## Arguments

- allow a client to pass vars, along with a query, to be used in resolvers to get data

### Strongly defined args

Args must be defined in Schema. defined by explicit arg 'name', and/or field-name

### Arg Type options

- scalars
- "Input" types

## Example, typing an arg for Animals

### Type-Defining the arg

Schema / Type definition of Argument

```js
// schema.js, home of the query typeDefs
const typeDefs = `
  type SomeOtherObj {
  }

  type Query{
    animals(animalType: String!): [Animal]
  }
`;
```

Above...

- animals is a query
  - takes an arg
  - arg is 'animalType'
  - arg must be a string

### resolving an arg

Setting a resolver to 'handle' a query paramter... argument

```js
// resolvers.js, home of the query resolvers
module.exports = {
  Query{
    animals(_, {animalType}, ctx){
      if(!animalType) return animalsArr
      return animalsArr.filter(d => d.type == animalType)
    }
  }
}
```

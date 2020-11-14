# advanced Schema definition language

- [Enums](#enums)
- [Interfaces](#interfaces)
- [Unions](#unions)
- [Relationships](#relationships)

## Enums

- set of discrete values
- can be used in-place of scalars
- an enum field MUST RESOLVe to one of the values in the enum'd list
- GREAT for an explicit returned set of options

### Creating Enums

Enums go in the `typeDefs`

### Trivial Example

```js
/*
  - `PetType` is declaring the enum options for the PetType val
  - `PetType` is leveraged as the `brand` value in the `Pet` `type` field value
*/
const typeDefs = gql`
  enum PetType {
    CAT
    DOG
    HORSE
    GIRAFFE
  }
  type Pet {
    type: PetType!
    age: Int!
    color: String!
  }
`;
```

### Querying from a client using enum

```js
/*
  NOTICE
  the enum is not a string, it looks like a var in js
*/
mutation {
  newPet(input: {name: "Frank", type: HORSE}){
    name
    type
  }
}
```

## Interfaces

- "Abstract Types" that CAN NOT be used as field values
- used as "foundations" for explicit types
  - i.e when types share common fields, bu differ slightly
- interface types...
  - describe common fields of other types
  - do not "replace" redundancy - all types that 'implement' an 'interface' still need to explicitly state the fields that are in the interface (_see below for example_)

### Trivial Example

## updating the types to accommodate an interface

```js

  // an enum
  enum SleeveOptions {
    SHORT
    LONG
  }

  enum JacketWeight {
    HEAVY
    LIGHT
    MIDWEIGHT
  }

  // the interface type
  interface TopWear {
    size: String!
    material: String
  }

  type Shirt implements TopWear {
    size: String!
    material: String
    sleeveLength: SleeveOptions
  }

  type Jacket implements TopWear {
    size: String!
    material: String
    weight: JacketWeight
  }

```

### adjust resolvers to accommodate the connection

```js
TopWear{
  __resolveType(clienttopwear){
    if(clienttopwear.weight) return 'Jacket'
    return 'Shirt'
  }
}
```

### Querying from client

```js
{
  topwears{
    size
    material
    ... on Jacket {
      weight
    }
    ... on Shirt {
      sleeveLength
    }
  }
}
```

- repetitious, perhaps, for explicit reasons
  - in order to make clear all fields during development, perhaps, all fields need to be present EVENT WHEN leveraging interfaces

## Unions

- similar to interfaces
  - without ANY common fields amongst the types
- good for accessing more-than-one type using one query
  - i.e a 'global search'

### trivial example

```js
// update type defs to include this union
union DailyUpperwear = Shirt | Jacket

// update the query definition in the resolvers
// note, DailyupperwearInput type not explicit, just for p.o.c here
type Query {
  (..existing queries)
  dailyupperwear(input: DailyupperwearInput!): DailyUpperwear
}

```

### Querying from client

```js
// NOTE: similar to interfaces, NO common fields though
{
  dailyupperwear{
    ... on Jacket {
      material
      weight
      size
    }
    ... on Shirt {
      material
      size
      sleeveLength
    }
  }
}
```

## Relationships

- in DB there are no relationships
- POWERFUL
- DANGEROUS

### Thinking In Graphs

- The API is no longer...
  - a 'predefined list of operations'
  - always returning the same shape for each operation
- INSTEAD, the API...
  - is a set of "nodes"
    - nodes that know how to resolve _themselves_
    - linkable to other "nodes"
  - allows clients to ask for "nodes"
  - allows clients to "follow links" to get related "nodes"

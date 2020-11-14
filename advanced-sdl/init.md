# advanced Schema definition language

- [Enums](#enums)
- [Interfaces](#interfaces)
- [Unions](#unions)

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

## Unions
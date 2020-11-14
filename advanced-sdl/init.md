# advanced Schema definition language

## Enums

- set of discrete values
- can be used in-place of scalars
- an enum field MUST RESOLVe to one of the values in the enum'd list
- GREAT for an explicit returned set of options

### Creating Enums

Enums go in the `typeDefs`

### Triial Example

const typeDefs = gql` enum PetType { CAT DOG HORSE GIRAFFE }`
**Notes**

- by default, the response from the api with the above enum values will return the same string: HORSE (_looks like a variable_) will return "HORSE" as a string

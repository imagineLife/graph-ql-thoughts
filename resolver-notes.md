## Resolvers

GraphQL Will look at the 'parent' resolver

- GraphQL builds a resolver for every field, perhpas an "under the hood" type thing
- Child resolver defaults over-ride parent resolver defaults

### CTX

- `ctx.models.Pet` example
  - leverages the `Pet` model

The job of a resolver is to....resolve a field

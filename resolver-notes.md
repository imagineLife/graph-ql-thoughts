## Resolvers

[Interesting Article](https://v1.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08)

GraphQL Will look at the 'parent' resolver

- GraphQL builds a resolver for every field, perhpas an "under the hood" type thing
- **me, as a dev, tells the project HOW to 'resolve' a query request, by writing resolvers**

### Default vals

- Child resolver defaults over-ride parent resolver defaults
  **Example**

```js
  //define resolvers, here the query resolver
Query {

  // here 'pets' resolver returns array of objs
  pets(_,__,ctx){
    return [
      {id:'12'},
      {id:'23'}
    ]
  },
}

// define resolver, here the Pet resolver
Pet: {

  // this '123' value will 'over-write' the return values above
  // 123, here, is like a 'default value'
  id(): '123'
}
```

Resolvers Can resolve / return...

- individual fields can have resolvers
- all types can have resolvers

### CTX

- `ctx.models.Pet` example
  - leverages the `Pet` model

### Resolvers end up as a defined type

- all resolvers must end up as a type-defined value...
  - String
  - Int
  - ...etc

This is similar to a type-cast setup

### Resolvers, DB Fields, and flexibility

- Type-Cast the (db fields | fields to be returned)
- no need to "account for" all the different ways that the client requests data...
  - no "light-weigh user" and "robust user"
  - let the type-system AND the query methods do the work...

GraphQL letting the client query do the dynamic work of 'customizing' api responses...

```js
Query{
  person{
    id
    name
    age
  }
}
```

```js
Query{
  person{
    id
    name
    age
    address
    gender
    job title
  }
}
```

# MAQE API

[![CircleCI](https://circleci.com/gh/thestrayed/maqe-api.svg?style=svg)](https://circleci.com/gh/thestrayed/maqe-api)  [![Coverage Status](https://coveralls.io/repos/github/thestrayed/maqe-api/badge.svg?branch=master)](https://coveralls.io/github/thestrayed/maqe-api?branch=master)

## Background

It turns out that lurking through internet can get you some idea or something for you to do to practice yourself. This is part of an assignment from [MAQE](http://maqe.github.io/template.html). The nature of an assignment is not hard at all if you simply do it with `RESTFUL`. Since we have been hearing about `GraphQL` for years. This is a great oppurtunity to test the water.

I utilize the following lib for `GraphQL`

- [`apollo-server-express`](https://www.npmjs.com/package/apollo-server-express)

- [`graphql`](https://www.npmjs.com/package/graphql)

It turns out with this small project. You get to learn a thing or two.

- `GraphQL` is god at fetching data. `RESTFUL` couldn't complete with this.

- I like `HttpStatus` code though, `GraphQL` will return you `SUCCESS` (200) no matter what.

- When fetching data, you use `POST` method for it.

- No Browser cache by default, can be done with in memory cache (Redis or MemcacaheD) [DataLoader](https://www.apollographql.com/docs/apollo-server/features/data-sources.html#What-about-DataLoader)

- You can setup `GraphQL` as middleman to call other services too with [REST Data sources](https://www.apollographql.com/docs/apollo-server/features/data-sources.html#REST-Data-Source)

## Overview

The system supposes to return list of `posts` along with its author in pagination manner. SO client can use that to render it.

With this being built with `GraphQL` in mind, here is an endpoint on how to call it.

Here is the structure of query to use to get `post` along with `authors`

```graphql
query {
    posts(postPagination: {
        page: 1,
        pageSize: 10,
    }) {
        id
        title
        description
        imageUrl
        createdAt
        authors {
            id
            name
            role
            place
            avatarUrl
        }
    }
}
```

Here is the [collection](https://www.getpostman.com/collections/312eede5457e726e0f87) to for all the endpoints for this projects. You can import via link right away with this.

- CRUD for `authors` along with its pagination

- CRUD for `posts` along with its pagination

**Remark since GraphQL recently supports by POSTMAN, you can only share the collection via link rather publishing doc to POSTMAN itself**

## References

Interesting references thanks to [@indianajone](https://github.com/indianajone) and [@SiwakornS](https://github.com/SiwakornS)

- [Solving N+1 problem with GraphQL](https://engineering.shopify.com/blogs/engineering/solving-the-n-1-problem-for-graphql-through-batching)

- [Paypal takes on GraphQL](https://medium.com/paypal-engineering/graphql-a-success-story-for-paypal-checkout-3482f724fb53)

- [Best practice from Paypal](https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55?fbclid=IwAR0fPkP3VxusF9AA7U25FnAjqLVPV0mT0vYCSNdk47XxV09I3fxV_kQvtHg)

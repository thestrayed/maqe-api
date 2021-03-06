const { gql } = require('apollo-server-express');

const AuthorTypeDefs = require('./author');
const PostTypeDefs = require('./post');

const Query = gql`
    type Query {
        _empty: String
    }

    input Pagination {
        page: Int
        pageSize: Int
    }
`;

const Mutation = gql`
    type Mutation {
        _empty: String
    }
`;

module.exports = [
    Query,
    Mutation,
    AuthorTypeDefs,
    PostTypeDefs,
];

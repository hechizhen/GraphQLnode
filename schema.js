const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
  username: String
    viewpoint: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

module.exports = typeDefs;
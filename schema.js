const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    viewpoint: String
    createdAt: String!
    updatedAt: String!
  }

  type Types {
    id: ID!
    typeName: String
    created_at: String!
    updated_at: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    types: [Types]
    type(id: ID!): Types
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    createType(typeName: String!): Types
    updataType(typeName: String!,id: ID!): Types
  }
`;

module.exports = typeDefs;
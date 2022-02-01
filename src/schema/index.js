const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String
    category: String
    tags: [String]
  }

  type Query {
    products: [Product]
    product(productId: ID!): Product
  }

  input ProductInput {
    name: String!
    category: String!
    tags: [String]
  }

  type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(input: ProductInput!, productId: ID!): Product
    deleteProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;

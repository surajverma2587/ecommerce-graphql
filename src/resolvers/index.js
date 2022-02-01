const products = require("./products");
const product = require("./product");
const createProduct = require("./createProduct");
const updateProduct = require("./updateProduct");
const deleteProduct = require("./deleteProduct");

const resolvers = {
  Query: {
    products,
    product,
  },
  Mutation: {
    createProduct,
    updateProduct,
    deleteProduct,
  },
};

module.exports = resolvers;

const { Product } = require("../models");

const createProduct = async (_, { input }) => {
  const newProduct = new Product(input);

  await newProduct.save();

  return newProduct;
};

module.exports = createProduct;

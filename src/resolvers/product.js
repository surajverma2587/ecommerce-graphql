const { Product } = require("../models");

const product = async (_, { productId }) => {
  const product = await Product.findById(productId);
  return product;
};

module.exports = product;

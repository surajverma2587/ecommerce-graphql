const { Product } = require("../models");

const updateProduct = async (_, { productId }) => {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  return deletedProduct;
};

module.exports = updateProduct;

const { Product } = require("../models");

const updateProduct = async (_, { input, productId }) => {
  const newProduct = new Product(input);

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    { $set: { ...input } },
    {
      returnDocument: "after",
    }
  );

  return updatedProduct;
};

module.exports = updateProduct;

const { Schema, model } = require("mongoose");

const productSchema = {
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
};

const schema = new Schema(productSchema);
const Product = model("Product", schema);

module.exports = Product;

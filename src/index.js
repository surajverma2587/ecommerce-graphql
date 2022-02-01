const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const start = async () => {
  await mongoose.connect("mongodb://localhost:27017/ecommerceDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("[INFO]: Database connection successful");

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
};

start();

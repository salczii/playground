const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = loadFilesSync("schema/types/**/*", {
  extensions: ["graphql"],
});

const resolvers = loadFilesSync("schema/resolvers/**/*", {
  extensions: ["js"],
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(3000, () => {
  console.log("GraphQl Server listening on port 3000");
});

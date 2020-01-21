const { gql } = require("apollo-server");

/** Schema begin... */
const AdminSchema = require("./books").schema;
const RootSchema = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;
/** Schema end... */

const typeDefs = [AdminSchema, RootSchema];

/** Resolvers begin... */
const AdminResolver = require("./books").resolver;
/** Resolvers end... */

const resolvers = {
  Query: {
    ...AdminResolver.Query
  }
  // Mutation: {
  //   ...AdminResolver.Mutation
  // }
};

/** Datasources begin */
const AdminsAPI = require("./books").datasource;
/** Datasources end */

const dataSources = () => ({
  booksAPI: new AdminsAPI()
});

module.exports = { typeDefs, resolvers, dataSources };

const { ApolloServer, gql } = require("apollo-server");
const { typeDefs, resolvers, dataSources } = require("./rootDefinitions"); //

// Load environment variables
// require("dotenv").config();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources,

	context: ({ req }) => {
		const token = req.headers.authorization || "";
		return { token };
	}
});
// ,

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

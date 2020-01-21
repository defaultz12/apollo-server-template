const { gql } = require("apollo-server");

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	extend type Query {
		books: [Book]
	}
`;

module.exports = typeDefs;

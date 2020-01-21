const { gql } = require("apollo-server");

const typeDefs = gql`
	extend type Query {
		services: [Service]!
		service(id: ID!): Service
	}
	extend type SiteTemplate {
		services: [Service]!
	}
	type Service {
		id: ID!
		name: String!
		slug: String!
		description: String
		created: String
		updated: String
	}
`;

module.exports = typeDefs;

// 1. Query all Services and single Service by ID
// 2. SiteTemplate can query all services
// 3. Mutation (TO DO)
// 4. SiteTemplate Shape (Based from database)

const resolvers = {
	Query: {
		services: async (_, { __ }, { dataSources }) => {
			const allServices = await dataSources.servicesAPI.getAllServices();
			return allServices;
		},
		service: (_, { id }, { dataSources }) => {
			return dataSources.servicesAPI.getServicesById({ serviceId: id });
		}
	},
	Mutation: {
		newSite: async (_, { type, siteName, siteTemplateId }, { dataSources }) => {
			const newsite = await dataSources.sitesAPI.newSite({
				type,
				siteName,
				siteTemplateId
			});
			return newsite;
		}
	}
};

module.exports = resolvers;

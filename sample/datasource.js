const { RESTDataSource } = require("apollo-datasource-rest");

class ServicesAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.REST_API_URL || "http://rest.app.webriq.com/api";
	}

	willSendRequest(request) {
		request.headers.set("Authorization", this.context.token);
		request.headers.set("Accept", "application/vnd.webriq.v2+json");
	}

	// Get Services by ID
	async getServicesById({ serviceId }) {
		const response = await this.get(`services/${serviceId}`);
		return this.serviceReducer(response.data);
	}

	// Get All Services
	async getAllServices() {
		const response = await this.get("services");
		// console.log(response)
		return Array.isArray(response && response.data)
			? response.data.map(service => this.serviceReducer(service))
			: [];
	}

	serviceReducer(service) {
		return {
			id: service.id || 0,
			name: service.name,
			slug: service.slug,
			description: service.description,
			created: service.created,
			updated: service.updated
		};
	}
}

module.exports = ServicesAPI;

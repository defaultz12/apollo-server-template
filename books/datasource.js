const { RESTDataSource } = require("apollo-datasource-rest");

class BooksAPI extends RESTDataSource {
	// Get All Services
	async getAllBooks() {
		// const response = await this.get("services");
		// // console.log(response)
		// return Array.isArray(response && response.data)
		// 	? response.data.map(service => this.serviceReducer(service))
		// 	: [];

		const books = [
			{
				title: "Harry Potter and the Chamber of Secrets",
				author: "J.K. Rowling"
			},
			{
				title: "Jurassic Park",
				author: "Michael Crichton"
			}
		];
		return books.map(book => this.bookReducer(book));
	}

	bookReducer(book) {
		return {
			title: book.id || "No Book Title",
			author: book.author || "No Book Author"
		};
	}
}

module.exports = BooksAPI;

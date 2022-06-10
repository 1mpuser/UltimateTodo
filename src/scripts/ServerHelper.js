import axios from 'axios';
export default class ServerHelper {
	static async fetchTodos(limit = 10, page = 1) {
		const promise = new Promise(function (resolve, reject) {
			setTimeout(() => resolve('done'), 5000);
		});
		//const bool = await promise;
		const responce = await axios.get(
			'https://jsonplaceholder.typicode.com/todos',
			{
				params: {
					_limit: limit,
					_page: page,
				},
			}
		);

		return responce.data;
	}
}

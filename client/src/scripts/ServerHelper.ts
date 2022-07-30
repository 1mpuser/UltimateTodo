import axios from 'axios';
import { ITodo } from '../interfaces/types';
export default class ServerHelper {
	static async fetchTodos(limit = 10, page = 1) : Promise<ITodo[]> {
		const promise = new Promise(function (resolve, reject) {
			setTimeout(() => resolve('done'), 5000);
		});
		//const bool = await promise;
		const responce = await axios.get(
			'https://my-json-server.typicode.com/1mpuser/demoJSON/todos',
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

import axios from 'axios';
import { jsonLike } from '../../SomeFilesWhichIWouldGetFromBackend/LikeJsonClientProfile';
export default async function asyncLoginHandler(login : string, password : string) : Promise<[boolean, string | undefined]> {
	//returning arr with name and status
	//if finction returs array with something or false
	setTimeout(() => true, 3000); //that could be a server responce cause function
	//is async that's just a plug
	const responce = await axios.get(
		'https://my-json-server.typicode.com/1mpuser/demoJSON/accounts'
	);
	const arr = responce.data;
	//here could be a normal json file can be getted through axios
	for (let elem of arr) {
		// eslint-disable-next-line eqeqeq
		if (login == elem.login && password == elem.password) return [true, login];
	}
	return [false, undefined];
}

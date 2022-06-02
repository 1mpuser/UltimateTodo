import { jsonLike } from '../../SomeFilesWhichIWouldGetFromBackend/LikeJsonClientProfile';
export default async function asyncLoginHandler(login, password) {
	//returning arr with name and status
	//if finction returs array with something or false
	setTimeout(() => true, 3000); //that could be a server responce cause function
	//is async that's just a plug
	const obj = jsonLike; //here could be a normal json file can be getted through axios
	// eslint-disable-next-line eqeqeq
	if (login == obj.login && password == obj.password) return [true, login];
	else return [false, undefined];
}

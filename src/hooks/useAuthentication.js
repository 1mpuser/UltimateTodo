import useFetching from './useFetching';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useAuthentication(url, login, password) {
	const [fetching, isLoading, error] = useFetching(() => {
		return axios.get(url).data;
	});
	const [AuthStatus, setAuthStatus] = useState(false);
	const [UserLogin, setUserLogin] = useState('');
	let userLogin;
	const arr = useEffect(() => {
		async function fet() {
			await fetching();
		}
		fet();
	}, [login, password]);
	for (let elem of arr) {
		if (elem.login == login && elem.password == password) {
			setAuthStatus(true);
			setUserLogin(elem.login);
		}
	}
	return [AuthStatus, UserLogin, isLoading, error];
}

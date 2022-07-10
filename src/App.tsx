import { BrowserRouter } from 'react-router-dom';
import Router from './components/UI/Router/Router';
import './App.css';
import LoginBar from './components/UI/LoginBar/LoginBar';
import { DateContext } from './context/DateContext';
import React, { useState } from 'react';
import { AuthContext } from './context/AuthContext';


function App()  {
	const now = new Date();
	const [date, setDate] = useState<Date>(now);
	const [isAuth, setAuthStatus] = useState<boolean>(false);
	const [login, setLogin] = useState<string>('');
	return (
		<AuthContext.Provider value={{ isAuth, setAuthStatus, login, setLogin }}>
			<DateContext.Provider value={{ date, setDate }}>
				<BrowserRouter>
					<LoginBar isAuth={isAuth} name={login} />
					<Router />
				</BrowserRouter>
			</DateContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;

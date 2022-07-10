import { BrowserRouter } from 'react-router-dom';
import Router from './components/UI/Router/Router';
import './App.css';
import LoginBar from './components/UI/LoginBar/LoginBar';
import { DateContext } from './context/DateContext';
import React, { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { useTypedSelector } from './hooks/useTypedSelector';


function App()  {
	const now = new Date();
	const [date, setDate] = useState<Date>(now);
	// const [isAuth, setAuthStatus] = useState<boolean>(false);
	// const [login, setLogin] = useState<string>('');
	const {isAuth, login} = useTypedSelector(state => state.user)
	return (
			<DateContext.Provider value={{ date, setDate }}>
				<BrowserRouter>
					<LoginBar isAuth={isAuth} name={login} />
					<Router />
				</BrowserRouter>
			</DateContext.Provider>
	);
}

export default App;

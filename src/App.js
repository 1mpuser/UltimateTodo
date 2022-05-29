import Router from './components/UI/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginBar from './components/UI/LoginBar/LoginBar';
import { DateContext } from './context/DateContext';
import React, { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import ModalCalendarWindow from './components/ModalCalendarWindow/ModalCalendarWindow';
function App() {
	const now = new Date();
	const [date, setDate] = useState(now);
	const [isAuth, setAuthStatus] = useState(false);
	const [login, setLogin] = useState('');
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

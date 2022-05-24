import Router from './components/UI/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginBar from './components/UI/LoginBar/LoginBar';
import { DateContext } from './context/DateContext';
import React, { useState } from 'react';

function App() {
	const now = new Date();
	const [date, setDate] = useState(now);
	return (
		<DateContext.Provider value={{ date, setDate }}>
			<BrowserRouter>
				<LoginBar />
				<Router />
			</BrowserRouter>
		</DateContext.Provider>
	);
}

export default App;

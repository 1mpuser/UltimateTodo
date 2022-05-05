//import { Router } from 'react-router-dom';
import Router from './components/UI/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginBar from './components/UI/LoginBar/LoginBar';
function App() {
	return (
		<BrowserRouter>
			<LoginBar />
			<Router />
		</BrowserRouter>
	);
}

export default App;

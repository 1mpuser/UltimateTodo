import CalendarPage from '../pages/CalendarPage/CalendarPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import TodoPage from '../pages/TodayTodoPage/TodoPage';

export const RouteWays = [
	{ path: '/login', elem: LoginPage },
	{ path: '/signup', elem: SignUpPage },
	{ path: '/error', elem: ErrorPage },
	{ path: '/home', elem: HomePage },
	{ path: '/today', elem: TodoPage },
	{ path: '/calendarik', elem: CalendarPage },
];

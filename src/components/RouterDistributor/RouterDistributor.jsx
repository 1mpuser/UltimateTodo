import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage";
import TodayTodo from "../../pages/TodayTodo";

export const RouterDistributor = [
    {path : '/login', component : LoginPage, exact : true},
    {path : '/signup', component : SignUpPage, exact: true},
    {path : '/todayPage', component : TodayTodo, exact: true}
]
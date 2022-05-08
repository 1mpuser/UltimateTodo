import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import SignUpPage from '../../../pages/SignUpPage/SignUpPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import HomePage from '../../../pages/HomePage/HomePage';
import TodoPage from '../../../pages/TodayTodoPage/TodoPage';
//could be routerDistributor
const Router = () => {
    const id = nanoid;
    return (
        <Switch>
            <Route key={id()} path='/login'>
                <LoginPage />
            </Route>
            <Route key={id()} path='/signup'>
                <SignUpPage />
            </Route>
            <Route key={id()} path='/error'>
                <ErrorPage/>
            </Route>
            <Route key={id()} path='/home'>
                <HomePage/>
            </Route>
            <Route key={id()} path='/today'>
                <TodoPage/>
            </Route>
            <Redirect key={id()} to='/home'></Redirect>
        </Switch>        
    );
}

//elements existence is very important cause of shit which u could get instaed of it
export default Router;
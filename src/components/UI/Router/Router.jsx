import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import CalendarPage from '../../../pages/CalendarPage/CalendarPage';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import HomePage from '../../../pages/HomePage/HomePage';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import SignUpPage from '../../../pages/SignUpPage/SignUpPage';
import TodoPage from '../../../pages/TodayTodoPage/TodoPage';
import TodoOnDatePage from '../../../pages/TodoOnDatePage/TodoOnDatePage';

const Router = () => {
    const id = nanoid;
    return (
        <Switch>
            <Route key={id()} path='/login'>
                <LoginPage/>
            </Route>
            <Route key={id()} path='/signup'>
                <SignUpPage/>
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
            <Route key={id()} path='/calendarik'>
                <CalendarPage/>
            </Route>
            <Route exact to = "todos/:date">
                <TodoOnDatePage/>
            </Route>
             <Redirect key={id()} to='/home'/>
        </Switch>
    );
}

export default Router;
import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import SignUpPage from '../../../pages/SignUpPage';
//could be routerDistributor
const Router = () => {
    const id = nanoid;
    return (
        <Switch>
            {/* {RouterDistributor.map((item)=><Route key={id()} exact path={item.path}>{item.component}</Route>)} */}
            {/* not working because of old mistake of hooks 
            need to rework */}
            <Route path='/login'><LoginPage/></Route>
            <Route path='/signup'><SignUpPage/></Route>
        </Switch>        
    );
}
//elements existence is very important cause of shit which u could get instaed of it
export default Router;
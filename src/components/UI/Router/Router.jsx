import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { RouteWays } from '../../../data/RouteWays';
const Router = () => {
    const id = nanoid;
    return (
        <Switch>
            {RouteWays.map((item)=><Route key={id()} path={item.path}>{item.elem}</Route>)}
            <Redirect key={id()} to='/home'></Redirect>
        </Switch>
    );
}

export default Router;
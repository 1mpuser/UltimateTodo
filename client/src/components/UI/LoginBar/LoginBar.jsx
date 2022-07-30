import React, { useState } from 'react';
import classes from './LoginBar.module.css'
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
const LoginBar = ({isAuth, name}) => {
    const id = nanoid;
    const str = `Hello, ${name}`;
    return (
        <div className={classes.bar}>
            <Link key={id()} to = "/home" className={classes.functionalLinks}>Home</Link>
            <Link key={id()} to = "/calendarik" className={classes.functionalLinks}>Calendar</Link>
            {!isAuth && <Link key={id()} to="/login" className={classes.abandonedLink}>Login</Link>}
            {!isAuth && <Link key={id()} to="/signup" className={classes.signupLink}>Sign up</Link>}
            {isAuth && <div className={classes.helloDiv}>{str}</div>}
        </div>
    );
}

export default LoginBar;
import React, { useState } from 'react';
import classes from './LoginBar.module.css'
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
const LoginBar = ({isAuth, name}) => {
    const id = nanoid;
    const str = `Hello, ${name}`;
    return (
        <div className={classes.bar}>
            {!isAuth && <Link key={id()} to="/login" className={classes.firstLink}>Login</Link>}
            {!isAuth && <Link key={id()} to="/signup" className={classes.Link}>Sign up!</Link>}
            {isAuth && <div className={classes.firstLink}>{str}</div>}
        </div>
    );
}

export default LoginBar;
import React, { useState } from 'react';
import classes from './LoginBar.module.css'
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
const LoginBar = () => {
    const id = nanoid;
    return (
        <div className={classes.bar}>
            <Link key={id()} to="/login" className={classes.firstLink}>Login</Link>
            <Link key={id()} to="/signup" className={classes.Link}>Sign up!</Link>
        </div>
    );
}

export default LoginBar;
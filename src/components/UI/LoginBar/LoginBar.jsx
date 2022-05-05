import React, { useState } from 'react';
import classes from './LoginBar.module.css'
import { Link } from 'react-router-dom';
const LoginBar = () => {
    return (
        <div className={classes.bar}>
            <Link to="/login" className={classes.firstLink}>Login</Link>
            <Link to="/signup" className={classes.Link}>Sign up!</Link>
        </div>
    );
}

export default LoginBar;
import React from 'react';
import classes from './MyButton.module.css';
const CheckTodoButton = ({children, ...props}) => {
    return (
        <a {...props} className={classes.button}>{children}</a>
    );
}

export default CheckTodoButton;
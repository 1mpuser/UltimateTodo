import React from 'react';
import classes from './Cell.module.css';

const Cell = ({children, ...props}) => {
    console.log(children);
    return (
        <div  className={classes.cell} {...props}>{children}</div>
    );
}

export default Cell;
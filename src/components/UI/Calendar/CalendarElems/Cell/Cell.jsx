import React from 'react';
import classes from './Cell.module.css';

const Cell = (props) => {
    return (
        <div className={classes.cell}>{props.children}</div>
    );
}

export default Cell;
import React from 'react';
import classes from './MonthNName.module.css';
const MonthNName = (props) => {
    return (
        <div className={classes.item}>{props.children}</div>
    );
}

export default MonthNName;
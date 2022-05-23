import React from 'react';
import classes from './MonthNName.module.css';
const MonthNName = ({children}) => {
    return (
        <div className={classes.item}>{children}</div>
    );
}

export default MonthNName;
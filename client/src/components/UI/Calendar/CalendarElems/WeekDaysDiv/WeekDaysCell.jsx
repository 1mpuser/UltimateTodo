import React from 'react';
import classes from './WeekDaysCell.module.css'
const WeekDaysCell = ({children}) => {
    return (
        <div className={classes.WeekDaysCell}>{children}</div>
    );
}

export default WeekDaysCell;
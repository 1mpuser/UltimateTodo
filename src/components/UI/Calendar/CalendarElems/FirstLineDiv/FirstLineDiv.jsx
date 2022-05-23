import React from 'react';
import CalendarButton from '../CalendarButton/CalendarButton';
import classes from './FirstLineDiv.module.css';
import MonthNName from './MonthNName';
const FirstLineDiv = () => {
    return (
        <div className={classes.FirstLine}>
            <MonthNName>May 2022</MonthNName>
            <div>
            <CalendarButton>&larr;</CalendarButton>
            <CalendarButton>&rarr;</CalendarButton>
            </div>
        </div>
    );
}

export default FirstLineDiv;
import React from 'react';
import classes from './CalendarButton.module.css';
const CalendarButton = (props) => {
    return (
        <a  {...props} className={classes.button}>{props.children}</a>
    );
}

export default CalendarButton;
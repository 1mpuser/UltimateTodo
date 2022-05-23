import React from 'react';
import classes from './CalendarButton.module.css';
const CalendarButton = (props) => {
    return (
        <a href={() => false} className={classes.button}>{props.children}</a>
    );
}

export default CalendarButton;
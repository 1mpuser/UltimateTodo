import React from 'react';
import classes from './Calendar.module.css';
import CalendarButton from './CalendarElems/CalendarButton/CalendarButton';
import WeekDaysDiv from './CalendarElems/WeekDaysDiv/WeekDaysDiv';

const Calendar = () => {
    return (
        <div className={classes.basis}>
            <WeekDaysDiv/>
        </div>
    );
}

export default Calendar;
import { nanoid } from 'nanoid';
import React from 'react';
import classes from './Calendar.module.css';
import WeekCellLine from './CalendarElems/WeekCellLine/WeekCellLine';
import WeekDaysDiv from './CalendarElems/WeekDaysDiv/WeekDaysDiv';
import FirstLineDiv from './CalendarElems/FirstLineDiv/FirstLineDiv';

const Calendar = () => {
    const id = nanoid;
    return (
        <div className={classes.basis}>
            <FirstLineDiv/>
            <WeekDaysDiv/>
            <WeekCellLine arr={[1,2,3,4,5,6,7]}/>
        </div>
    );
}

export default Calendar;
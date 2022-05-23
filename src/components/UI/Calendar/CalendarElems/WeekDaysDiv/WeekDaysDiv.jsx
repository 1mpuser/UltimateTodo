import React from 'react';
import classes from './WeekDaysDiv.module.css';
import WeekDaysCell from './WeekDaysCell';
const WeekDaysDiv = () => {
    return (
        <div className={classes.WeekDaysDiv}>
            <WeekDaysCell>Пн</WeekDaysCell>
            <WeekDaysCell>Вт</WeekDaysCell>
            <WeekDaysCell>Ср</WeekDaysCell>
            <WeekDaysCell>Чт</WeekDaysCell>
            <WeekDaysCell>Пт</WeekDaysCell>
            <WeekDaysCell>Сб</WeekDaysCell>
            <WeekDaysCell>Вс</WeekDaysCell>
        </div>        
    );
}

export default WeekDaysDiv;
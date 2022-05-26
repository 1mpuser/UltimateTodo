import { nanoid } from 'nanoid';
import React, {useContext, useState, useMemo} from 'react';
import classes from './Calendar.module.css';
import WeekDaysDiv from './CalendarElems/WeekDaysDiv/WeekDaysDiv';
import FirstLineDiv from './CalendarElems/FirstLineDiv/FirstLineDiv';
import SmartDivWithCellReorganisation from './CalendarElems/SmartDivWithCellReorganisation/SmartDivWithCellReorganisation';
import { DateContext } from '../../../context/DateContext';
const Calendar = () => {
    const id = nanoid;
    const {date, setDate} = useContext(DateContext);
    const workingDate = useMemo (()=> new Date ( date.getFullYear(), date.getMonth(), 1), [date]);
    console.log(workingDate);
    const [calendarDate, setCalendarDate] = useState(workingDate);
    console.log(calendarDate);
    return (
        <div className={classes.basis}>
            <FirstLineDiv date={calendarDate} setWorkDate = {(date)=>setCalendarDate(date)}/>
            <WeekDaysDiv/>
            <SmartDivWithCellReorganisation contextDate = {date} workDate = {calendarDate} setContextFromCell = {setDate}/>
        </div>
    );
}

export default Calendar;

// in working date we'll push only first day of some month from context date object cause
//in 31, 29, 30 th dates would be troubles in it so in cell we'lll put just a date
//from context to find a needed our date so 
//there it is
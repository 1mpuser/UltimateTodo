import React, {useContext, useMemo, useState} from 'react';
import { DateContext } from '../../../../../context/DateContext';
import CalendarButton from '../CalendarButton/CalendarButton';
import classes from './FirstLineDiv.module.css';
import MonthNName from './MonthNName';
import { englishMonths } from '../../../../../constants/EnglishMonths';
import ChangeMonth from '../../../../scripts/ChangeMonth';
const FirstLineDiv = ({date, setWorkDate}) => {
    const [insideDate, setInsideDate] = useState(date);
    const str = englishMonths[insideDate.getMonth()] + ' ' + insideDate.getFullYear();
    //= englishMonths[tmpDate.getMonth()] + ' ' + tmpDate.getFullYear();
    //need to work here cause this shit is not working
    //maybe thats need to work cause we need primitive types here
    return (
        <div className={classes.FirstLine}>
            <div className={classes.MonthNYearName}>{str}</div>
            <div>
            <CalendarButton onClick = {()=>{
                let tmpDate = new Date(insideDate);
                tmpDate = ChangeMonth(tmpDate, false);
                setInsideDate(tmpDate);
                setWorkDate(tmpDate);
            }}>&larr;</CalendarButton>
            <CalendarButton
            onClick = {()=>{
                let tmpDate = new Date(insideDate);
                tmpDate = ChangeMonth(tmpDate, true);
                setInsideDate(tmpDate);
                setWorkDate(tmpDate);
            }}>&rarr;</CalendarButton>
            {/* onclick setsNewDate */ }
            </div>
        </div>
    );
}

export default FirstLineDiv;
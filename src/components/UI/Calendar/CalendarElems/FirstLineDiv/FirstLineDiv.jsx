import React, {useContext, useMemo, useState} from 'react';
import { DateContext } from '../../../../../context/DateContext';
import CalendarButton from '../CalendarButton/CalendarButton';
import classes from './FirstLineDiv.module.css';
import MonthNName from './MonthNName';
import { englishMonths } from '../../../../../constants/EnglishMonths';
import ChangeMonth from '../../../../scripts/ChangeMonth';
const FirstLineDiv = ({date, setWorkDate}) => {
    const [insideDate, setInsideDate] = useState(date);
    const [monthText, setMonthText] = useState(englishMonths[date.getMonth()]);
    const [yearText, setYearText] = useState(date.getFullYear());
    const str = monthText + ' ' + yearText;
    //= englishMonths[tmpDate.getMonth()] + ' ' + tmpDate.getFullYear();
    //need to work here cause this shit is not working
    //maybe thats need to work cause we need primitive types here
    return (
        <div className={classes.FirstLine}>
            <div className={classes.MonthNYearName}>{str}</div>
            <div>
            <CalendarButton onClick = {()=>{
                console.log('working');
                let tmpDate = new Date(insideDate);
                tmpDate.setDate(1);
                tmpDate = ChangeMonth(tmpDate, false);
                setInsideDate(tmpDate);
                setMonthText(englishMonths[tmpDate.getMonth()]);
                setYearText(tmpDate.getFullYear());
                setWorkDate(tmpDate);
            }}>&larr;</CalendarButton>
            <CalendarButton>&rarr;</CalendarButton>
            {/* onclick setsNewDate */ }
            </div>
        </div>
    );
}

export default FirstLineDiv;
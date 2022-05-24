import React, {useContext, useMemo, useState} from 'react';
import { DateContext } from '../../../../../context/DateContext';
import CalendarButton from '../CalendarButton/CalendarButton';
import classes from './FirstLineDiv.module.css';
import MonthNName from './MonthNName';
import { englishMonths } from '../../../../../constants/EnglishMonths';
import ChangeMonth from '../../../../scripts/ChangeMonth';
const FirstLineDiv = ({date, setWorkDate}) => {
    const [isolatedDate, setIsolatedDate] = useState(date);
    const str = useMemo(()=>englishMonths[isolatedDate.getMonth()] + ' ' + isolatedDate.getFullYear(), [isolatedDate]);
    //= englishMonths[tmpDate.getMonth()] + ' ' + tmpDate.getFullYear();
    //need to work here
    return (
        <div className={classes.FirstLine}>
            <div className={classes.MonthNYearName}>{str}</div>
            <div>
            <CalendarButton onClick = {()=>{
                console.log('working');
                const tempDate = isolatedDate;
                ChangeMonth(tempDate, false);
                console.log(tempDate);
                setIsolatedDate(tempDate);
                return setWorkDate(tempDate);
            }}>&larr;</CalendarButton>
            <CalendarButton>&rarr;</CalendarButton>
            {/* onclick setsNewDate */ }
            </div>
        </div>
    );
}

export default FirstLineDiv;
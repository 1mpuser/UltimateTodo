import React, {useMemo} from 'react';
import WeekCellLine from '../WeekCellLine/WeekCellLine';
import DateToWorkObject from '../../../../scripts/DateOfFirstDateToCoolObj';
import { nanoid } from 'nanoid';
const SmartDivWithCellReorganisation = ({workDate, setContextFromCell, ...props}) => {
    //console.log(DateToWorkObject(tmpDate));
    const id = nanoid;
    const {arr, fifthWeekEmpty, sixthWeekEmpty} = DateToWorkObject(workDate);
    const year = workDate.getFullYear();
    const month = workDate.getMonth();
    return (
        <div>
            {
                arr.map((item, index) => {
                    if (index < 4) return <WeekCellLine key={id()} setContextFromCell={setContextFromCell} arr={item} month={month} year={year}/>
                    else if (index == 4 && !fifthWeekEmpty) return <WeekCellLine key={id()} setContextFromCell={setContextFromCell} arr={item} month={month} year={year}/>
                    else if (index == 5 && !sixthWeekEmpty) return <WeekCellLine key={id()} setContextFromCell={setContextFromCell} arr={item} month={month} year={year}/>
                })
            }
        </div>
    );
}

export default SmartDivWithCellReorganisation;
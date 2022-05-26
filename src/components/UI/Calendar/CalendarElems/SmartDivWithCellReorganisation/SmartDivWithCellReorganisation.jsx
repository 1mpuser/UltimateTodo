import React, {useMemo} from 'react';
import WeekCellLine from '../WeekCellLine/WeekCellLine';
import DateToWorkObject from '../../../../scripts/DateOfFirstDateToCoolObj';
import { nanoid } from 'nanoid';
const SmartDivWithCellReorganisation = ({date, ...props}) => {
    //console.log(DateToWorkObject(tmpDate));
    const id = nanoid;
    const {arr, fifthWeekEmpty, sixthWeekEmpty} = DateToWorkObject(date);
    console.log(arr)
    return (
        <div>
            {arr.map((item, index)=>{
                if (index < 4) return <WeekCellLine key={id()} arr={item}/>
                else if (index == 4 && !fifthWeekEmpty) return <WeekCellLine key={id()} arr={item}/>
                else if (index == 5 && !sixthWeekEmpty) return <WeekCellLine key={id()} arr={item}/>
            })}
        </div>
    );
}

export default SmartDivWithCellReorganisation;
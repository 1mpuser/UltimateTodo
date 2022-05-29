import React, {useContext} from 'react';
import classes from './Cell.module.css';
import { DateContext } from '../../../../../context/DateContext';
const Cell = ({children, modalWindowFalse, ...props}) => {
    // console.log(props.date);
    // console.log(props.month);
    // console.log(props.year);
    // with props all ok
    const {date, setDate} = useContext(DateContext);
    return (
        <div  className={classes.cell} {...props} onClick={()=>{
            if(props.date){
                let tmpDate = new Date(props.year, props.month, props.date);
                setDate(tmpDate);
            }
            if (modalWindowFalse) modalWindowFalse();
        }}>
            {children}
        </div>
    );
}

export default Cell;
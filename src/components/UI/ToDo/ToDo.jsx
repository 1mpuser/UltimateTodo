import React from 'react';
import classes from './ToDo.module.css'
import DateFromDotOrColonFormat from '../../../scripts/DateFromDotOrColonFormat';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import takeADateFromPathname from '../../../scripts/takeADateFromPathname';
import classNames from 'classnames';

const ToDo = ({remove, elem, completed, setItemCompleted, editThisTodo, setEditElement, ...props}) => {
    const timeDate = DateFromDotOrColonFormat(props.time);
    const router = useHistory();
    const tmpDate = takeADateFromPathname(router.location.pathname);
    timeDate.setDate(tmpDate.getDate());
    timeDate.setMonth(tmpDate.getMonth());
    timeDate.setFullYear(tmpDate.getFullYear());
    const isItPastTime = new Date() > timeDate;
    return (
        <div className={classes.FormDiv}>
        <div className={classes.ToDoBorderDiv}>
            <div className={classes.ToDoContent}>
                <div className={classNames(classes.TimeDiv, isItPastTime && classes.TimeDivExpired)}>{props.time}</div>
                <button onClick={()=>{
                    setItemCompleted(elem);
                }}>{completed ? "Uncomplete" : "Complete"}</button>
                <strong className={completed ? classes.CompletedText : ''} style={{margin : "5px"}}>{props.text}</strong>
            </div>
            <div className={classes.ToDoButtonsDiv}>
                <button onClick={()=>{
                    editThisTodo();
                    setEditElement(elem);
                }}>Edit</button>
                <button onClick={()=>remove(elem)}>Delete</button>
                <button>Check Memo</button>
                
            </div>
        </div>
        </div>
    );
}

export default ToDo;
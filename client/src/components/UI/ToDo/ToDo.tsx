import React, {FC} from 'react';
import classes from './ToDo.module.css'
import DateFromDotOrColonFormat from '../../../scripts/DateFromDotOrColonFormat';
import takeADateFromPathname from '../../../scripts/takeADateFromPathname';
import classNames from 'classnames';
import { useHistory } from 'react-router';
import { ITodo, IToDoCallback } from '../../../interfaces/types';


interface ToDoProps {
    text : string
    time : string
    completed : boolean
    elem : ITodo
    remove : (arg : ITodo)=>void
    setItemCompleted : (arg : ITodo)=>void   
    setEditElement : (arg : ITodo)=>void
    editThisTodo : ()=>void
}



const ToDo : FC<ToDoProps> = ({remove, elem, completed, setItemCompleted, editThisTodo, setEditElement, text, time,...props}) => {
    const timeDate = DateFromDotOrColonFormat(time);
    const router = useHistory();
    const tmpDate = takeADateFromPathname(router.location.pathname);
    timeDate.setDate(tmpDate.getDate());
    timeDate.setMonth(tmpDate.getMonth());
    timeDate.setFullYear(tmpDate.getFullYear());
    const isItPastTime : boolean = new Date() > timeDate;
    return (
        <div className={classes.FormDiv}>
        <div className={classes.ToDoBorderDiv}>
            <div className={classes.ToDoContent}>
                <div className={classNames(classes.TimeDiv, isItPastTime && classes.TimeDivExpired)}>{time}</div>
                <button onClick={()=>{
                    setItemCompleted(elem);
                }}>{completed ? "Uncomplete" : "Complete"}</button>
                <strong className={completed ? classes.CompletedText : ''} style={{margin : "5px"}}>{text}</strong>
            </div>
            <div className={classes.ToDoButtonsDiv}>
                <button onClick={()=>{
                    setEditElement(elem);
                    editThisTodo();
                }}>Edit</button>
                <button onClick={()=>remove(elem)}>Delete</button>
                <button>Check Memo</button>
                
            </div>
        </div>
        </div>
    );
}

export default ToDo;
import React from 'react';
import DateFromDotOrColonFormat from '../../../scripts/DateFromDotOrColonFormat';
import classes from './ToDoForm.module.css';
const ToDoForm = ({textValue, setTextValue, pushTodo, dateValue, setDateValue,...props}) => {
    return (
        <div className={classes.mainDiv}>
            <input type="text" style={{width : "50px"}} value={dateValue} onChange = {(event)=>{
                const dateFromTargetValue = DateFromDotOrColonFormat(event.target.value);
                if (dateFromTargetValue instanceof Date) setDateValue(event.target.value);
            }}/>
            <input type="text" value={textValue} onChange={(event)=>setTextValue(event.target.value)}/>
            <button className={classes.button} onClick={()=>{
                if (pushTodo){
                    pushTodo(textValue);
                    setTextValue('');
                }
            }}>Set ToDo</button>
        </div>
    );
}

export default ToDoForm;
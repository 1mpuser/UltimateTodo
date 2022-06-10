import React from 'react';
import classes from './ToDoForm.module.css';
const ToDoForm = ({value, setValue, pushTodo,...props}) => {
    return (
        <div className={classes.mainDiv}>
            <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}/>
            <button className={classes.button} onClick={()=>{
                if (pushTodo){
                    pushTodo(value);
                    setValue('');
                }
            }}>Set ToDo</button>
        </div>
    );
}

export default ToDoForm;
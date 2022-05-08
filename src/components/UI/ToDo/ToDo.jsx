import React from 'react';
import classes from './ToDo.module.css'
const ToDo = ({remove, ...props}) => {
    return (
        <div className={classes.ToDoBorderDiv}>
            <div className={classes.ToDoContent}>
                <strong>{props.text}</strong>
            </div>
            <div className={classes.ToDoButtonsDiv}>
                <button>Edit</button>
                <button>Delete</button>
                <button>Check Memo</button>
            </div>
        </div>
    );
}

export default ToDo;
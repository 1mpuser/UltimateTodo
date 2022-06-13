import React from 'react';
import classes from './ToDoEditingForm.module.css';
const ToDoEditingForm = ({setEditStatus, changingElem, ...props}) => {
    return (
        <div className={classes.mainDiv}>
            <form onSubmit = {()=>{
                setEditStatus(false)
            }}>
                <input type="text" /> 
                <button>Change It</button>
                <div className={classes.TextAreaDiv}>
                    <p>Here u can write ur memo</p>
                    <textarea name="memo" cols="30" rows="10">(ง ͠° ͟ل͜ ͡°)ง</textarea>
                </div>
            </form>
        </div>
    );
}

export default ToDoEditingForm;
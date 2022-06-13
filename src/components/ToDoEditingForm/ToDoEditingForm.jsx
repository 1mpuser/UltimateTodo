import React ,{useState} from 'react';
import classes from './ToDoEditingForm.module.css';
const ToDoEditingForm = ({setEditStatus, changingElem, ...props}) => {
    const [InputText, setInputText] = useState(changingElem.text);
    const [TextAreaValue, setTextAreaValue] = useState(changingElem.memo)
    return (
        <div className={classes.mainDiv}>
            <form onSubmit = {()=>{
                setEditStatus(false)
            }}>
                <input type="text" value={InputText} onChange = {(event)=>setInputText(event.target.value)}/> 
                <button>Change It</button>
                <div className={classes.TextAreaDiv}>
                    <p>Here u can write ur memo</p>
                    <textarea name="memo" cols="30" rows="10" value={TextAreaValue} onChange = {(event)=>setTextAreaValue(event.target.value)}></textarea>
                </div>
            </form>
        </div>
    );
}

export default ToDoEditingForm;
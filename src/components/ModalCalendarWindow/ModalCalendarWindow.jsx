import React from 'react';
import Calendar from '../UI/Calendar/Calendar';
import classes from './ModalCalendarWindow.module.css';
const ModalCalendarWindow = ({status, setStatus}) => {
    let classArr = [classes.ModalWindow];
    if (status) classArr.push(classes.ModalWindowActive);
    else classArr = [classes.ModalWindow];
    return (
        <div className={classArr.join(' ')} onClick={()=>setStatus(false)}>
            <div className={classes.ModalWindow__content} onClick={(event) => event.stopPropagation()}>
                <Calendar takeAwayModalWindow = {setStatus}>
                </Calendar>
            </div>
        </div>
    );
}

export default ModalCalendarWindow;
import { nanoid } from 'nanoid';
import React from 'react';
import classes from './SendDataButton.module.css'
import getParentElementByChildId from '../../scripts/getParentElementByChildId';
const SendDataButton = ({children,logSetter, passSetter, login, password, mail, mailSetter, ...props}) => {
    const uniqueIdForButton = nanoid(23);
    return (
        <a className={classes.butt} id={uniqueIdForButton} onClick={()=>{
            console.log(login);
            console.log(password);
            if (mail) console.log(mail);
            logSetter('');
            passSetter('');
            if (mailSetter) mailSetter('');
        }} {...props}>{children}</a>
    );
}

export default SendDataButton;
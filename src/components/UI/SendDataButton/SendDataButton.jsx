import { nanoid } from 'nanoid';
import React from 'react';
import classes from './SendDataButton.module.css'
import asyncLoginHandler from '../../../scripts/JSONHandlers/asyncLoginHandler';
const SendDataButton = ({children, logSetter, passSetter, login, password, mail, mailSetter,AuthSetter,ContextLogSetter, wrongAnswerSetter,...props}) => {
    const uniqueIdForButton = nanoid(23);
    return (
        <a className={classes.butt} id={uniqueIdForButton} onClick={ async ()=>{
            if (mail) console.log(mail);
            if (mailSetter) mailSetter('');
            if (AuthSetter) {
                const array = await asyncLoginHandler(login, password);
                console.log('working');
                if (array[0]) {
                    AuthSetter(true);
                    ContextLogSetter(array[1]);
                    if (wrongAnswerSetter) wrongAnswerSetter(true)
                }
                else {
                    console.log('!');
                    if (wrongAnswerSetter) wrongAnswerSetter(false)
                }
            }
            
            logSetter('');
            passSetter('');
        }} {...props}>{children}</a>
    );
}

export default SendDataButton;
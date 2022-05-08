import { nanoid } from 'nanoid';
import React from 'react';
import classes from './SendDataButton.module.css'
import getParentElementByChildId from '../../scripts/getParentElementByChildId';
const SendDataButton = ({children, ...props}) => {
    const uniqueIdForButton = nanoid(23);
    return (
        <a className={classes.butt} id={uniqueIdForButton}   onClick={()=>{
            const parentForm =  getParentElementByChildId(uniqueIdForButton);
            parentForm.submit();
        }} {...props}>{children}</a>
    );
}

export default SendDataButton;
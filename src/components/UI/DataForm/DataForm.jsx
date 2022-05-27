import { nanoid } from 'nanoid';
import React from 'react';
import classes from './DataForm.module.css'
const DataForm = ({children, ...props}) => {
    const uniqueIdForForm = nanoid(22);
    return (
        <form id={uniqueIdForForm}  {...props} className={classes.form} onKeyDown={(event)=>{
            if (event.key === 'Enter'){
            const thisElement = document.getElementById(uniqueIdForForm);
            //thisElement.submit();
        }}}
        >
            {children}
        </form>
    );
}

export default DataForm;
import React from 'react';
import classes from './DivWithButton.module.css';
const DivWithButton = () => {
    return (
       <div className={classes.div}>
            <input className={classes.input} placeholder="lucasdebelder@imd.com" required="required"/>
            <button className={classes.button}><p className={classes.bold}>loop mee</p></button>
        </div>
    );
}

export default DivWithButton;
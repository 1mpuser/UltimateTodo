import React from 'react';
import classes from './ExitButton.module.css'
const ExitButton = () => {
    return (
        <div className={classes.div}>
            <button className={classes.button}>Exit</button>
        </div>
    );
}

export default ExitButton;
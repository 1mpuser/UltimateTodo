import React from 'react';
import classes from './DataInput.module.css'
const DataInput = (props) => {
    return <input className={classes.input} type="text" {...props}/>
}

export default DataInput;
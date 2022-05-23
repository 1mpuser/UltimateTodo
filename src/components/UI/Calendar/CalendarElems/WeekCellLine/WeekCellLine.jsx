import { nanoid } from 'nanoid';
import React from 'react';
import Cell from '../Cell/Cell';
import classes from './WeekCellLine.module.css';
const WeekCellLine = ({arr}) => {
    //expected props with array with numbers to map it with indexes
    const id = nanoid;
    console.log(arr);
    const arrOfCells = arr.map((item)=><Cell key={id()} date={item}>{item}</Cell>)
    return (
        <div className={classes.week}>
            {arrOfCells}
        </div>
    );
}

export default WeekCellLine;
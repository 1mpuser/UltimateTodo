import { nanoid } from 'nanoid';
import React from 'react';
import Cell from '../Cell/Cell';
import classes from './WeekCellLine.module.css';
const WeekCellLine = ({modalWindow ,arr, month, year, setContextFromCell}) => {
    //expected props with array with numbers to map it with indexes
    const id = nanoid;
    const arrOfCells = arr.map((item)=><Cell
    modalWindowFalse={modalWindow}
    onClick={()=>setContextFromCell(new Date(year, month, item))}
    key={id()} date={item} month={month} year={year}>{item}</Cell>)
    return (
        <div className={classes.week}>
            {arrOfCells}
        </div>
    );
}

export default WeekCellLine;
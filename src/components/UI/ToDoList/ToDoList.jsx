import { nanoid } from 'nanoid';
import React from 'react';
import ToDo from '../ToDo/ToDo';
import classes from './ToDoList.module.css';
const ToDoList = ({remove, objs}) => {
    const id = nanoid;
    const arr = objs.map((item)=>{
        return <ToDo key={id()}  time = {item.time} text = {item.body}/>
    })
    return (
        <div className={classes.ItemDiv}>
            {arr.length === 0 && <h1>Тут ничего нет</h1>}
            {arr.length !== 0 && arr}
        </div>
    );
}

export default ToDoList;
import { nanoid } from 'nanoid';
import React from 'react';
import ToDo from '../ToDo/ToDo';
import classes from './ToDoList.module.css';
const ToDoList = ({remove, objs, complete, setEditStatus, setEdElement}) => {
    const id = nanoid;
    const arr = objs.map((item)=>{
        return <ToDo key={id()} editThisTodo = {setEditStatus} setEditElement = {setEdElement} remove={remove} elem={item} time = {item.time} text = {item.text} completed={item.completed} setItemCompleted= {complete}/>
    })
    return (
            <div className={classes.ItemsDiv}>
                {arr.length === 0 && <h1>Тут ничего нет</h1>}
                {arr.length !== 0 && arr}
            </div>
    );
}

export default ToDoList;
import { nanoid } from 'nanoid';
import React from 'react';
import { jsonLike } from '../../../SomeFilesWhichIWouldGetFromBackend/LikeJsonClientProfile';
import ToDo from '../ToDo/ToDo';
const ToDoList = ({remove}) => {
    const id = nanoid;
    const arr = jsonLike.map((item, index)=>{
        return <ToDo key={id()}/>
    })
    return (
        <></>
    );
}

export default ToDoList;
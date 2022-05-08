import React, { useState, useEffect } from 'react';
import ToDo from '../../components/UI/ToDo/ToDo';
import axios from 'axios';
import useFetching from '../../hooks/useFetching';
import Loader from '../../components/UI/Loader/Loader';
import classes from './TodoPage.module.css'
import { nanoid } from 'nanoid';
const TodoPage = () => {
    const idGenerateFunction  = nanoid;
    const [responceArr, setResponceArr] = useState([]);
    const [fetching, isLoadingDataFromAxios, error] = useFetching(async()=>{
         const responce = await axios.get('https://jsonplaceholder.typicode.com/todos');
         setResponceArr(responce.data);
    })
    useEffect(() => {
		async function fet() {
			await fetching();
		}
		fet();
	}, []);
    return (
        <div className={classes.mainDiv}>
            {isLoadingDataFromAxios ?
            <Loader/> 
            : 
            responceArr.map((item)=><ToDo key={idGenerateFunction()} text={item.title}/>)}

        
        </div>
    );
}

export default TodoPage;
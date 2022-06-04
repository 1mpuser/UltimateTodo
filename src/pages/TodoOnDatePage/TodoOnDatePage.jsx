import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import getDateFromDotFormat from '../../scripts/getDateFromDotFormat';
import { englishMonths } from '../../constants/EnglishMonths';
import classes from './TodoOnDatePage.module.css';
import MyInput from '../../components/UI/LabelInput/MyInput';
import { todayTodoArr } from '../../data/todayToDo';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import ToDoList from '../../components/UI/ToDoList/ToDoList';
import ServerHelper from '../../scripts/ServerHelper';
import useFetching from '../../hooks/useFetching';
import Loader from '../../components/UI/Loader/Loader';

const TodoOnDatePage = () => {
    //month is extended for client comfort
    const id = nanoid;
    const nowHour = 12;
    const [toDoArr, setToDoArr] = useState([]);
    const router = useHistory();
    const neededDate = getDateFromDotFormat( router.location.pathname.split('/')[2]);
    const [fetching, isLoading, error] = useFetching(async()=>{
        const tmpArr = await ServerHelper.fetchTodos(10, 1);
        const arr = tmpArr.map((item, index)=>{
            item.time = `${nowHour + index}:00`;
            return item;
        });
        setToDoArr(arr);
    });
    useEffect(() => {
		async function fet() {
			await fetching();
		}
		fet();
	}, []);
    
    return (
        <div className={classes.mainDiv}>
            <h1>ToDo page on {neededDate.getDate() + ' ' + englishMonths[neededDate.getMonth()] + ' ' +  neededDate.getFullYear()}</h1>
            {isLoading && <div className={classes.LoaderDiv}><Loader/></div>}
            
            {!isLoading && <>
                                <div>
                                    <MyInput placeholder = "Search Todos by name"/>
                                </div>
                                <ToDoList 
                                remove={(removeElem) => setToDoArr(toDoArr.filter((item) => item !== removeElem))}
                        objs={toDoArr}
                        />
            </>}
        </div>
        
    );
}

export default TodoOnDatePage;
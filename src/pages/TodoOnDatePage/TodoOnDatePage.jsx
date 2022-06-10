import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import getDateFromDotFormat from '../../scripts/getDateFromDotFormat';
import { englishMonths } from '../../constants/EnglishMonths';
import classes from './TodoOnDatePage.module.css';
import MyInput from '../../components/UI/LabelInput/MyInput';
import MySelect from '../../components/UI/MySelect/MySelect';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import ToDoList from '../../components/UI/ToDoList/ToDoList';
import ServerHelper from '../../scripts/ServerHelper';
import useFetching from '../../hooks/useFetching';
import Loader from '../../components/UI/Loader/Loader';
import TodoFilter from '../../components/ToDoFilter';
import { useSortedTodos } from '../../hooks/useSortedTodos';
import ToDoForm from '../../components/UI/ToDoForm/ToDoForm';
import getNowTimeInTwoPoints from '../../scripts/getNowTimeInTwoPoints';

const TodoOnDatePage = () => {
    //month is extended for 1 for client comfort
    const id = nanoid;
    const nowHour = 12;
    const [toDoArr, setToDoArr] = useState([]);
    const [todoFormInputValue, setTodoFormValue] = useState('');
    const router = useHistory();
    const neededDate = getDateFromDotFormat(router.location.pathname.split('/')[2]);
    const [fetching, isLoading, error] = useFetching(async()=>{
        const tmpArr = await ServerHelper.fetchTodos(10, 1);
        const arr = tmpArr.map((item, index)=>{
            item.time = `${nowHour + index}:00`;
            return item;
        });
        setToDoArr(arr);
    });

    const [isEditing, setEditingStatus] = useState(false);
    
    const [options, setOptions] = useState([
    {
        value : "time", 
        name : "On time"
    },
    {
        value : "title",
        name : "On text"
    }
]);
    useEffect(() => {
		async function fet() {
			await fetching();
		}
		fet();
	}, []);
    const [sortType, setSortType] = useState('');

    

    const sortedContent = useMemo(()=>useSortedTodos(toDoArr, sortType), [toDoArr, sortType]);
    return (
        <div className={classes.mainDiv}>
            <h1>ToDo page on {neededDate.getDate() + ' ' + englishMonths[neededDate.getMonth()] + ' ' +  neededDate.getFullYear()}</h1>
            <div className={classes.ItemsDiv}>
                <ToDoForm value={todoFormInputValue} setValue = {setTodoFormValue} 
                pushTodo={(string)=>{
                    const tmpArr = [...toDoArr];
                    tmpArr.push({
                        time : getNowTimeInTwoPoints(),
                        body : string
                    });
                    setToDoArr(tmpArr);
                }}
                />
            </div>
            {isLoading && <div className={classes.LoaderDiv}><Loader/></div>}
            {!isLoading && <>
                                <div>
                                    <TodoFilter
                                        options={[...options]}
                                        returnSortArr={(sort) => setSortType(sort)}
                                    />
                                    {/* <MyInput placeholder = "Search Todos by name"/>      */}
                                </div>
                                <ToDoList 
                                    remove={(removeElem) => setToDoArr(toDoArr.filter((item) => item !== removeElem))}
                                    objs={sortedContent}
                                />
                            </>
            }
        </div>
        
    );
}

export default TodoOnDatePage;
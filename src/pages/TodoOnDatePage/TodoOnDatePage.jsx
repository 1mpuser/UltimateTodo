import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import getDateFromDotFormat from '../../scripts/getDateFromDotFormat';
import { englishMonths } from '../../constants/EnglishMonths';
import classes from './TodoOnDatePage.module.css';
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
import ToDoEditingForm from '../../components/ToDoEditingForm/ToDoEditingForm';

const TodoOnDatePage = () => {
    //month is extended on 1 for client comfort
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

    const [isEditing, setEditingStatus] = useState<Boolean>(false);
    const [editingElement, setEditingElement] = useState({})
    
    const [options, setOptions] = useState([
    {
        value : "time", 
        name : "On time"
    },
    {
        value : "text",
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
                        text : string
                    });
                    setToDoArr(tmpArr);
                }}
                />
            </div>
            {isLoading && <div
					        style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
					            <Loader />
				          </div>
            }
            {!isLoading && <>
                                <div>
                                    <TodoFilter
                                        options={[...options]}
                                        returnSortArr={(sort) => setSortType(sort)}/>
                                    {/* <MyInput placeholder = "Search Todos by name"/>      */}
                                </div>
                            {isEditing ? 
                            <>
                            <ToDoEditingForm />
                            </>
                                :
                                <>
                                <ToDoList 
                                    remove={(removeElem) => setToDoArr(toDoArr.filter((item) => item !== removeElem))}
                                    objs={sortedContent}
                                    complete = {(completeElem)=>{
                                        setToDoArr(toDoArr.map((item)=>{
                                            if (item == completeElem) {
                                                item.completed = !item.completed
                                            }
                                            return item
                                        }))
                                    }}
                                    setEditStatus = {()=>setEditingStatus(true)}
                                    setEdElem = {(elem)=>{
                                        setEditingElement(elem);
                                    }}     
                                />
                                </>}
                            </>
            }
        </div>
        
    );
}

export default TodoOnDatePage;
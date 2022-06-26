import React, { FC, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';
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
import setStringWithNilFromNumber from '../../scripts/setStringWithNilFromNumber';
import { ITodo, ISortOption, IEmptyObject } from '../../interfaces/types';

const TodoOnDatePage : FC = () => {
    //month is extended on 1 for client comfort
    const id = nanoid;
    const nowDate : Date = new Date();
    const nowHour : number = 12;
    const [toDoArr, setToDoArr] = useState<ITodo[]>([]);
    const [todoFormTextInputValue, setTodoFormTextInputValue] = useState('');
    const [todoFormTimeInputValue, setTodoFormTimeInputValue] = useState(`${setStringWithNilFromNumber(nowDate.getHours())}:${setStringWithNilFromNumber(nowDate.getMinutes())}`)
    const router = useHistory();
    const neededDate : Date = getDateFromDotFormat(router.location.pathname.split('/')[2]);
    const [fetching, isLoading, error] = useFetching(async()=>{
        const tmpArr = await ServerHelper.fetchTodos(10, 1);
        const arr = tmpArr.map((item, index)=>{
            item.time = `${nowHour + index}:00`;
            return item;
        });
        setToDoArr(arr);
    });

    const [isEditing, setEditingStatus] = useState<boolean>(false);
    const [editingElement, setEditingElement] = useState<ITodo >({
        time : '',
        completed : false,
        text : ''
    }) //supposed that time is always filled by smth
    useEffect(()=>{
        let neededIndex : number = -1;
        if (!editingElement.time) {
            toDoArr.map((item, index)=>{
                if (item == editingElement) neededIndex = index;
            })
            const tmpArr = [...toDoArr.slice(0, neededIndex), editingElement, ...toDoArr.slice(neededIndex + 1)]
            setToDoArr(tmpArr);
        }
    }, [editingElement, isEditing])

    const [options, setOptions] = useState<ISortOption[]>([
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
    const [sortType, setSortType] = useState<string>('');
    const sortedContent = useMemo(()=>useSortedTodos(toDoArr, sortType), [toDoArr, sortType]);
    
    
    
    
    
    return (
        <div className={classes.mainDiv}>
            <h1>ToDo page on {neededDate.getDate() + ' ' + englishMonths[neededDate.getMonth()] + ' ' +  neededDate.getFullYear()}</h1>
            <div className={classes.ItemsDiv}>
                <ToDoForm textValue={todoFormTextInputValue} setTextValue = {setTodoFormTextInputValue} 
                dateValue = {todoFormTimeInputValue} setDateValue = {setTodoFormTimeInputValue}
                pushTodo={(string : string)=>{
                    const tmpArr : ITodo[] = [...toDoArr];
                    tmpArr.push({
                        time : todoFormTimeInputValue,
                        text : string,
                        completed : false
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
                                        returnSortArr={(sort : string) => setSortType(sort)}/>
                                    {/* <MyInput placeholder = "Search Todos by name"/>      */}
                                </div>
                            {isEditing ? 
                                <>
                                    <ToDoEditingForm changingElem = {editingElement} setEditStatus = {()=>setEditingStatus(false)}/>
                                </>
                                :
                                <>
                                <ToDoList 
                                    remove={(removeElem : ITodo) => setToDoArr(toDoArr.filter((item) => item !== removeElem))}
                                    objs={sortedContent}
                                    complete = {(completeElem : ITodo)=>{
                                        setToDoArr(toDoArr.map((item)=>{
                                            if (item == completeElem) {
                                                item.completed = !item.completed
                                            }
                                            return item
                                        }))
                                    }}
                                    setEditStatus = {()=>setEditingStatus(true)}
                                    setEdElement = {(elem : ITodo)=>setEditingElement(elem)}     
                                />
                                </>
                            }
                            </>
            }
        </div>
        
    );
}

export default TodoOnDatePage;
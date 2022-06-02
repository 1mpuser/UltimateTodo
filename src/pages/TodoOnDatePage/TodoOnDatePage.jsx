import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import getDateFromDotFormat from '../../scripts/getDateFromDotFormat';
import { englishMonths } from '../../constants/EnglishMonths';
import ToDo from '../../components/UI/ToDo/ToDo';
import classes from './TodoOnDatePage.module.css';
import MyInput from '../../components/UI/LabelInput/MyInput';

const TodoOnDatePage = () => {
    //month is extended for client comfort
    const router = useHistory();
    const neededDate = getDateFromDotFormat( router.location.pathname.split('/')[2]);
    return (
        <div className={classes.mainDiv}>
            <h1>ToDo page on {neededDate.getDate() + ' ' + englishMonths[neededDate.getMonth()] + ' ' +  neededDate.getFullYear()}</h1>
            <div>
                <MyInput placeholder = "Search Todos by name"/>
            </div>
            <div className={classes.ItemsDiv}>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
            </div>
        </div>
        
    );
}

export default TodoOnDatePage;
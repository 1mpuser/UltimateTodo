import React, {useContext, useState} from 'react';
import classes from './HomePage.module.css';
import CheckTodoButton from '../../components/UI/MyButton/CheckTodoButton';
import { DateContext } from '../../context/DateContext';
import isItTodayDate from '../../scripts/isItTodayDate';
import ModalCalendarWindow from '../../components/ModalCalendarWindow/ModalCalendarWindow';
import { useHistory } from 'react-router-dom';
const HomePage = () => {
    //const history = useHistory();
    // /console.log(history);
    const {date} = useContext(DateContext);
    const router = useHistory();
    // const strWithId = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
    // console.log(strWithId);
    const [visibleModal, setVisibleModalStatus] = useState(false);
    const todayStr = 'Check Today Todo';
    const strWithDate = `Check Todo on ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    return (
       <>
            <ModalCalendarWindow 
            status={visibleModal} 
            setStatus={()=>setVisibleModalStatus(false)}
            >
            </ModalCalendarWindow>
            <div className={classes.mainDiv}>
                <div className={classes.optionalDiv && classes.firstOptionalDiv}>This is HomePage</div>
                <div className={classes.optionalDiv}>
                    <CheckTodoButton onClick={()=>{
                        router.replace(`/todos/${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
                    }}>
                        {isItTodayDate(date) ? todayStr : strWithDate}
                    </CheckTodoButton></div>
                <br /><br /><br />
                <div className={classes.optionalDiv}>
                    <CheckTodoButton onClick = {()=>setVisibleModalStatus(true)}>Set Todo On Date</CheckTodoButton>
                </div>
            </div>
        </>
    );
}

export default HomePage;
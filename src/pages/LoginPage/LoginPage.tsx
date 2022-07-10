import React, { useState, useContext, FC } from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';
import SendDataButton from '../../components/UI/SendDataButton/SendDataButton';
import DataForm from '../../components/UI/DataForm/DataForm';
import { useDispatch } from 'react-redux';
import { logination } from '../../store/actionCreators/userActionCreator';
import asyncLoginHandler from '../../scripts/JSONHandlers/asyncLoginHandler';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const LoginPage : FC = () => {
    const [tmpLogin, setTmpLogin] = useState('');
    const [password, setPassword] = useState('');
    // const { isAuth, setAuthStatus, login, setLogin } = useContext(AuthContext);
    //we replace AuthContext with redux
    const dispatch = useDispatch();
    const {isAuth}  = useTypedSelector(state => state.user)
    const [isItGoodAttempt, setisItGoodAttempt] = useState(true);
    console.log(isItGoodAttempt);
    return (
        <div>
            {isAuth ? <h1>U've been logged in!</h1> : <h1>Login page</h1> }
            {!isAuth && <DataForm>
                            <DataInput type="text" placeholder='Enter ur login' value={tmpLogin} onChange={(event : any)=> setTmpLogin(event.target.value)}/>
                            <DataInput type="text" placeholder='Enter ur password' value={password} onChange={(event : any)=>setPassword(event.target.value)}/>
                            <div>
                            <SendDataButton onClick = {async ()=>{
                                const array = await asyncLoginHandler(tmpLogin, password);
                                if (array[0]) {
                                    dispatch(logination(tmpLogin));
                                    setisItGoodAttempt(true);
                                }
                                else setisItGoodAttempt(false);
                                setTmpLogin('');
                                setPassword('')
                            }}
                                >
                                    Ok
                            </SendDataButton>
                            </div>
                        </DataForm>}
            {!isItGoodAttempt && <h1 style={{backgroundColor : "red"}}>Ur attempt is wrong</h1>}
        </div>
    );
}

export default LoginPage;
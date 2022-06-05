import React, { useState, useContext } from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';
import SendDataButton from '../../components/UI/SendDataButton/SendDataButton';
import DataForm from '../../components/UI/DataForm/DataForm';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
const LoginPage = () => {
    const [tmpLogin, setTmpLogin] = useState('');
    const [password, setPassword] = useState('');
    const { isAuth, setAuthStatus, login, setLogin } = useContext(AuthContext);
    return (
        <div>
            {isAuth ? <h1>U've been logged in!</h1> : <h1>Login page</h1> }
            {!isAuth && <DataForm>
                            <DataInput type="text" placeholder='Enter ur login' value={tmpLogin} onChange={(event)=>setTmpLogin(event.target.value)}/>
                            <DataInput type="text" placeholder='Enter ur password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                            <div>
                            <SendDataButton
                                login = {tmpLogin}
                                password = {password}
                                passSetter = {(word) => setPassword(word)}  
                                logSetter = {(word)=>setTmpLogin(word)}
                                AuthSetter = {(word) => setAuthStatus(word)}
                                ContextLogSetter = {(word) => setLogin(word)}
                                >
                                    Ok
                            </SendDataButton>
                            </div>
                        </DataForm>}
        </div>
    );
}

export default LoginPage;
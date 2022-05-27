import React, { useState } from 'react';
import DataInput from '../../components/UI/DataInput/DataInput';
import SendDataButton from '../../components/UI/SendDataButton/SendDataButton';
import DataForm from '../../components/UI/DataForm/DataForm';
const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>Login page</h1>
             <DataForm onSubmit = {(event)=> {
                 event.preventDefault();
                 console.log(login);
                 console.log(password);
                 setLogin('');
                 setPassword('');
             }}>
                <DataInput type="text" placeholder='Enter ur login' value={login} onChange={(event)=>setLogin(event.target.value)}/>
                <DataInput type="text" placeholder='Enter ur password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <SendDataButton
                    login = {login}
                    password = {password}
                    passSetter = {(word) => setPassword(word)}  
                    logSetter = {(word)=>setLogin(word)}>
                        Ok
                </SendDataButton>
            </DataForm>
        </div>
    );
}

export default LoginPage;
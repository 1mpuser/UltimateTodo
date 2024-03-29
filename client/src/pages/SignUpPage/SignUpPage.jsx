import React, { useState } from 'react';
import classes from './SignUpPage.module.css'
import SendDataButton from '../../components/UI/SendDataButton/SendDataButton';
import DataInput from '../../components/UI/DataInput/DataInput';
import DataForm from '../../components/UI/DataForm/DataForm';
const SignUpPage = () => {
    const [login, setLogin] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={classes.mainDiv}>
            <div className={classes.centredDiv}>
            <h1>Here u can sign up</h1>
            <DataForm>
                <DataInput style={{width: '40%'}} type="text" placeholder='Enter ur login' value={login} onChange={(event)=>setLogin(event.target.value)}/>
                <br />
                <DataInput style={{width: '40%'}} type="text" placeholder='Enter ur mail' value={mail} onChange={(event)=>setMail(event.target.value)}/>
                <br />
                <DataInput style={{width: '40%'}} type="text" placeholder='Enter ur password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <br />
                <SendDataButton
                    login = {login}
                    password = {password}
                    mail={mail}
                    passSetter = {(word) => setPassword(word)}  
                    logSetter = {(word)=>setLogin(word)}
                    mailSetter = {(word)=>setMail(word)}
                    >
                        Send ur data
                </SendDataButton>
            </DataForm>
            </div>
        </div>
    );
}


export default SignUpPage;
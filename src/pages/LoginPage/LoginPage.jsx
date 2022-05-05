import React, { useState } from 'react';
const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <h1>Login page</h1>
            {/* <form>
                <input type="text" placeholder='Enter ur login' value={login} onChange={(login)=>setLogin(login)}/>
                <input type="text" placeholder='Enter ur password' value={password} onChange={(password)=>setPassword(password)}/>
                <button>Ok</button>
            </form> */}
        </>
    );
}

export default LoginPage;
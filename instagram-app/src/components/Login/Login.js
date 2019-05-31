import React from 'react';

import './Login.css';


const Login = props => {
    return (
        <div className='login-container'>
            <form onSubmit={props.loginOnSubmit}>
                <input 
                    type='text'
                    name='username'
                    value={props.username}
                    autoComplete='off'
                    placeholder='username'
                    onChange={props.updateCredentials}
                />
                <input 
                    type='password'
                    name='password'
                    value={props.password}
                    autoComplete='off'
                    placeholder='password'
                    onChange={props.updateCredentials}
                />
                <button onClick={props.loginOnSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;
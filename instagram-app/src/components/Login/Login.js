import React from 'react';

const Login = props => {
    return (
        <div className='login-container'>
            <form>
                <input 
                    type='text'
                    name='username'
                />
                <input 
                    type='text'
                    name='password'
                />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
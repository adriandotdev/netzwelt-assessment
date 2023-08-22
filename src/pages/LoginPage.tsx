import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState<boolean>(() => false);
    const [username, setUsername] = useState<string>(() => '');
    const [password, setPassword] = useState<string>(() => '');
    const [isError, setError] = useState<boolean>(() => false);

    const login = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await axios.post('http://localhost:3001/account/login', { username, password }, { withCredentials: true });

            if (response.status >= 200 && response.status <= 206) {

                setLoading(false);
                navigate('/home');
            }
        }
        catch (err) {
            setLoading(false);
            setError(true);

            setTimeout(() => {

                setError(false);
            }, 2000);
        }
    }
    return (
        <main className='login-page container-fluid row justify-content-center align-items-center'>

            <div className='form-wrapper'>

                <h5>Login</h5>
                <form onSubmit={login} className='d-flex flex-column'>

                    <div>
                        <label htmlFor="username" className='form-label'>Username</label>
                        <input onChange={(e) => setUsername(e.currentTarget.value)} className='form-control' type="text" name="username" id="username" />
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input onChange={(e) => setPassword(e.currentTarget.value)} className='form-control' type="password" name="password" id="password" />
                    </div>

                    <button className="btn btn-primary mt-3 align-self-end d-flex align-items-center gap-3">
                        <span>{isLoading ? 'Please Wait' : 'Login'}</span>
                        {isLoading && <div className="spinner-grow spinner-grow-sm text-info" role="status">
                            <span className="visually-hidden">Login</span>
                        </div>}
                    </button>
                </form>
                {isError && <div className="alert alert-danger mt-3" role="alert">
                    Invalid credentials. Please check your username and password.
                </div>}
            </div>
        </main>
    )
}

export default LoginPage
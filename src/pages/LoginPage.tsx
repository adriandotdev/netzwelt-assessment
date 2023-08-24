import axios from 'axios';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useNavigate, Navigate, useLoaderData } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();
    const isLoggedIn = useLoaderData();

    const [isLoading, setLoading] = useState<boolean>(() => false);
    const [username, setUsername] = useState<string>(() => '');
    const [password, setPassword] = useState<string>(() => '');
    const [isError, setError] = useState<boolean>(() => false);

    const login = async (e: any) => {

        e.preventDefault();

        if (!username || !password) {
            alert("Please provide a username and password.");
            return;
        }

        setLoading(true);

        try {

            const response = await axios.post(`${import.meta.env.PROD ? import.meta.env.VITE_PROD_LINK : import.meta.env.VITE_DEV_LINK}/account/login`, { username, password }, { withCredentials: true });

            if (response.status >= 200 && response.status <= 206) {

                setLoading(false);
                navigate('/home/index');
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

    // Redirect if authenticated
    if (isLoggedIn) {
        return <Navigate to="/home/index" replace={true} />
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

export const VerifierLoader = async () => {

    try {

        const response = await axios.post(`${import.meta.env.PROD ? import.meta.env.VITE_PROD_LINK : import.meta.env.VITE_DEV_LINK}/api/verify`, {}, { withCredentials: true });

        return response.status;
    }
    catch (err) {

        return null;
    }
}

export default LoginPage
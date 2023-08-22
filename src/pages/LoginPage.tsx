import React from 'react'

function LoginPage() {
    return (
        <main className='login-page container-fluid row justify-content-center align-items-center'>

            <div className='form-wrapper'>

                <h5>Login</h5>
                <form action="" className='d-flex flex-column'>

                    <div>
                        <label htmlFor="username" className='form-label'>Username</label>
                        <input className='form-control' type="text" name="username" id="username" />
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input className='form-control' type="text" name="password" id="password" />
                    </div>

                    <button className="btn btn-primary mt-3 align-self-end">Login</button>
                </form>
            </div>
        </main>
    )
}

export default LoginPage
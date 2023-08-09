import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { useUserContext } from '../context/userContext'
const LogIn = () => {

    const { logIn } = useUserContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate('/home');
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div
                className='container-fluid mt-5 d-flex flex-column gap-3 justify-content-center align-items-center text-center'
                style={{ border: '1px solid black' }}>
                <h3>React Firebase Authentication System</h3>
                <div className='p-4' style={{ border: '2px solid blue' }}>
                    <h5 className='text-uppercase mb-4'>Login page</h5>
                    {
                        error && <div className='alert alert-danger' role='alert'>{error}</div>
                    }
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mt-3">
                            <input type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary px-5 mt-3">Submit</button>
                    </form>
                    <GoogleButton className='ms-3 mt-3' />
                    <div className='mt-3'>Don't have an account?&nbsp;
                        <NavLink to='/signup' ><span>Signup</span></NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LogIn

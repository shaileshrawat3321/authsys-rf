import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/userContext'

const Home = () => {
    const { user, logOut } = useUserContext();
    const [error, setError] = useState('');
    const handleLogOut = async () => {
        setError('');
        try {
            await logOut()
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div
                className='container-fluid mt-5 d-flex flex-column gap-4 justify-content-center align-items-center text-center'
                style={{ border: '1px solid black' }}>
                <h3>React Firebase Authentication System</h3>
                <div className='p-4' style={{ border: '2px solid blue' }}>
                    {
                        error && <div className="alert alert-danger" role='alert'>{error}</div>
                    }
                    <h4 className='text-uppercase mb-3'>Homepage</h4>
                    <h5>
                        &#128591; Welcome &#128591;
                    </h5>
                    <h5>{user && user.email}</h5>
                    <NavLink to='/'>
                        <button type="submit"
                            className="btn btn-primary px-5 mt-3"
                            onClick={handleLogOut}
                        >LOGOUT</button>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Home

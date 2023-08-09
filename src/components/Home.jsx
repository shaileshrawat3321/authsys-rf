import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <div
                className='container-fluid mt-5 d-flex flex-column gap-4 justify-content-center align-items-center text-center'
                style={{ border: '1px solid black' }}>
                <h3>React Firebase Authentication System</h3>

                <div className='p-4' style={{ border: '2px solid blue' }}>
                    <h4>
                        Welcome User
                    </h4>
                    <NavLink to='/'>
                        <button type="submit" className="btn btn-primary px-5 mt-3">LOGOUT</button>
                    </NavLink>
                </div>

            </div>
        </>
    )
}

export default Home

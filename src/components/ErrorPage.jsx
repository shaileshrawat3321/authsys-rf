import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-3'>
            <h2> &#9888;&#65039; Error 404!!!</h2>
            <p className=''>Go back to the login page</p>
            <NavLink to='/'>
                <button type='button' className='btn btn-danger'>GO BACK</button>
            </NavLink>
        </div>
    )
}

export default ErrorPage

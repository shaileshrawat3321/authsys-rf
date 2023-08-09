import React from 'react'
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <div
        className='container-fluid mt-5 d-flex flex-column gap-4 justify-content-center align-items-center text-center' 
        style={{ border: '1px solid black' }}>
        <h3>React Firebase Authentication System</h3>

        <div className='p-4' style={{ border: '2px solid blue' }}>
          <form>
            <div className="mb-3">
              <input type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder='Enter your email'
              />
            </div>

            <div className="mt-3">
              <input type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder='Create your password'
              />
            </div>
            <button type="submit" className="btn btn-primary px-5 mt-3">Submit</button>
          </form>
          
          <div className='mt-3'>Already have an account?&nbsp;
            <NavLink to='/'><span>Login</span></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;

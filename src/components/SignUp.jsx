import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext'

const SignUp = () => {

  const { signUp } = useUserContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/home')
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div
        className='container-fluid mt-5 d-flex flex-column gap-2 fw-bold justify-content-center align-items-center text-center'
      >
        <h3>React Firebase Authentication System</h3>
        <div className='p-4' style={{border: '2px solid black'}}>
          <h5 className='text-uppercase mb-4'>signup page</h5>
          <form onSubmit={handleSubmit}>
            {
              error && <div className='alert alert-danger mb-3' role='alert'>{error}</div>
            }
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
                placeholder='Create your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

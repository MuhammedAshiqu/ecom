import React from 'react'
import './Signup.scss'

function Signup() {
  return (
    <div className='signup'>
        <div className='signup-wrapper'>
            <h3>Welcome</h3>
            <p>TO THE PRODUCTS AND SERVICES</p>
        </div>
        <form className='signup-form'>
            <input type="text" placeholder='username' />
            <input type="text" placeholder='email' />
            <input type="text" placeholder='address' />
            <input type="number" placeholder='phonne number' />
            <input type="password" placeholder='password' />
            
            <button>Signup</button>
            <p className='signup-form-bottontext'>have an account? <span>Signin</span></p>
        </form>
    </div>
  )
}

export default Signup
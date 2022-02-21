import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div className='login'>
        <div className='login-wrapper'>
            <h3>Welcome Back</h3>
            <p>please signin to continue</p>
        </div>
        <form className='login-form'>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <p>Forgot your password?</p>
            <button>Signin</button>
            <p className='login-form-bottontext'>Don't have an account? <span>Signup</span></p>
        </form>
    </div>
  )
}

export default Login
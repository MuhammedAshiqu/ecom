import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.scss'

function Navbar2() {
  return (
    <div className='navbar2'>
      <div className='navbar2__left'>
        <Link to='/service'> <button>Services</button></Link>
      </div>
      <div className='navbar2__right'>
        <Link to='/add-prod'> <button>Create Products</button></Link>
        <Link to='/manage-prod'>  <button>Manage Products</button></Link>
      </div>
    </div>
  )
}

export default Navbar2
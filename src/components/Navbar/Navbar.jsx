import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

function Navbar () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='navbar'>
        <div>
            <Link to='/'><img src="C:\Users\user\Downloads\logo.png" alt="" /></Link>
        </div>
        <div className='navbar-nav'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/single-product'><li>Products</li></Link>
               <Link to='footer'> <li>Contact</li></Link>
                <Link to='/cart'><li>Cart</li></Link>
                <li>
                     <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="" onMouseOver={() => {
                         setIsSidebarOpen(!isSidebarOpen)
                     }} />
                     {isSidebarOpen && (
                         <div className='navbar-nav-dropdown'>
                         <Link to='/login'><button>Login</button></Link>
                        <Link to='/signup'><button>Signup</button></Link>
                      </div>
                     )}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
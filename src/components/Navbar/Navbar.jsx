import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

function Navbar () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='navbar'>
        <div>
            <Link to='/'><h1>RENOVATE</h1></Link>
        </div>
        <div className='navbar-nav'>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
                <li>
                     <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="" onClick={() => {
                         setIsSidebarOpen(!isSidebarOpen)
                     }} />
                     {isSidebarOpen && (
                         <div className='navbar-nav-dropdown'>
                        <Link to='/signup'><button>Signup</button></Link>
                         <Link to='/login'><button>Login</button></Link>
                      </div>
                     )}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
import React from 'react'

import './Navbar2.scss'

function Navbar2() {
  return (
    <div className='navbar2'>
        <div className='navbar2__left'>
            <button>Services</button>
        </div>
        <div className='navbar2__right'>
            <button>Manage Products</button>
            <button>Create Products</button>
        </div>
    </div>
  )
}

export default Navbar2
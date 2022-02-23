import React from 'react'
import './ManageProd.css'

function ManageProd() {
  return (
    <div>
         <div className='manage-prod'>
        <div className='manage-prod-wrapper'>
            <h3>Manage Product</h3>
        </div>
        <form className='manage-prod-form'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Catergory' />
            <input type="text" placeholder='Descriprion' />
            <input type="number" placeholder='Price' />
            <input type="file" placeholder='.jpeg' />
            <button>Edit Product</button>
        </form>
    </div>
    </div>
  )
}

export default ManageProd
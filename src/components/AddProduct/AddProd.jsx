import React from 'react'
import './AddProd.css'

function AddProd() {
  return (
    <div>
         <div className='addprod'>
        <div className='addprod-wrapper'>
            <h3>Add Product</h3>
        </div>
        <form className='addprod-form'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Catergory' />
            <input type="text" placeholder='Descriprion' />
            <input type="number" placeholder='Price' />
            <input type="file" placeholder='.jpeg' />
            <button >Add Product</button>
        </form>
    </div>
    </div>
  )
}

export default AddProd
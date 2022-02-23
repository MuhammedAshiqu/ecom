import React from 'react'
import './Cart.scss'
function Cart() {
    return (
        <div>
            <div className='body'>
                <div className="Cart-Container">

                    <div className='Header'>
                        <h3 className='Heading'>Shopping Cart</h3>
                        <h5 className='Action'>Remove all</h5>
                    </div>
                    <div className='Cart-Items'>
                        <div className='image-box'>
                            <img src='https://th.bing.com/th/id/OIP.HEoEryRqZu3rxrBWFOUB4AHaJD?pid=ImgDet&rs=1' style={{ height: '100px' }} />
                        </div>
                        <div className='about'>
                            <h1 className='title' >Apple </h1>
                            <h3 className='subtitle' style={{ paddingTop: '1em' }}>250ml</h3>
                            <img src='https://clipground.com/images/veg-logo-png-6.png' style={{ height: '30px', paddingTop: '.3em' }} />
                        </div>

                        <div className='counter'>
                            <div className='btn'>+</div>
                            <div className='count'>2</div>
                            <div className='btn'>-</div>

                        </div>
                        <div className='prices'>
                            <div className='amount'>$2.99</div>
                            <div className='save'><u>Save for later</u></div>
                            <div className='remove'><u>Remove</u></div>
                        </div>
                    </div >

                    {/* item 2 */}

                    <div className='Cart-Items'>
                        <div className='image-box'>
                            <img src='https://th.bing.com/th/id/OIP.HEoEryRqZu3rxrBWFOUB4AHaJD?pid=ImgDet&rs=1' style={{ height: '100px' }} />
                        </div>
                        <div className='about'>
                            <h1 className='title' >Apple</h1>
                            <h3 className='subtitle' style={{ paddingTop: '1em' }}>250ml</h3>
                            <img src='https://clipground.com/images/veg-logo-png-6.png' style={{ height: '30px', paddingTop: '.3em' }} />
                        </div>

                        <div className='counter'>
                            <div className='btn'>+</div>
                            <div className='count'>2</div>
                            <div className='btn'>-</div>

                        </div>
                        <div className='prices'>
                            <div className='prices'>
                                <div className='amount'>$2.99</div>
                                <div className='save'><u>Save for later</u></div>
                                <div className='remove'><u>Remove</u></div>
                            </div>
                        </div>
                    </div>


                    {/* checkout */}
                    <div class='checkout'>
                        <div class='total'>
                            <div>
                                <div class='Subtotal'>Sub-Total</div>
                                <div class='items'>2 items</div>
                            </div>
                            <div class='total-amount'>$6.18</div>
                        </div>
                        <button class='button'>Checkout</button>
                    </div>

                </div >
            </div >
        </div >
    )
}

export default Cart
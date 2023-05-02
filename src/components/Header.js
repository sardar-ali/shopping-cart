import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Header() {
    return (
        <div className='headers'>
            <div className='header-title' to="/">
                Shoppint Cart
            </div>
            <Link to='/cart'>
                <div className='cart-icon'>
                    <AiOutlineShoppingCart />  <span className='badge'> 0 </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
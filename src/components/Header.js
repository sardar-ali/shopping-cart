import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ApplicationContext from '../context-api/context';

function Header() {

    const {
        totalCartItem
    } = useContext(ApplicationContext);


    return (
        <div className='headers'>
            <Link to='/'>
                <div className='header-title'>
                    Shoppint Cart
                </div>
            </Link>
            <Link to='/cart'>
                <div className='cart-icon'>
                    <AiOutlineShoppingCart />  <span className='badge'> {totalCartItem ? totalCartItem : 0} </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
import React from 'react'
import { BsPlus, BsFillBasket3Fill } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';

function CartScreen() {
  let isEmpty = true;
  return (
    <div className='cart-container'>
      <div className='item-container'>
        <h3 className='cart-item-heading'>Cart Items</h3>
        {isEmpty ? <div className='cart-items-section'>
          <div className='items'>
            <img className="item-img" src="https://tse1.mm.bing.net/th?id=OIP.CyzlF6VuQz6heNvcoPZYTAHaJB&pid=Api&P=0" alt='cart' />
            <div>Paint And Shoes</div>
            <div>  2099</div>
            <div> <span> <BsPlus /> </span> 1 <span> <AiOutlineMinus /> </span></div>
            <div><AiOutlineDelete /></div>
          </div>
          <hr />
          <div className='items'>
            <img className="item-img" src="https://tse1.mm.bing.net/th?id=OIP.CyzlF6VuQz6heNvcoPZYTAHaJB&pid=Api&P=0" alt='cart' />
            <div>Paint And Shoes</div>
            <div>  2099</div>
            <div> <span> <BsPlus /> </span> 1 <span> <AiOutlineMinus /> </span></div>
            <div><AiOutlineDelete /></div>
          </div>

        </div> :
          <div className="empty-cart">
            Cart Is empty <AiOutlineShoppingCart />
          </div>}
      </div>
      <div className='summery-section'>
        <h4>Order summery</h4>
        <div className='summery-details'>
          <div className='item-subtotal'>
            <p>total items (2)</p>
            <p>225</p>
          </div>
          <div className='item-subtotal'>
            <p>Shipping Fee</p>
            <p>50</p>
          </div>
          <div className='item-subtotal'>
            <p>Total</p>
            <p>500</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
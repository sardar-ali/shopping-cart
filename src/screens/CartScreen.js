import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';

function CartScreen() {
  let isEmpty = true;
  const [cartItems, setCartItems] = useState([]);

  //increament cart item
  const increament = (itm) => {
    const isItemExist = cartItems?.find((item) => item.id === itm?.id);
    if (isItemExist) {
      const result = cartItems?.map((item) => {
        if (item?.id === isItemExist?.id) {
          return {
            ...item,
            quantity: isItemExist?.quantity + 1
          }
        } else {
          return item;
        }
      })
      setCartItems(result);

    }
  }

  //decreament cart item
  const decreament = (itm) => {
    console.log("itm ::", itm)
  }

  console.log("cartItems ::", cartItems);

  return (
    <div className='cart-container'>
      <div className='item-container'>
        <h3 className='cart-item-heading'>Cart Items</h3>
        {isEmpty ?
          <div className='cart-items-section'>
            {[1, 2]?.map((data) => {
              return (
                <>
                  <div className='items'>
                    <img className="item-img" src="https://tse1.mm.bing.net/th?id=OIP.CyzlF6VuQz6heNvcoPZYTAHaJB&pid=Api&P=0" alt='cart' />
                    <div>Paint And Shoes</div>
                    <div>  2099</div>
                    <div> 
                    <span onClick={() => increament(data)}> <BsPlus /></span> 
                    1 
                    <span onClick={() => decreament(data)}> <AiOutlineMinus /> </span>
                    </div>
                    <div><AiOutlineDelete /></div>
                  </div>
                  <hr />
                </>
              )
            })}
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
    </div >
  )
}

export default CartScreen
import React, { useContext, useMemo } from 'react'
import { BsPlus } from 'react-icons/bs';
import { AiOutlineMinus, AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import ApplicationContext from '../context-api/context';

function CartScreen() {

  const {
    cartItems,
    totalCartItem,
    increament,
    decreament,
    removedItemFromCart,
    totalPrice
  } = useContext(ApplicationContext)

  //calculate shipping fee
  const shippingTax = useMemo(() => {
    return (Math.round(totalPrice / 10))
  })

  return (
    <div className='cart-container'>
      <div className='item-container'>
        <h3 className='cart-item-heading'>Cart Items</h3>
        {cartItems?.length ?
          <div className='cart-items-section'>
            {cartItems?.map((data) => {
              return (
                <>
                  <div className='items'>
                    <img className="item-img" src={data?.image} alt='cart' />
                    <div>{data?.name}</div>
                    <div>Rs. {data?.price}</div>
                    <div>
                      <span onClick={() => increament(data)}> <BsPlus /></span>
                      {data?.quantity}
                      <span onClick={() => decreament(data)}> <AiOutlineMinus /> </span>
                    </div>
                    <div className="delete-icon " onClick={() => removedItemFromCart(data)}> <AiOutlineDelete /></div>
                  </div>
                  <hr />
                </>
              )
            })}
          </div> :
          <div className="empty-cart">
            Cart Is empty <AiOutlineShoppingCart />
          </div>
        }
      </div>
      <div className='summery-section'>
        <h4>Order summery</h4>
        <div className='summery-details'>
          <div className='item-subtotal'>
            <p>Total items ({totalCartItem}) </p>
            <p>Rs. {totalPrice}</p>
          </div>
          <div className='item-subtotal'>
            <p>Shipping Fee (10 %)</p>
            <p> Rs. {shippingTax}</p>
          </div>
          <div className='item-subtotal'>
            <p>Total</p>
            <p> Rs. {totalPrice + shippingTax} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
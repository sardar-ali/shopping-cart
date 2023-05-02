import React from 'react'
import { BsPlus } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';

function Product({ data, addToCart, increament, decreament }) {
  return (
    <>
      <div className='card'>
        <img src={data?.image} alt='img' /><hr />
        <div className='product_name_price'> {data?.name} <span>price {data?.price}</span></div>
        {/* <div className='increament-decreament-btn '>
          <span onClick={() => increament(data)}> <BsPlus />
          </span> 1 <span onClick={() => decreament(data)}> <AiOutlineMinus /> </span>
        </div> */}
        <button className='add_to_cart_button' onClick={() => addToCart(data)}>Add To Cart</button>
      </div>
    </>
  )
}

export default Product
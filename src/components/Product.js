import React from 'react'

function Product({ data, addToCart, key }) {

  return (
    <>
      <div className='card' key={key}>
        <img src={data?.image} alt='img' /><hr />
        <div className='product_name_price'> {data?.name} <span>Price Rs. {data?.price}</span></div>
        <button className='add_to_cart_button' onClick={() => addToCart(data)}>Add To Cart</button>
      </div>
    </>
  )
}

export default Product
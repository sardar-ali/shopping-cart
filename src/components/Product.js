import React from 'react'

function Product({ data }) {
  return (
    <>
      <div className='card'>
        <img src={data?.image} alt='img' /><hr />
        <div className='product_name_price'> {data?.name} <span>price {data?.price}</span></div>
        <button className='add_to_cart_button'>Add To Cart</button>
      </div>
    </>
  )
}

export default Product
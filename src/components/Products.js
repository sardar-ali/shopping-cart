import React from 'react'
import Product from './Product';
import { data } from './../constants/index';
// 
function Products() {
    return (
        <>
            <div className='product-container'>
                {data?.map((itm) => {
                    return (
                        <>
                            <Product data={itm} key={itm?.id} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Products
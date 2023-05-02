import React, { useState, useContext } from 'react'

import Product from './Product';
import { data } from './../constants/index';
import ApplicationContext from '../context-api/context';


function Products() {
    const {
        addToCart
    } = useContext(ApplicationContext);

    return (
        <>
            <div className='product-container'>
                {data?.map((itm) => {
                    return (
                        <>
                            <Product
                                data={itm}
                                key={itm?.id}
                                addToCart={addToCart}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Products
import React, { useState } from 'react'

import Product from './Product';
import { data } from './../constants/index';


function Products() {
    const [cartItems, setCartItems] = useState([]);

    //add to cart items
    const addToCart = (itm) => {
        if (!cartItems?.find((item) => item.id === itm?.id)) {
            setCartItems((prevState) => [...prevState, itm]);

        }
    }

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
        <>
            <div className='product-container'>
                {data?.map((itm) => {
                    return (
                        <>
                            <Product
                                data={itm}
                                key={itm?.id}
                                addToCart={addToCart}
                                increament={increament}
                                decreament={decreament}

                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Products
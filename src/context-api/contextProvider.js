import React, { useState, useMemo } from "react";
import { toast } from "react-toastify";

import ApplicationContext from "./context";

const ContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    // calculate total cart items quantities 
    const totalCartItem = useMemo(() => {
        return cartItems.reduce((sum, itm) => sum += itm?.quantity, 0)
    }, [cartItems]);

    // calculate total cart items quantities 
    const totalPrice = useMemo(() => {
        return cartItems.reduce((sum, itm) => sum += (itm?.quantity * itm?.price), 0)
    }, [cartItems])

    //Add to cart items
    const addToCart = (itm) => {
        if (!cartItems?.find((item) => item.id === itm?.id)) {
            setCartItems((prevState) => [...prevState, itm]);
            toast.success("Product Added To Cart!")
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
        const isItemExist = cartItems?.find((item) => item.id === itm?.id);
        if (isItemExist && isItemExist?.quantity > 1) {
            const result = cartItems?.map((item) => {
                if (item?.id === isItemExist?.id) {
                    return {
                        ...item,
                        quantity: isItemExist?.quantity - 1
                    }
                } else {
                    return item;
                }
            })
            setCartItems(result);
        } else {
            const result = cartItems?.filter((dt) => dt?.id != itm?.id);
            setCartItems(result);

        }
    }

    //Removed items from cart
    const removedItemFromCart = (itm) => {
        const result = cartItems?.filter((dt) => dt?.id != itm?.id);
        setCartItems(result)
        toast.success("Product Removed From Cart!")
    }

    return (
        <ApplicationContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                increament,
                decreament,
                removedItemFromCart,
                totalCartItem,
                totalPrice
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export default ContextProvider;

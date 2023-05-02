import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Routing = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/cart" element={<CartScreen />} />
            </Routes>
        </BrowserRouter>
    );

}


export default Routing;

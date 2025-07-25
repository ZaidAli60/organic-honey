import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../../components/header"
import Home from "./Home"
import Footer from 'components/footer/Footer'
import ProductDetails from "./ProductDetails/Details"
import CartPage from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import PrivateRoute from 'components/PrivateRoute'

export default function Index() {

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route
                        path="/checkout"
                        element={
                            <PrivateRoute>
                                <Checkout />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/product-details*' element={<ProductDetails />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

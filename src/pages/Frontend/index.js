import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../../components/header"
import Home from "./Home"
import Footer from 'components/footer/Footer'
import ProductDetails from "./ProductDetails"
import CartPage from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import PrivateRoute from 'components/PrivateRoute'

export default function Index() {

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />

                <main style={{ flex: 1 }}>
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
                        <Route path='/product*' element={<ProductDetails />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </>
    )
}

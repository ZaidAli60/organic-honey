import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Header from "../../components/header"
import Home from "./Home"
import Footer from 'components/footer/Footer'
import ProductDetails from "./ProductDetails"

export default function Index() {

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product-details*' element={<ProductDetails />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

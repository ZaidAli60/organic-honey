import React from 'react'
import { Routes, Route } from "react-router-dom"
import ProductDetails from './Details'

export default function Messages() {
    return (
        <Routes>
            <Route path=':slug' element={<ProductDetails />} />
        </Routes>
    )
}

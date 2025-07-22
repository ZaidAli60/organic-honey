import React from 'react'
// import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <>
            <div className="TopBar bg-primary">
                <div className="container-fluid">
                    <div className='d-flex justify-content-center align-items-baseline'>
                    <i className="fa-solid fa-truck text-white me-2"></i>
                    <p className='text-center text-white fs-5 '>Free Delivery</p>
                    </div>
                </div>
            </div>
        </>
    )
}
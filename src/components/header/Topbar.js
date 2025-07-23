import React from 'react'
// import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Topbar() {
    return (
        <div className="bg-primary border-bottom py-2 ">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

                {/* Left: Contact Info */}
                <div className="d-flex align-items-center mb-2 mb-md-0">
                    <span className="me-3 d-flex align-items-center text-white">
                        <FaPhoneAlt className="me-1 text-white" /> +92 123 4567890
                    </span>
                    <span className="d-flex align-items-center text-white">
                        <FaEnvelope className="me-1 text-white" /> support@organicshop.com
                    </span>
                </div>

                {/* Right: Language & Auth */}
                <div className="d-flex align-items-center">
                    <span className="me-3">
                        <a href="/login" className="text-white text-decoration-none">Login</a>
                    </span>
                    <span>
                        <a href="/register" className="text-white text-decoration-none">Register</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
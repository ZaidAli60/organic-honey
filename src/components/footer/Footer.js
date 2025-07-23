import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-3">
            <div className="container">
                <div className="row">

                    {/* Logo & Description */}
                    <div className="col-md-4 mb-4">
                        <a className='text-decoration-none text-primary' href="#"><i className="fa-solid fa-leaf me-2"></i> Organic2Buy</a>
                        <p>
                            Providing 100% organic honey, dry fruits, and oils — straight from nature to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-warning">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                            <li><a href="#products" className="text-light text-decoration-none">Products</a></li>
                            <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
                            <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-warning">Contact Us</h5>
                        <p className="mb-1">Email: support@organicmart.com</p>
                        <p className="mb-1">Phone: +92 300 1234567</p>
                        <p>Location: Karachi, Pakistan</p>
                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="text-light"><FaFacebookF /></a>
                            <a href="#" className="text-light"><FaInstagram /></a>
                            <a href="#" className="text-light"><FaTwitter /></a>
                            <a href="#" className="text-light"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>

                <hr className="border-light" />
                <div className="text-center">
                    <p className="mb-0">&copy; {new Date().getFullYear()} OrganicMart. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

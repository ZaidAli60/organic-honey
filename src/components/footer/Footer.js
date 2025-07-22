import { Image } from 'antd'
import React from 'react'
import lightLogo from "assests/kightlogo.webp";

export default function Footer() {
    return (
        <footer className="bg-primary text-light p-5">
            <div className="container">
                {/* Top Row: Logo and Socials */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center footerCol">
                    {/* Logo */}
                    <Image src={lightLogo} preview={false} height={100} className='company-nav-logo' />

                    {/* WhatsApp Community Section */}
                    <div className="rounded text-center text-white mt-4 d-flex flex-column align-items-center">
                        <h5 className="fw-bold">Join Our Community</h5>
                        <a
                            href="https://chat.whatsapp.com/your-community-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light d-inline-flex align-items-center mt-2 whatsapp-btn"
                        >
                            <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp Community
                        </a>
                        <p className="mt-2 text-secondary small">
                            Join our WhatsApp community for latest updates & discussions.
                        </p>
                    </div>
                    <div className="mt-3 mt-md-0">
                        <a href={window.links.facebook} target="_blank" rel="noopener noreferrer" className="text -ps-15 text-decoration-none">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={window.links.instagram} target="_blank" rel="noopener noreferrer" className="text -ps-15">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href={window.links.linkedin} target="_blank" rel="noopener noreferrer" className="text -ps-15">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href={window.links.youtube} target="_blank" rel="noopener noreferrer" className="text -ps-15">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href={window.links.github} target="_blank" rel="noopener noreferrer" className="text -ps-15">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </div>
                <hr className='text-white p-0 m-0 mb-4' />
                {/* Bottom Copyright */}
                <div className="text-center small text-secondary">
                    © HyperColab | <span className="text-white fw-bold ">— An AI-based Company</span>
                </div>
            </div>
        </footer>
    )
}

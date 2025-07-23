import React from 'react';

export default function Contact() {
    return (
        <div className="container my-5">
            <div className="row shadow p-4 rounded bg-light">
                {/* Contact Form Column Only */}
                <div className="col-12">
                    <h2 className="mb-4 text-center">Contact Us</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="your@email.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary text-white fw-semibold rounded-pill px-4">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

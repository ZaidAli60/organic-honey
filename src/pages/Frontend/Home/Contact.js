import React from 'react';

export default function Contact() {
    return (
        <div className="container my-5">
            <div className="row align-items-start shadow p-4 rounded bg-light">
                {/* Contact Form Column */}
                <div className="col-md-6">
                    <h2 className="mb-4">Contact Us</h2>
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
                            <label htmlFor="name" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary text-white fw-semibold rounded-pill px-4">Send Message</button>
                    </form>
                </div>

                {/* Location Column */}
                <div className="col-md-6 mt-5 mt-md-0">
                    <h2 className="mb-4">Our Location</h2>
                    <div className="ratio ratio-4x3 rounded shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609903377!2d72.74109957691882!3d33.68442001613059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd9799c0a93d%3A0x7a24f51ed3c3ff1!2sIslamabad!5e0!3m2!1sen!2s!4v1628154484727!5m2!1sen!2s"
                            title="Google Map"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <p className="mt-3 text-muted">
                        Plot #123, Organic Street, Green Town, Islamabad, Pakistan
                    </p>
                </div>
            </div>
        </div>
    );
}

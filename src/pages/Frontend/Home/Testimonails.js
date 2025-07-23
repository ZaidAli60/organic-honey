import React, { useState } from 'react'

const testimonials = [
    {
        name: "Sara Ali",
        role: "Health Enthusiast",
        text: "The honey tastes amazing and feels so natural! I can tell it's 100% organic.",
        image:
            "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
    },
    {
        name: "Ahmed Khan",
        role: "Chef & Food Blogger",
        text: "The dry fruits are incredibly fresh and crunchy. Great packaging and quality.",
        image:
            "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 4,
    },
    {
        name: "Fatima Noor",
        role: "Skin Care Expert",
        text: "The cold-pressed oils work wonders for my skin. I’m impressed with the purity.",
        image:
            "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
    },
];

export default function Testimonails() {

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">What Our Customers Say 💬</h2>
                <div className="row g-4">
                    {testimonials.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card bg-light shadow-sm p-4 h-100 border-0 testimonial-card hover-shadow transition">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="rounded-circle me-3"
                                        width="60"
                                        height="60"
                                    />
                                    <div>
                                        <h6 className="mb-0">{item.name}</h6>
                                        <small className="text-muted">{item.role}</small>
                                    </div>
                                </div>
                                <p className="text-muted">"{item.text}"</p>
                                <div className="text-warning">
                                    {"★".repeat(item.rating)}
                                    <span className="text-muted">{"★".repeat(5 - item.rating)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Optional CSS animation/hover */}
            <style>{`
        .testimonial-card {
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
        </section>
    )
}

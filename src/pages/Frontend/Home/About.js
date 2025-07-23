import React from 'react'

export default function About() {
    return (
        <>
            <section className="py-5 bg-white" id="about-products">
                <div className="container">
                    <h2 className="text-center fw-bold mb-4">
                        Our <span className="text-primary">Organic</span> Products
                    </h2>
                    <p className="text-center text-muted mb-5">
                        Carefully harvested and prepared to bring natural goodness to your home.
                    </p>

                    <div className="row g-4">
                        {/* Honey */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center">
                                <img
                                    src="https://media.istockphoto.com/id/183354852/photo/pot-of-honey.jpg?s=612x612&w=0&k=20&c=imrFFTwbVvOCi2qczmWC7W_s9aL3nXd90QG21-QUwoA="
                                    alt="Honey"
                                    className="card-img-top rounded-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="fw-bold text-warning">Pure Natural Honey</h5>
                                    <p className="text-muted">
                                        Harvested from healthy bees, our honey is 100% organic, raw, and full of nutrition.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dry Fruits */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center">
                                <img
                                    src="https://media.istockphoto.com/id/1218693828/photo/wooden-bowl-with-mixed-nuts-on-rustic-table-top-view-healthy-food-and-snack.jpg?s=612x612&w=0&k=20&c=89-ko7nwlcqM6HPvwaQ3tZus4apArtwHkFAB0IxPQpo="
                                    alt="Dry Fruits"
                                    className="card-img-top rounded-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="fw-bold text-success">Premium Dry Fruits</h5>
                                    <p className="text-muted">
                                        A delicious mix of almonds, walnuts, and raisins — perfect for healthy snacking.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Organic Oil */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm text-center">
                                <img
                                    src="https://media.istockphoto.com/id/1206682746/photo/pouring-extra-virgin-olive-oil-in-a-glass-bowl.jpg?s=612x612&w=0&k=20&c=0b9ppVJN0BNyzpLodnhPV8MzNTGY7-9-kteOUIBPxq8="
                                    alt="Organic Oil"
                                    className="card-img-top rounded-top"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="fw-bold text-primary">Cold-Pressed Organic Oil</h5>
                                    <p className="text-muted">
                                        Extracted without heat to retain nutrients — ideal for cooking and skincare.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

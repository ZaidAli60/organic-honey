import React from 'react'

export default function Products() {
    const products = [
        {
            title: "Organic Honey",
            price: "$12.99",
            description: "Raw, pure, and rich in antioxidants. Sourced directly from local farms.",
            image: "https://annahl-react.themepresss.com/product/2.png"
        },
        {
            title: "Organic Honey",
            price: "$12.99",
            description: "Raw, pure, and rich in antioxidants. Sourced directly from local farms.",
            image: "https://annahl-react.themepresss.com/product/8.png"
        },
        {
            title: "Premium Dry Fruits",
            price: "$9.49",
            description: "A healthy mix of nuts and dried fruits. Ideal for snacking and gifting.",
            image: "https://media.istockphoto.com/id/155421320/photo/mixed-nuts.jpg?s=612x612&w=0&k=20&c=jOmJivEY-CEjEL3YDHmQX2pMHEZTHBRY8aHNeodl9xs="
        },
        {
            title: "Cold Pressed Oil",
            price: "$15.75",
            description: "Pure, chemical-free oil perfect for cooking and wellness routines.",
            image: "https://media.istockphoto.com/id/1318429403/photo/amber-glass-bottle-with-wooden-massage-brush-eucalyptus-leaves-mirror-and-towels.jpg?s=612x612&w=0&k=20&c=IsfxJgsQTBa2roWmtB6NJ1gVfEKF80PynaWqwwMjIQs="
        },
        {
            title: "Premium Dry Fruits",
            price: "$9.49",
            description: "A healthy mix of nuts and dried fruits. Ideal for snacking and gifting.",
            image: "https://media.istockphoto.com/id/171286155/photo/mixed-nuts.jpg?s=612x612&w=0&k=20&c=ZqZcimXfOy2kuY8aQyz4Cc1825hxpaJzxe9eOIs_V54="
        },
        {
            title: "Cold Pressed Oil",
            price: "$15.75",
            description: "Pure, chemical-free oil perfect for cooking and wellness routines.",
            image: "https://media.istockphoto.com/id/1176912780/photo/top-view-of-olives-and-olive-oil-bottles-on-table-in-a-rustic-kitchen.jpg?s=612x612&w=0&k=20&c=59MD-g4_NS7_Sh0GzzpSCvESMxf2_9QFxQOq3nNiuAk="
        },
    ];

    return (
        <div className="bg-light py-5">
            <div className="container my-5">
                <h2 className="text-center fw-bold mb-5">🛒 Shop Products</h2>
                <div className="row g-4">
                    {products.map((product, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="product-card border-0 shadow-sm rounded-4 overflow-hidden">
                                <div className="product-img p-2">
                                    <img src={product.image} alt={product.title} className="img-fluid w-100 rounded" />
                                </div>
                                <div className="p-3 bg-white">
                                    <h5 className="fw-bold">{product.title}</h5>
                                    <p className="text-muted small">{product.description}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="fw-semibold text-success fs-5">{product.price}</span>
                                        <button className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

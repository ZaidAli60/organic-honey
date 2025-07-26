// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button } from 'antd';

// export default function ProductDetails() {
//     const { state } = useLocation();
//     console.log(state);
//     const product = state?.product;
//     const navigate = useNavigate();

//     if (!product) {
//         return <div className="container py-5">Product not found.</div>;
//     }

//     return (
//         <div className="container py-5">
//             <div className="row g-4 align-items-center">
//                 {/* Image Section */}
//                 <div className="col-md-6">
//                     <img src={product.image} alt={product.title} className="img-fluid rounded shadow" />
//                 </div>

//                 {/* Info Section */}
//                 <div className="col-md-6">
//                     <h2 className="fw-bold text-primary">{product.title}</h2>
//                     <p className="text-muted">{product.description}</p>
//                     <h4 className="text-success fw-semibold">{product.price}</h4>

//                     <div className="d-flex gap-3 mt-4">
//                         <Button type="primary" size="large">Add to Cart</Button>
//                         <Button type="default" size="large" onClick={() => navigate(-1)}>Back</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Rate, InputNumber, Tabs, Tag } from 'antd';

export default function ProductDetails() {
    const { state } = useLocation();
    const product = state?.product;
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div className="container py-5">Product not found.</div>;
    }

    return (
        <div className="container py-5">
            <div className="row g-5 align-items-start">
                {/* Product Image */}
                <div className="col-md-6 text-center">
                    <img src={product.imageURL} alt={product.title} className="img-fluid rounded shadow-sm" style={{ maxHeight: 400 }} />
                </div>

                {/* Product Info */}
                <div className="col-md-6">
                    <span className="badge bg-danger mb-2 px-3 py-1">SALE!</span>

                    <h2 className="fw-bold text-dark">{product.title}</h2>
                    <Rate defaultValue={4} disabled className="mb-2" />
                    <p className="text-muted mb-2">1 customer review</p>

                    <div className="mb-3">
                        <span className="text-muted text-decoration-line-through me-2">${(product.price * 1.5).toFixed(2)}</span>
                        <span className="h4 text-success fw-semibold">PKR {product.price}</span>
                    </div>

                    <p className="text-secondary">{product.description}</p>

                    <div className="d-flex align-items-center gap-3 my-3">
                        <InputNumber min={1} value={quantity} onChange={setQuantity} />
                        <Button type="primary" size="large">Add to cart</Button>
                        <Button type="default" size="large" onClick={() => navigate(-1)}>Back</Button>
                    </div>

                    <div className="mt-4">
                        <p><strong>Category:</strong> <Tag color="blue">{product.category || "General"}</Tag></p>
                        <p><strong>Tags:</strong> {["organic", "honey", "sweet"].map(tag => <Tag key={tag}>{tag}</Tag>)}</p>
                    </div>
                </div>
            </div>

            {/* Description and Reviews Tabs */}
            <div className="row mt-5">
                <div className="col-12">
                    <Tabs defaultActiveKey="1" items={[
                        {
                            key: '1',
                            label: 'Description',
                            children: <p>{product.description}</p>,
                        },
                        {
                            key: '2',
                            label: 'Reviews (1)',
                            children: (
                                <div>
                                    <strong>Amanda Johnson</strong> – July 4, 2018
                                    <Rate disabled defaultValue={5} className="ms-2" />
                                    <p className="mt-2 text-secondary">
                                        Amazing quality honey! Very satisfied with the product.
                                    </p>
                                </div>
                            ),
                        },
                    ]} />
                </div>
            </div>
        </div>
    );
}

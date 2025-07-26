import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Rate, Tabs, Tag, Spin } from 'antd';
import { useCart } from 'context/CartContext';
import axios from 'axios';

export default function ProductDetails() {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${window.api}/public/product/${slug}`)
            .then(res => {
                setProduct(res.data.product);
            })
            .catch(err => {
                console.error("Failed to fetch product:", err);
            })
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <Spin size="large" />
            </div>
        );
    }

    if (!product) return <div className="container py-5" style={{ minHeight: '60vh' }}>Product not found.</div>;

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
                        <span className="text-muted text-decoration-line-through me-2">PKR{(product.price * 1.5).toFixed(2)}</span>
                        <span className="h4 text-success fw-semibold">PKR {product.price}</span>
                    </div>

                    <p className="text-secondary">{product.description}</p>

                    <div className="d-flex align-items-center gap-3 my-3">
                        <Button type="primary" size="large" onClick={() => addToCart(product)}>Add to cart</Button>
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

import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'context/CartContext';
import axios from 'axios';
import { message, Spin } from 'antd';

export default function Products() {

    const { addToCart } = useCart();
    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    // console.log(documents);
    // const products = [
    //     {
    //         title: "Organic Honey",
    //         price: "$12.99",
    //         description: "Raw, pure, and rich in antioxidants. Sourced directly from local farms.",
    //         image: "https://annahl-react.themepresss.com/product/2.png"
    //     },
    //     {
    //         title: "Organic Honey",
    //         price: "$12.99",
    //         description: "Raw, pure, and rich in antioxidants. Sourced directly from local farms.",
    //         image: "https://annahl-react.themepresss.com/product/8.png"
    //     },
    //     {
    //         title: "Premium Dry Fruits",
    //         price: "$9.49",
    //         description: "A healthy mix of nuts and dried fruits. Ideal for snacking and gifting.",
    //         image: "https://media.istockphoto.com/id/155421320/photo/mixed-nuts.jpg?s=612x612&w=0&k=20&c=jOmJivEY-CEjEL3YDHmQX2pMHEZTHBRY8aHNeodl9xs="
    //     },
    //     {
    //         title: "Cold Pressed Oil",
    //         price: "$15.75",
    //         description: "Pure, chemical-free oil perfect for cooking and wellness routines.",
    //         image: "https://media.istockphoto.com/id/1318429403/photo/amber-glass-bottle-with-wooden-massage-brush-eucalyptus-leaves-mirror-and-towels.jpg?s=612x612&w=0&k=20&c=IsfxJgsQTBa2roWmtB6NJ1gVfEKF80PynaWqwwMjIQs="
    //     },
    //     {
    //         title: "Premium Dry Fruits",
    //         price: "$9.49",
    //         description: "A healthy mix of nuts and dried fruits. Ideal for snacking and gifting.",
    //         image: "https://media.istockphoto.com/id/171286155/photo/mixed-nuts.jpg?s=612x612&w=0&k=20&c=ZqZcimXfOy2kuY8aQyz4Cc1825hxpaJzxe9eOIs_V54="
    //     },
    //     {
    //         title: "Cold Pressed Oil",
    //         price: "$15.75",
    //         description: "Pure, chemical-free oil perfect for cooking and wellness routines.",
    //         image: "https://media.istockphoto.com/id/1176912780/photo/top-view-of-olives-and-olive-oil-bottles-on-table-in-a-rustic-kitchen.jpg?s=612x612&w=0&k=20&c=59MD-g4_NS7_Sh0GzzpSCvESMxf2_9QFxQOq3nNiuAk="
    //     },
    // ];


    const readDocuments = useCallback(async () => {
        setIsLoading(true)
        axios.get(`${window.api}/public/products`)
            .then((res) => {
                const { data, status } = res
                if (status === 200) {
                    const array = data.products.map(product => ({ ...product, key: product.uid }))
                    setDocuments(array)
                }
            })
            .catch(error => {
                console.error(error)
                message.error(error.response?.data?.message || "Something went wrong while getting the products")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    useEffect(() => { readDocuments() }, [readDocuments])

    return (
        <div className="bg-light py-5">
            <div className="container my-5">
                {contextHolder}
                <h2 className="text-center fw-bold mb-5">🛒 Shop Products</h2>
                <div className="row g-4">
                    {isLoading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                            <Spin size="large" />
                        </div>
                    ) : (
                        <div className="row">
                            {documents.map((product, index) => (
                                <div className="col-md-4 d-flex" key={index}>
                                    <div className="product-card shadow-sm rounded-4 overflow-hidden d-flex flex-column w-100">
                                        <Link to={`product/${product.slug}`} state={{ product }} className="text-decoration-none">
                                            <div className="product-img">
                                                <img
                                                    src={product.imageURL}
                                                    alt={product.title}
                                                    className="img-fluid w-100 object-fit-cover"
                                                    style={{ height: '250px' }}
                                                />
                                            </div>
                                        </Link>
                                        <div className="p-3 d-flex flex-column justify-content-between flex-grow-1 bg-white">
                                            <div>
                                                <h5 className="fw-bold text-primary">{product.title}</h5>
                                                <p className="text-muted small">{product.description?.substring(0, 80)}...</p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                                                <span className="fw-semibold text-success fs-5">PKR {product.price}</span>
                                                <button
                                                    className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
                                                    onClick={() => {
                                                        addToCart(product);
                                                        messageApi.success(`${product.title} added to cart!`);
                                                    }}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

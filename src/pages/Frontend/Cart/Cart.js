// pages/CartPage.jsx
import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { useAuthContext } from 'context/Auth';
import axios from 'axios';
import { Modal } from 'antd';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function CartPage() {
    const { user, readUserProfile } = useAuthContext()
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(user);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const total = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace('$', '')), 0);

    const handleLoginSuccess = async (credentialResponse) => {
        try {
            const res = await axios.post(`${window.api}/auth/google-login`, {
                token: credentialResponse.credential,
            }, { withCredentials: true });
            // Destructure response
            const { status, data } = res;

            if (status === 200 && data.token) {
                const { token } = data;

                // Save JWT to localStorage
                localStorage.setItem("jwt", token);

                // Load user profile (you can pass token or user object)
                readUserProfile({ token });

                // Show toast message
                window.toastify("Login successful", "success");

                // Close login modal
                setIsModalOpen(false);
            } else {
                console.error("Unexpected response:", data);
                window.toastify("Login failed: Invalid response", "error");
            }
        } catch (error) {
            console.error('Login failed:', error);
            window.toastify("Login failed: Server error", "error");
        }
    };

    const handleCheckout = () => {
        console.log("clicked");
        if (!user || !user.email) {
            // Redirect to login page (Google Auth)
            showModal()
        } else {
            // Proceed to checkout
            console.log("Proceeding to checkout", user);
            // You can show a checkout modal or redirect to /checkout
        }
    };

    return (
        <GoogleOAuthProvider clientId="731309783889-r2ou2sq039nohb9i7hga0bp6uabqe4m5.apps.googleusercontent.com">
            <div className="container my-5" style={{ height: "50vh" }}>
                <h2 className="mb-4">🛒 Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Title</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td><img src={item.image} alt={item.title} width={50} /></td>
                                        <td>{item.title}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min={1}
                                                className="form-control"
                                                style={{ width: '70px' }}
                                                onChange={(e) => updateQuantity(item.title, parseInt(e.target.value))}
                                            />
                                        </td>
                                        <td>{item.price}</td>
                                        <td>${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}</td>
                                        <td>
                                            <button onClick={() => removeFromCart(item.title)} className="btn btn-sm btn-danger">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
                        <div className="text-end">
                            <button className="btn btn-success" onClick={handleCheckout}>Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Ant Design Modal for Google Login */}
            <Modal
                title="Login with Google"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                centered
            >
                <div className="d-flex justify-content-center">
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={() => console.log('Login Failed')}
                    />
                </div>
            </Modal>
        </GoogleOAuthProvider>
    );
}

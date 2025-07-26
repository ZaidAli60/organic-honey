import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/Auth';
import { Button, Modal } from 'antd';
import axios from 'axios';

export default function CartPage() {
    const { user, readUserProfile } = useAuthContext()
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // const total = cartItems.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace('$', '')), 0);
    // With this safe version
    const total = cartItems.reduce((sum, item) => {
        const price = typeof item.price === 'string'
            ? parseFloat(item.price.replace('$', ''))
            : item.price;
        return sum + item.quantity * price;
    }, 0);

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
                readUserProfile({ token });
                setIsModalOpen(false);
                window.toastify("Login successful", "success");
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
            navigate("/checkout");
        }
    };

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <div className="container my-5">
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
                                        <td><img className='rounded' src={item.imageURL} alt={item.title} width={50} /></td>
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
                                        {/* <td>${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}</td> */}
                                        <td>
                                            PKR {(item.quantity * (
                                                typeof item.price === 'string'
                                                    ? parseFloat(item.price.replace('$', ''))
                                                    : item.price
                                            )).toFixed(2)}
                                        </td>
                                        <td>
                                            <button onClick={() => removeFromCart(item.title)} className="btn btn-sm btn-danger">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h4 className="text-end">Total: PKR {total?.toFixed(2)}</h4>
                        <div className="text-end">
                            <Button type="primary" htmlType="submit" onClick={handleCheckout} size="large">
                                Proceed to Checkout
                            </Button>
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

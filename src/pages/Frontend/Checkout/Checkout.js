import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { useAuthContext } from '../../../context/Auth';
import { Button, Divider, Input, Form, message } from 'antd';
import { Modal } from 'antd';
import axios from 'axios';

function Checkout() {
    const { user } = useAuthContext();
    const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);

    // console.log(cartItems);
    const handleCheckout = async (values) => {
        if (!user) {
            window.toastify("Please login with Google to checkout", "error");
            return;
        }

        try {
            setLoading(true);
            const orderPayload = {
                fullName: values.fullName,
                email: values.email,
                phone: values.phone,
                address: values.address,
                items: cartItems,
                total: total.toFixed(2),
            };
            const res = await axios.post(`${window.api}/orders`, orderPayload);
            if (res.status === 200) {
                setOrderNumber(res.data.orderNumber); // 👈 Set order number from response
                setIsModalOpen(true);                 // 👈 Open modal
                messageApi.success('Order placed successfully!');
                form.resetFields();
                localStorage.removeItem("cartItems");
                clearCart();
            }
        } catch (err) {
            console.error(err);
            messageApi.error('Failed to place order');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 text-primary fw-bold">Checkout</h2>
            {contextHolder} {/* ✅ Required to show messages */}
            {cartItems.length === 0 ? (
                <div className="text-center p-5 bg-light rounded shadow">
                    <h4>Your cart is empty.</h4>
                </div>
            ) : (
                <div className="row g-4">
                    {/* Cart Items */}
                    <div className="col-md-7">
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h4 className="mb-4">Items in Cart</h4>
                            {cartItems.map(item => (
                                <div key={item.title} className="d-flex justify-content-between align-items-center border-bottom py-3">
                                    <div className="d-flex align-items-center">
                                        <img src={item.imageURL} alt={item.title} className="me-3 rounded" style={{ width: 70, height: 70, objectFit: 'cover' }} />
                                        <div>
                                            <h6 className="mb-1 fw-semibold">{item.title}</h6>
                                            <div className="d-flex align-items-center">
                                                <label className="me-2">Qty:</label>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.title, parseInt(e.target.value))}
                                                    className="form-control form-control-sm w-50"
                                                    min="1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <p className="mb-1 fw-semibold text-success">
                                            PKR {(
                                                (typeof item.price === 'string'
                                                    ? parseFloat(item.price.replace('$', ''))
                                                    : item.price) * item.quantity
                                            ).toFixed(2)}
                                        </p>
                                        <Button type="link" danger onClick={() => removeFromCart(item.title)}>Remove</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Form & Summary */}
                    <div className="col-md-5">
                        <div className="bg-light p-4 rounded shadow-sm">
                            <h5 className="mb-3">Your Details</h5>
                            <Form layout="vertical" form={form} onFinish={handleCheckout}>
                                <Form.Item name="fullName" label="Full Name" initialValue={user?.fullName} rules={[{ required: true }]}>
                                    <Input placeholder="Enter your name" />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, type: 'email' }]}
                                    initialValue={user?.email}
                                >
                                    <Input placeholder="Enter your email" />
                                </Form.Item>

                                <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                                    <Input placeholder="+92xxxxxxxxxx" />
                                </Form.Item>


                                <Form.Item name="address" label="Shipping Address" rules={[{ required: true }]}>
                                    <Input.TextArea placeholder="House No, Street, City, Country" rows={3} />
                                </Form.Item>

                                <Divider />
                                <div className="d-flex justify-content-between mb-2">
                                    <strong>Total:</strong>
                                    <strong>${total.toFixed(2)}</strong>
                                </div>

                                <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                                    Place Order
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
            <Modal
                title={null}
                open={isModalOpen}
                footer={null}
                closable={false}
                centered
                className="custom-success-modal"
            >
                <div className="text-center p-4">
                    <div style={{ fontSize: 48, color: '#52c41a' }}>
                        ✅
                    </div>
                    <h3 className="mt-3 text-success fw-bold">Order Placed Successfully!</h3>
                    <p className="mb-1">Thank you for your purchase.</p>
                    <p className="fs-5"><strong>Your Order Number:</strong> #{orderNumber}</p>
                    <Button type="primary" size="large" className="mt-3" onClick={() => setIsModalOpen(false)}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default Checkout;

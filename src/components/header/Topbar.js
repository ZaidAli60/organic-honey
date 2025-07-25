import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Modal, Button, Dropdown, Space, Avatar } from 'antd';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAuthContext } from 'context/Auth';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function Topbar() {
    const { isAuth, user, readUserProfile, handleLogout } = useAuthContext()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const menuItems = [
        {
            key: 'logout',
            label: (
                <span onClick={handleLogout} >
                    <LogoutOutlined className="me-2" /> Logout
                </span>
            ),
        },
    ];

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


    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <div className="bg-primary border-bottom py-2">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

                    {/* Left: Contact Info */}
                    <div className="d-flex align-items-center mb-2 mb-md-0">
                        <span className="me-3 d-flex align-items-center text-white">
                            <FaPhoneAlt className="me-1 text-white" /> +92 123 4567890
                        </span>
                        <span className="d-flex align-items-center text-white">
                            <FaEnvelope className="me-1 text-white" /> support@organicshop.com
                        </span>
                    </div>

                    {/* Right: Auth Buttons */}
                    <div className="d-flex align-items-center">
                        {!isAuth ? (
                            <span className="me-3">
                                <Button type="link" onClick={showModal} style={{ color: 'white' }}>Login</Button>
                            </span>
                        ) : (
                            <Dropdown
                                menu={{ items: menuItems }}
                                placement="bottomRight"
                                arrow
                            >
                                <Space style={{ cursor: 'pointer' }}>
                                    <Avatar src={user.photoURL} icon={!user.photoURL && <UserOutlined />} />
                                    <span style={{ color: 'white' }}>{user.fullName?.split(" ")[0]}</span>
                                </Space>
                            </Dropdown>
                        )}
                    </div>
                </div>
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

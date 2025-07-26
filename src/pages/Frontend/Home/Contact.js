import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card ,message} from 'antd';
import axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

export default function Contact() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false); // ✅ Loading state

     const [messageApi,contextHolder] = message.useMessage(); // ✅ new message context API

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post(`${window.api}/messages/create`, values);

            if (response.status === 200 || response.status === 201) {
                messageApi.success('Message sent successfully!');
                form.resetFields();
            } else {
                messageApi.error(response.data.message || 'Something went wrong!');
            }
        } catch (err) {
            const msg = err.response?.data?.message || 'Failed to send message.';
            messageApi.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-light py-5">
            <div className='container my-5'>
                {contextHolder} {/* ✅ Required to show messages */}
                <Card className="shadow" bordered={false}>
                    <Title level={2} style={{ textAlign: 'center' }}>Contact Us</Title>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input placeholder="Your Name" />
                        </Form.Item>

                        <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input placeholder="your@email.com" />
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Please enter your message' }]}
                        >
                            <TextArea rows={5} placeholder="Write your message here..." />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading} // ✅ Ant Design loading state
                                className="rounded-pill fw-semibold"
                            >
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

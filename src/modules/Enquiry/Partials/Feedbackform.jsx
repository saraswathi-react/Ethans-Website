import React from 'react'
import { FeedbackformStyle } from '../Style'
import { Button, Col, Form, Input, InputNumber, Row } from 'antd'

const Feedbackform = () => {

    const onFinish = (value) => {
        console.log(value, 'datacheck');
    }
    return (
        <FeedbackformStyle>
            <Row>
                <Col span={24} md={12} className='FormStyle'>
                    <h1>Feedback Form</h1>
                    <Form
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        onFinish={onFinish}>
                        <Form.Item name="name" rules={[
                            {
                                required: true,
                                message: 'Required!',
                            },
                        ]}>
                            <Input placeholder='Name' type='text' />
                        </Form.Item>
                        <Form.Item name="email" rules={[
                            {
                                required: true,
                                message: 'Required!',
                            },
                        ]}>
                            <Input placeholder='Email' type='email' />
                        </Form.Item>
                        <Form.Item name="number" rules={[
                            {
                                required: true,
                                message: 'Required!',
                            },

                        ]}>
                            <Input placeholder='Phone Number' type='number' />
                        </Form.Item>
                        <Form.Item
                            name="TextArea"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required!',
                                },
                            ]}  >
                            <Input.TextArea placeholder='Your Message' />
                        </Form.Item>
                        <div className='BtnStyle'>
                            <Button type="primary" htmlType="submit"> Submit</Button>
                        </div>
                    </Form>
                </Col>
                <Col span={24} md={12} lg={12}>
                    <div className='Iframe'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d505094.47599604854!2d76.94796500000001!3d8.494462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbbbd6de2871%3A0x30b0af41e768f417!2sMahatma%20Gandhi%20Rd%2C%20Thiruvananthapuram%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1709293932632!5m2!1sen!2sus"
                            width="100%" height="570" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </Col>
            </Row>
        </FeedbackformStyle>
    )
}

export default Feedbackform
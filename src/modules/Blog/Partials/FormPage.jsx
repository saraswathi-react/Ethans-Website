import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react'

const FormPage = () => {

    const onFinish = (value) => {
        console.log(value, 'datacheck');
    }

    return (
        <div>
            <Form
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                onFinish={onFinish}>
                <Row gutter={[24, 24]}>
                    <Col span={24} md={12}>
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
                    </Col>
                    <Col span={24} md={12}>
                        <Form.Item name="website" rules={[
                            {
                                required: true,
                                message: 'Required!',
                            },

                        ]}>
                            <Input placeholder='Website' type='url' />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required!',
                                },
                            ]}  >
                            <Input.TextArea placeholder='Your Message' />
                        </Form.Item>
                    </Col>
                </Row>

                <div className='BtnStyle'>
                    <Button type="primary" htmlType="submit"> Submit</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormPage
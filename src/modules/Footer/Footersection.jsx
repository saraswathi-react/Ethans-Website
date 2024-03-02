import React from 'react'
import { FooterStyle } from './Style'
import { Col, Row } from 'antd'

const Footersection = () => {
    return (
        <FooterStyle>
            <Row>
                <Col span={12} md={12} lg={6}>
                    <h1>Logo</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever</p>
                </Col>
                <Col span={12} md={12} lg={6}></Col>
                <Col span={12} md={12} lg={6}></Col>
                <Col span={12} md={12} lg={6}></Col>
            </Row>
        </FooterStyle>
    )
}

export default Footersection
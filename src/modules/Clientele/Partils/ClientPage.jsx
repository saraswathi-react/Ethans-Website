import React from 'react'
import { ClienteStyle } from './Style'
import { Col, Row } from 'antd'
import BlureImg from '../../../assets/Image/blure.gif'

const ClientPage = () => {
    return (
        <ClienteStyle>
            <Row>
                <Col span={12} md={16}>
                    <Row>
                        <Col span={12} md={4}>
                            <img src={BlureImg} style={{ width: '100%' }} />
                        </Col>
                        <Col span={12} md={20}>
                            <div className='Title'></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={12} md={8}>sdf</Col>
            </Row>
        </ClienteStyle>
    )
}

export default ClientPage
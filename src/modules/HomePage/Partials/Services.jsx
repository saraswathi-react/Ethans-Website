import { Col, Row } from 'antd'
import React from 'react'
import ServiceImg from '../../../assets/Image/service.png'
import { TotalService } from '../Style'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Services = () => {
    return (
        <TotalService>
            <h1 className='Topheading'>WELCOME TO FINANCIAL SERVICES</h1>
            <Row gutter={[24, 24]}>
                <Col span={12} md={10} lg={6}>
                    <img src={ServiceImg} style={{ width: '100%' }} />
                </Col>
                <Col span={24} md={10} lg={8} className='ServBox'>
                    <div className='subheading'>Intelectual Property Services</div>
                    <p>Copyright is a form of intellectual property protection like trademark and patents. </p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className='seeMore'>See more</div>
                        <div><FaLongArrowAltRight /></div>
                    </div>
                </Col>
                <Col span={24} md={10} lg={8} className='ServBox'>
                    <div className='subheading2'>Efiling Services</div>
                    <p> Ethan’s can help individual’s e-file their Income Tax Return with the Income Tax Department. </p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className='seeMore2'>See more</div>
                        <div><FaLongArrowAltRight style={{color:'#162d6d'}} /></div>
                    </div>
                </Col>
            </Row>
        </TotalService>
    )
}

export default Services
import React from 'react'
import { ServiceAbt } from '../Style'
import { Col, Row } from 'antd'
import { SvgIcons } from '@assets/Svg'

const ServiceAbout = () => {

    const BoxData = [
        {
            title: 'Private Limited Company',
            icon: <img src={SvgIcons.Pvt} />,
            ParaText: 'Lorem Ipsum is simply dummy text of the printing and',
        },
        {
            title: 'Income Tax Filing',
            icon: <img src={SvgIcons.Tax} />,
            ParaText: 'Lorem Ipsum is simply dummy text of the printing and',
        },
        {
            title: 'Foreign Branches in India',
            icon: <img src={SvgIcons.Foreign} />,
            ParaText: 'Lorem Ipsum is simply dummy text of the printing and',
        },
    ]
    
    return (
        <ServiceAbt>
            <h1 className='Topheading'>WHAT WE DO</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
            <Row>
                {BoxData?.map((Data, index) => (
                    <Col span={24} md={12} lg={8} key={index}>
                        <div className='BoxService'>
                            <div>{Data.icon}</div>
                            <h2>{Data.title}</h2>
                            <p>{Data.ParaText}</p>
                            <div className='BtnReadMore'>Read More</div>
                        </div>
                    </Col>
                ))}

            </Row>
        </ServiceAbt>
    )
}

export default ServiceAbout
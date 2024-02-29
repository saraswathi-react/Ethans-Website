import React from 'react'
import { ServiceAbt } from '../Style'
import { MdAutoGraph } from 'react-icons/md'
import { Col, Row } from 'antd'

const ServiceAbout = () => {

    const BoxData = [
        {
            title:'Private Limited Company',
            icon : <MdAutoGraph />,
            ParaText : 'Lorem Ipsum is simply dummy text of the printing and',
        },
        {
            title:'Income Tax Filing',
            icon : <MdAutoGraph />,
            ParaText : 'Lorem Ipsum is simply dummy text of the printing and',
        },
        {
            title:'Foreign Branches in India',
            icon : <MdAutoGraph />,
            ParaText : 'Lorem Ipsum is simply dummy text of the printing and',
        },
    ]
    return (
        <ServiceAbt>
            <h1 className='Topheading'>WHAT WE DO</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a</p>
            <Row>
                {BoxData?.map((Data,index)=>(
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
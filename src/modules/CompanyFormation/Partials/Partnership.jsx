import React from 'react'
import { BannerText, TrustSection } from '../style'
import { Col, Row } from 'antd'
import { MdOutlineDiamond } from 'react-icons/md'
import Footersection from '@modules/Footer/Footersection'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'

const Partnership = () => {

    const Datas = [
        {
            txt: 'Most common form of the business organization in India'
        },
        {
            txt: 'Very easy to start, cost effective and minimum regulatory requirement'
        },
        {
            txt: 'No straight forward mechanism to register a proprietorship firm'
        },
        {
            txt: 'The firm existence is established through Sales Tax, Service Tax, Micro Small Medium Enterprises etc registrations'
        },
        {
            txt: 'To facilitate a single person starting a company is a well organized structure, OnePerson Company concept was introduced vide Companies Act, 2013'
        },
    ]

    const OurService = [
        {
            Ourserv: 'Support and advisory services on other business needs of the company after formation such as account maintenance, taxation services and other business registration process eg:VAT,CST,Service Tax etc.'
        },
        {
            Ourserv: 'Professional charge of Rs.3,000/- (Rs.Three Thousand Only) registration expenses, which will be charged as per the actual (invoice from respective Govtauthorities will be provided to you. No hidden'
        },
    ]

    return (
        <div>
            <BannerText className='bannerText'><h1>Propreitorship</h1>
            </BannerText>
            <svg viewBox="0 70 500 70">
                <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
            </svg>
            <TrustSection>
                <h2>Proprietorship</h2><br />
                {Datas.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.txt}</Col>
                    </Row>
                ))}<br />
                <h2>Our Services & Professional Charges</h2><br />
                {OurService.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.Ourserv}</Col>
                    </Row>
                ))}
            </TrustSection>
            <Footersection />
            <BacktoTopPage />
        </div>
    )
}

export default Partnership
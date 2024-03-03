import React from 'react'
import { BannerText, TrustSection } from '../style'
import { Col, Row } from 'antd'
import { MdOutlineDiamond } from 'react-icons/md'
import Footersection from '@modules/Footer/Footersection'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'

const Propreitorship = () => {

    const Datas = [
        {
            txt: 'Governed by partnership act,1932'
        },
        {
            txt: 'Minimum two partners'
        },
        {
            txt: 'The partnership act does not restrict in maximum number of partners, however as per Companies Act,2013 no organization can be formed as partnership firm with more than 100 members as partners.'
        },
        {
            txt: 'No separate legal status for the partners and partnership firm.'
        },
        {
            txt: 'Partnership agreement to be in stamp paper value as per the Stamp duty payable in each state.'
        },
        {
            txt:'Separate legal status for the company from the member/shareholders'
        },
        {
            txt:'Registration of partnership is not mandatory however, its advisable to register the partnership'
        },
        {
            txt:'Incorporation process'
        },
        {
            txt:'Drafting the partnership deed and signing of the partnership agreement'
        },
        {
            txt:'Registration of partnership deed'
        },
        {
            txt:'Applying for PAN & TAN'
        }
    ]

    const OurService = [
        {
            Ourserv: 'We provide a hassle free services with maximum support from our team'
        },
        {
            Ourserv: 'Support and advisory services on other business needs of the company after registration such as account maintenance, taxation services and other businessregistration process eg:GST, IMPORT EXPORT CODE, LEGAL ENTITY IDENTIFIER.'
        },
        {
            Ourserv: 'Professional charge of Rs.5,000/- (Rs.Twenty Thousand Only) for drafting the partnership agreement and does not include stamp duty and registration charges, which will be charged as per the actual (invoice from respective Govt authorities will be provided to you. No hidden Charges)'
        }
    ]

    return (
        <div>
            <BannerText className='bannerText'><h1>Partnership</h1>
            </BannerText>
            <svg viewBox="0 70 500 70">
                <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
            </svg>
            <TrustSection>
                <h2>What is a Partnership Firm</h2><br />
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

export default Propreitorship
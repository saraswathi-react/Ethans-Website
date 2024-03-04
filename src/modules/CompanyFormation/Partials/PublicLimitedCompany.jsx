
import React from 'react'
import { BannerText, TrustSection } from '../style'
import { Col, Row } from 'antd'
import { MdOutlineDiamond } from 'react-icons/md'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import Footersection from '@modules/Footer/Footersection'

export const PublicLimitedCompany = () => {
    const Datas = [
        {
            txt: 'Minimum seven shareholder/member and no limit on maximum shareholder/member '
        },
        {
            txt: 'Separate legal status for the company from the member/shareholders'
        },
        {
            txt: 'Liability of member/shareholder limited to the shareholding of the members/shareholders'
        },
        {
            txt: 'Can be listed in stock exchange with prior approval from SEBI'
        },
        {
            txt: 'Minimum Share Capital of Rs.5 lakhs.'
        },
        {
            txt: 'The shares are freely transferable and no restriction on transfer of shares as applicable to a private limited company'
        },
    ]

    const OurService = [
        {
            txt: 'Apply for Digital Signature Certificate for minimum three proposed directors –Min3days (Not required if already held)'
        },
        {
            txt: 'Apply for Director Identification Number for minimum three proposed director –Min 1day (Not required if already held). If number of proposed director is more than 3, DIN required for the entire proposed director.'
        },
        {
            txt: ' Apply for name approval in form INC-1 along with the details of proposed promoter director and shareholder – Min 2days'
        },
        {
            txt: ' Apply for incorporation of the company in form INC-7 along with DIR-12, INC-22 and other supporting documents such as MOA, AOA, Declaration of directors, Affidavit, specimen signature etc.- Min 7days'
        },
        {
            txt: 'Upon incorporation open a current account with bank, collect and deposit the share capital from all shareholders as per the subscription made in MOA.'
        },
        {
            txt: ' Apply for commencement of business certificate'
        },
    ]

    const charge =[
        {
            txt:'We provide a hassle free services with maximum support from our team'
        },
        {
            txt:' Support and advisory services on other business needs of the company after registration such as account maintenance, taxation services and other business registration process eg:VAT,CST,Service Tax etc.'
        }

    ]
    return (
        <div>
            <BannerText className='bannerText' style={{ textAlign: 'center' }}><h1>Public Limited <br />Company</h1></BannerText>
            <svg viewBox="0 70 500 70">
                <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
            </svg>

            <TrustSection>
                <h2 >What is a Limited Co (Public&nbsp;Ltd)</h2><br />
                {Datas.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.txt}</Col>
                    </Row>
                ))}<br />

                <h2>Incorporation process</h2><br />
                {OurService.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.txt}</Col>
                    </Row>
                ))}<br/>

                <h2>Our Services & Professional Charges</h2><br />
                {charge.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.txt}</Col>
                    </Row>
                ))}

            </TrustSection>
            <Footersection />
            <BacktoTopPage />
        </div>



    )
}

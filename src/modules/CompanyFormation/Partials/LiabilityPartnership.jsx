import React from 'react'
import { BannerText, TrustSection } from '../style'
import { Col, Row } from 'antd'
import Footersection from '@modules/Footer/Footersection'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import { MdOutlineDiamond } from 'react-icons/md'

const LiabilityPartnership = () => {

    const Datas = [
        {
            txt: 'Limited Liability Partnership is Governed by LLP Act 2008'
        },
        {
            txt: 'Has the combined advantage of Partnership Firm and Private Limited Company.'
        },
        {
            txt: 'Minimum Two partners.'
        },
        {
            txt: 'No restriction on maximum number of partners.'
        },
        {
            txt: 'Separate legal status for the company from the Partners.'
        },
        {
            txt: 'Liability of partners limited to the Contribution/Capital of each partner.'
        },
        {
            txt: 'No minimum contribution/capital.'
        },
        {
            txt: 'Audit is mandatory only for companies with turnover above Rs.40lakhs or Contribution above Rs.25lakhs'
        },
        {
            txt: 'Simplified registration process compared to a Private Limited Company.'
        },
        {
            txt: ' Easy transferability'
        }
    ]

    const IncorporationData = [
        {
            IncorData: 'Apply for Digital Signature Certificate (DSC) for all the proposed partners –Min 3days(Not required if already held)'
        },
        {
            IncorData: 'Apply for Director Identification Number (DIN) for all proposed partners – Min 1day (Not required if already held).'
        },
        {
            IncorData: 'Apply for name approval in form Form1 along with the details of proposed partners and partnership deed – Min 2days'
        },
        {
            IncorData: 'Apply for incorporation of the Limited Liability Partnership in form-2 ( Min 7days)'
        }
    ]

    const ProfessionalCharges = [
        {
            ChargesData:'We provide a hassle free services with maximum support from our team in drafting the partnership deed and incorporation of the firm'
        },
        {
            ChargesData:' Support and advisory services on other business needs of the firm after registration such as account maintenance, taxation services and other business registration process eg:GST, IMPORT EXPORT CODE, LEGAL ENTITY IDENTIFIER etc.'
        },
    ]

    return (
        <div>
            <BannerText className='bannerText'><h1 style={{textAlign:'center'}}>Limited Liability<div>Partnership</div></h1>
            </BannerText>
            <svg viewBox="0 70 500 70">
                <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
            </svg>
            <TrustSection>
                <h2>What is a Limited Liability Partnership (LLP)</h2><br />
                {Datas.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.txt}</Col>
                    </Row>
                ))}<br />
                <h2>Incorporation process</h2><br />
                {IncorporationData.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.IncorData}</Col>
                    </Row>
                ))}<br />
                <h2>Our Services & Professional Charges</h2><br />
                {ProfessionalCharges.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.ChargesData}</Col>
                    </Row>
                ))}
            </TrustSection>
            <Footersection />
            <BacktoTopPage />
        </div>
    )
}

export default LiabilityPartnership
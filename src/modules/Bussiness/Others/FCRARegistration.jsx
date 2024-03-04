import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import { BannerText, TrustSection } from '@modules/CompanyFormation/style'
import Footersection from '@modules/Footer/Footersection'
import { Col, Row } from 'antd'
import React from 'react'
import { MdOutlineDiamond } from 'react-icons/md'

const FCRARegistration = () => {

  const Datas = [
    {
      DataIn: 'Any Institution/Organization which receives foreign contribution has to register with Ministry of Home Affairs under the Foreign Contribution Regulation Act, 2010 prior to receiving the foreign contribution from any individual or body corporate.'
    },
    {
      DataIn: 'Under the Foreign Contribution regulation Act, 2010 two types of registration are available'
    }
  ]

  const availableData = [
    {
      availableIn: 'A general registration to receive foreign under which there are no restrictions on the amount of contribution and the donor. The application form to obtain such registrations are made online vide form FC-3'
    },
    {
      availableIn: 'A prior permission to receive foreign contribution from a specific donor for a specific amount. The application form to obtain such registrations is made online vide form FC-4.'
    }
  ]

  const OurServices = [
    {
      serv: 'Registration under Foreign Contribution Act, 2010'
    },
    {
      serv: 'verify whether the associations are eligible to receive foreign contribution'
    },
    {
      serv: 'Renewal of registration'
    },
    {
      serv: 'Assistance in the proper maintenance of prescribed books of accounts in accordance with the provisions of FCRA, 2010 and FCRR, 2011'
    },
    {
      serv: 'Preparation of returns of an association in accordance with the provisions of FC(R) Act, 2010 and FCRR, 2011'
    },
  ]

  return (
    <div>
      <BannerText className='bannerText'><h1 style={{ textAlign: 'center' }}>FCRA Registrations</h1>
      </BannerText>
      <svg viewBox="0 70 500 70">
        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
      </svg>
      <TrustSection>
        <h2>Foreign Contribution Regulation Act Registration in India</h2><br />
        {Datas.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            {/* <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col> */}
            <Col span={20} md={20} className='DiamtTxt'>{datain?.DataIn}</Col>
          </Row>
        ))}<br />
        {availableData.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
            <Col span={20} md={20} className='DiamtTxt'>{datain?.availableIn}</Col>
          </Row>
        ))}<br />
        <h2>Our Services</h2><br />
        {OurServices.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
            <Col span={20} md={20} className='DiamtTxt'>{datain?.serv}</Col>
          </Row>
        ))}
      </TrustSection>
      <Footersection />
      <BacktoTopPage />
    </div>
  )
}

export default FCRARegistration
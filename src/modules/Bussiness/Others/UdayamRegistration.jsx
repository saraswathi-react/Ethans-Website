import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import { BannerText, TrustSection } from '@modules/CompanyFormation/style'
import Footersection from '@modules/Footer/Footersection'
import { Col, Row } from 'antd'
import React from 'react'
import { MdOutlineDiamond } from 'react-icons/md'

const UdayamRegistration = () => {

  const Datas = [
    {
      DataIn: 'The Scheme of voluntary registration of Small Scale, Village and Cottage Industries with the State Directorate of Industries was introduced in 1960 and such registered industrial units were made eligible for different types of assistances by the Governmental Agencies. Initially a uniform norm for registration were not laid down with the result that some of the States had granted different registration numbers to different lines of manufacturing processes to the same unit thereby resulting in multiple registration.'
    },
    {
      DataIn: "Therefore to avoid such anomalies a uniform set of Application Forms for both Provisional as well as Permanent Registration were evolved out at the time of introduction of the revised procedure of registration of these sectors of industrial undertakings in 1975. With the passage of time, the Government of India, Ministry of Commerce and Industries further simplified the procedures by simplification of the forms for registration and also introduced the coded system to indicate the State, Districts and the unit’s serial number so as to facilitate computerisation of the whole system of SSI registration, in 1989."
    },
    {
      DataIn: 'Registration of Small Scale, Village and Cottage industries are done under two stages, viz-'
    }
  ]

  const PermanentdATA = [
    {
      perData: 'A provisionally registered industrial unit when it is about to go into production is to apply for grant of Permanent / Final Registration. An existing and functioning industrial unit is eligible to apply for Permanent / Final Registration without going into provisional registration processes.'
    },
    {
      perData: "Micro, Small and Medium sized enterprises in both the manufacturing and service sector can obtain MSME Registration under the MSMED Act. Though the MSME registration is not statutory, it is beneficial for business at it provides a range of benefits such as eligibility for lower rates of interest, excise exemption scheme, tax subsidies, power tariff subsidies, capital investment subsidies and other support. Ethan’s can help your business obtain MSME Registration to avail a host of benefits."
    }
  ]

  const MSMSE = [
    {
      msmseData: "Ethan’s can help your business obtain MSME Registration in 10 to 20 days, subject to Government processing time."
    },
    {
      msmseData: "An Ethan’s Financial Expert will prepare your MSME Application along with the necessary supporting documents that needs to be submitted for MSME Registration."
    },
    {
      msmseData: "Once the application is prepared and submitted, the concerned MSME Office will process the application and may request for more information or documents (if required)."
    },
    {
      msmseData: "While processing the application, if required an Ethan’s Financial Expert will help respond to any query or request for document and obtain MSME Registration."
    },
  ]

  return (
    <div>
      <BannerText className='bannerText'><h1 style={{ textAlign: 'center' }}>Udayam Registrations</h1>
      </BannerText>
      <svg viewBox="0 70 500 70">
        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
      </svg>
      <TrustSection>
        <h2>Udayam Registration</h2><br />
        {Datas.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            {/* <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col> */}
            <Col span={20} md={20} className='DiamtTxt'>{datain?.DataIn}</Col>
          </Row>
        ))}
        <Row  style={{ marginLeft: '20px' }}>
          <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
          <Col span={20} md={20} className='DiamtTxt' >Provisional and Permanent Registration</Col>
        </Row>
        <br />
        <h2>Provisional Registration</h2><br />
        <Row style={{ marginLeft: '20px' }}>
          {/* <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col> */}
          <Col span={20} md={20} className='DiamtTxt'>Provisional registration is granted to a unit at its pre- investment period to enable it to take necessary steps to apply for financial credit, land or an industrial set, water, power or telephone connections, etc.</Col>
        </Row>
        <br />
        <h2>Permanent / Final Registration</h2><br />
        {PermanentdATA.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            {/* <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col> */}
            <Col span={20} md={20} className='DiamtTxt'>{datain?.perData} </Col>
          </Row>))}
        <br />
        <h2>Ethan’s process of MSMSE Registration</h2><br />
        {MSMSE.map((datain, index) => (
          <Row key={index} style={{ marginLeft: '20px' }}>
            <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
            <Col span={20} md={20} className='DiamtTxt'>{datain?.msmseData}</Col>
          </Row>
        ))}
      </TrustSection>
      <Footersection />
      <BacktoTopPage />
    </div>
  )
}

export default UdayamRegistration
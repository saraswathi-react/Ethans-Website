import { BannerText, Person, TrustSection } from '../style'
import React from 'react'
import pic1 from '../../../assets/Image/two.jpg'
import pic2 from '../../../assets/Image/Attached files-bro.svg'
import pic3 from '../../../assets/Image/three.jpg'
import { Row, Col } from 'antd'
import { MdOutlineDiamond } from 'react-icons/md'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import Footersection from '@modules/Footer/Footersection'


export const OnePersonCompany = () => {

    const data = [
        {
            txt: 'One Person Company is private limited company with single ownership/shareholder Introduced in India through the Companies Act, 2013.'
        },
        {
            txt: 'One Person Company can be defined as a registered sole proprietorship company with separate legal status.'
        },
        {
            txt: ' Single member/shareholder compared to minimum two members for Pvt Ltd Co and Limited Liability Partnership(LLP).'
        },
        {
            txt: ' Offers limited liability protection to it member an advantage compared to a normal sole proprietorship entity.'
        },
        {
            txt: ' Has business continuity and easy to incorporate.'
        },
        {
            txt: ' Nominee required, who will become the member/shareholder of the company incase of the promoter Director’s death.'
        },
        {
            txt: ' An One Person Company must be converted into a Private Limited Company if the annual turnover exceeds Rs.2 Crore or if it’s Share Capital exceeds Rs.50 Lakhs.            '
        },
        {
            txt: 'Audit and filling of annual return with ROC Compulsory for One Person Company'
        }
    ]

    const company = [
        {
            txt: ' Apply Digital Signature Certificate (DSC) for proposed member/shareholder'
        },
        {
            txt: 'Identifying and unique name for the company which is not registered or trademarked'
        },
        {
            txt: ' Apply for Name approval in RUN (Optional, Since the name approval can be done through the incorporation form Spice-32 also)'
        },
        {
            txt: 'Preparation of Memorandum of Association, Article of Association in Spice-MOA and Spice AOA form'
        },
        {
            txt: ' Apply for incorporation of the company in form Spice-32 and other supporting documents.'
        },
        {
            txt: 'Upon incorporation open a current account with bank, collect and deposit the share capital from all shareholders.'
        },
    ]

    const datas = [
        {
            txt: 'Passport Size Photograph -2nos of all the proposed shareholder/director'
        },
        {
            txt: 'Self Attested Pancard Copy of the proposed Director/Shareholder'
        },
        {
            txt: 'Aadhar Card Copy.'
        },
        {
            txt: 'Residence Address proof only electricity bill/telephone bill/Mobile bill/Bank passbook accepted'
        },
        {
            txt: 'Address Proof for registered office electricity bill/telephone bill/Mobile bill in owner’s name).'
        },
        {
            txt: 'Ownership Proof (Property tax receipt or any other documents which reflects the ownership pr'
        },
        {
            txt: 'If registered office is a rented premised, rental agreement and no objection letter from the owner of the property.'
        },
    ]

    const service = [
        {
            txt: ' We provide a hassle free services with maximum support from our team in drafting the MOA, AOA and incorporation documents of the company.'
        },
        {
            txt: 'Support and advisory services on other business needs of the company after registration such as account maintenance, taxation services and other business registration process eg:GST, Import Export Code etc.'
        },
        {
            txt: 'TRADEMARK Registration of the brand'
        },

    ]

    return (
        <div>
            <Person>
                <BannerText className='bannerText' style={{ textAlign: 'center' }}><h1>One Person Company <br /> Private Limited</h1></BannerText>
                <svg viewBox="0 70 500 70">
                    <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
                </svg>

                <TrustSection>
                    <h2 style={{ color: "#ff5a58" }}>What is an One Person Company (OPC)</h2><br /><br />
                    {company.map((cdata, index) => (
                        <Row key={index} style={{ marginLeft: '20px' }}>
                            <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                            <Col span={20} md={20} className='DiamtTxt'>{cdata?.txt}</Col>
                        </Row>
                    ))
                    }
                    <br />
                    <h2 style={{ color: "#ff5a58", }}>One Person Company Incorporation Process</h2><br /><br />
                    <Row>

                        <Col span={24} md={6} lg={12} >
                            <img src={pic1} style={{ width: "100%", height: "auto" }} alt='banner' />
                        </Col>

                        <Col span={24} lg={12} >
                            {data.map((tdata, index) => (
                                <Row key={index} style={{ marginLeft: '20px' }}>
                                    <Col span={2} xs={3} md={1} className='DiamntPoint' ><MdOutlineDiamond /></Col>
                                    <Col span={20} md={20} className='DiamtTxt' style={{ marginLeft: '10px' }}>{tdata?.txt}</Col>
                                </Row>
                            ))
                            }

                        </Col>
                    </Row>

                    <br />

                    {/* Documents */}
                    <h2 style={{ color: "#ff5a58" }}>Documents Required to Register a One Person Company In India</h2><br /><br />
                    <Row>
                        <Col span={24} lg={12}>
                            {datas.map((ddata, index) => (
                                <Row key={index} style={{ marginLeft: '20px' }}>
                                    <Col span={2} xs={3} md={1} className='DiamntPoint' ><MdOutlineDiamond /></Col>
                                    <Col span={20} md={20} className='DiamtTxt' style={{ marginLeft: '10px' }}>{ddata?.txt}</Col>
                                </Row>
                            ))
                            }
                        </Col>
                        <Col span={24} md={6} lg={12}>

                            <img src={pic2} style={{ width: "100%", height: "auto" }} alt='banner' />

                        </Col>
                    </Row>
                    {/* Our Services section start */}
                    <h2 style={{ color: "#ff5a58" }}>Our Services</h2><br />
                    <Row>
                        <Col span={24} md={6} lg={12} >
                            <img src={pic3} style={{ width: "100%", height: "auto" }} alt='banner' />
                        </Col>
                        <Col span={24} lg={12}>

                            {service.map((sdata, index) => (
                                <Row key={index} style={{ marginLeft: '20px' }}>
                                    <Col span={2} xs={3} md={1} className='DiamntPoint' ><MdOutlineDiamond /></Col>
                                    <Col span={20} md={20} className='DiamtTxt' style={{ marginLeft: '10px' }}>{sdata?.txt}</Col>
                                </Row>
                            ))
                            }
                        </Col>
                    </Row>

                </TrustSection>
            </Person>
            <Footersection />
            <BacktoTopPage />
        </div>

    )
}

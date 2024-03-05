import React from 'react'
import { CarouselCards, ClienteStyle, MiniFooter } from './Style'
import { Col, Row } from 'antd'
import BlureImg from '../../../assets/Image/blure.gif'
import { FaFilePdf } from 'react-icons/fa'
import { IoCall } from "react-icons/io5";
import After from '@assets/Image/aftercopy.png'
import styled from 'styled-components'
import { SvgIcons } from '@assets/Svg'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Footersection from '@modules/Footer/Footersection'

import {  useNavigate } from 'react-router-dom';

const ClientPage = () => {

    const ImageProfile = styled.div`
        display: flex;
        align-items: center;
        & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
            border: 1px solid #bfbaba;
        }
        & h4 {
            font-weight: 600;
            font-family: 'Gabarito', cursive;
            & span {
                color: #8b8b8b;
                font-weight: 500;
            }
        }
`

    const Data = [
        {
            imgcompy: <img src={BlureImg} style={{ width: '100%' }} />,
            Title: 'Aramiz Company',
            CompyAddres: "Athletic Performance Tracking Devices Escondido, CA",
            CompyDetail: "We aren’t such an agile and dependable organization just because of our own team; we also have a fantastic network of partners who compliment our services and allow us to work harder, better, faster, and stronger."
        },
        {
            imgcompy: <img src={BlureImg} style={{ width: '100%' }} />,
            Title: 'Adup Media LLC',
            CompyAddres: "Media & Marketing Consulting Walnut Creek, CA",
            CompyDetail: "Our partners are the top companies in their own respective industries, and are known to deliver high quality services and products. Our partners help us deliver unparalleled services to our clients. The reality is that no company can survive by its own in the age of information technology."
        },
        {
            imgcompy: <img src={BlureImg} style={{ width: '100%' }} />,
            Title: 'Green Shield',
            CompyAddres: "Heart Transplant Monitoring Technology Charlotte, NC",
            CompyDetail: "Strategic partnerships allow companies to expand and specialize without limitations. Instead of spending a lot of money and time perfecting a new thing, we prefer to perfect our own services and call in the experts for other tasks when needed. We are the best financial consultants for our clients."
        },
        {
            imgcompy: <img src={BlureImg} style={{ width: '100%' }} />,
            Title: 'Primo Software',
            CompyAddres: "Software Development Manitowoc, WI",
            CompyDetail: "Our customers trust us so much that they often come to us with problems beyond the scope of financial consultancy. Since they know that we have their best business interests at heart they want us to help them with such problems."
        },
    ]


    // const [connect, setconnect] = useState([]);
    
    // const goToContact = (data) => {

    //     };

    const navigation = useNavigate()

    return (
        <div>
            <ClienteStyle>
                <Row>
                    <Col span={24} md={24} lg={18}>
                        {Data?.map((com, index) => (
                            <Row key={index} style={{ marginBottom: '40px' }}>
                                <Col span={12} md={4}>
                                    {com?.imgcompy}
                                </Col>
                                <Col span={24} md={20} className='SectionGap'>
                                    <div className='Title'>{com?.Title}</div>
                                    <div className='CompyAdd'>{com?.CompyAddres}</div>
                                    <hr />
                                    <div className='CompyDetails'>{com?.CompyDetail}</div>
                                </Col>
                            </Row>
                        ))}

                    </Col>
                    <Col span={24} md={24} lg={6}>
                        <Row>
                            <Col span={24} md={12} lg={24}>
                                <div className='CompanyPresent'>
                                    <div><FaFilePdf /></div>
                                    <h4>company presentation</h4>
                                </div>
                                <div className='ClientServie'>
                                    <h4>How can we help you?</h4>
                                    <p>Contact us at the Consulting WP office nearest to you or submit a business inquiry online.</p>
                                    <div className='ButonSty'>
                                        <div><IoCall /></div>
                                        <h4 onClick={() => navigation('/enquiry')}>Contact Us</h4>                                    </div>
                                    {/* <div className='CircleImgr'><img src={CircleImg}  /> </div> */}
                                </div>
                            </Col>
                            <Col span={24} md={12} lg={24}>
                                <CarouselCards>
                                    <div className='TestimTopIcon'>
                                        <img src={SvgIcons.Testimonial} />
                                    </div>
                                    <div className='contentStyle'>
                                        <p>Ethans support in other formalities after incorporation also
                                            helped us in making the business operational at the earliest.
                                            We thank the Ethan’s team for their support</p>
                                    </div>
                                    <img src={After} style={{ width: '14px', marginLeft: '35px' }} />
                                    <ImageProfile>
                                        <img src={BlureImg} />&nbsp;&nbsp;&nbsp;
                                        <h4>Mr. ABY OOMMEN<br />
                                            <span>Maxview Private Limited</span></h4>
                                    </ImageProfile>
                                </CarouselCards>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </ClienteStyle>

            <MiniFooter>
                <h2>Looking for a First - Class Business Consultant ?</h2>
                <div className='ButnContect'>

                    <div onClick={() => navigation('/enquiry')}>Contact Us</div>

                     <IoIosArrowDroprightCircle /></div>
            </MiniFooter>
            <Footersection />
            <BacktoTopPage />
        </div>
    )
}

export default ClientPage
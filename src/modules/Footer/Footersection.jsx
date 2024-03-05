import React from 'react'
import { FooterStyle } from './Style'
import { Col, Row } from 'antd'
import LogoImg from '@assets/Image/footerLogo.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TiLocation } from 'react-icons/ti'
import { FiPhoneCall } from 'react-icons/fi'
import { MdAttachEmail } from 'react-icons/md'
import { BsFillXDiamondFill } from "react-icons/bs";
import { AiFillInstagram } from 'react-icons/ai'

const Footersection = () => {
    return (
        <div>

            <FooterStyle>
                <Row>
                    <Col span={24} md={12} lg={6}>
                        <div > <img src={LogoImg} style={{ width: '60%' }} /></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </Col>
                    <Col span={24} md={12} lg={6}>
                        <h3>Company Formation</h3>
                        <div className='CmpyFormation'>
                            <p><BsFillXDiamondFill />One Person Company</p>
                            <p><BsFillXDiamondFill />Private Limited Company</p>
                            <p><BsFillXDiamondFill />Public Limited Company</p>
                            <p><BsFillXDiamondFill />Limited Liability Partnership</p>
                            <p><BsFillXDiamondFill />Partnership</p>
                            <p><BsFillXDiamondFill />Propreitorship</p>
                            <p><BsFillXDiamondFill />Trust</p>
                        </div>
                    </Col>
                    <Col span={24} md={12} lg={6}>
                        <h3>Business Service</h3>
                        <div className='CmpyFormation'>
                            <p><BsFillXDiamondFill />Income Tax</p>
                            <p><BsFillXDiamondFill />Foreign Trade and Investments</p>
                            <p><BsFillXDiamondFill />Import Export Code (IEC)</p>
                            <p><BsFillXDiamondFill />FCRA Registrations</p>
                            <p><BsFillXDiamondFill />Udayam Registrations</p>
                        </div>
                    </Col>
                    <Col span={24} md={12} lg={6}>
                        <h3>Get In Touch</h3>
                        <div className='CmpyFormation'>
                            <div className='OnlyFlex'>
                                <div className='IconsStyle'><FiPhoneCall /></div>
                                <p>91-9751553322</p>
                            </div>
                            <div className='OnlyFlex'>
                                <div className='IconsStyle'><MdAttachEmail /></div>
                                <p>support@ethans.in</p>
                            </div>
                            <div className='OnlyFlex'>
                                <div className='IconsStyle'><TiLocation /></div>
                                <p>BYBISA" TC II/3614 -Ground Floor,
                                    Kesavadasapuram , MG Road, Trivandrum ,
                                    Kerala&nbsp;-7695004</p>
                            </div>

                        </div>
                        <div className='SocialMedia'>
                            <a href='https://www.facebook.com/stylemixthemes/' target='blank'><div className='Svgbacg'><FaFacebookF /></div></a>
                            <a href='https://twitter.com/hashtag/stylemixthemes' target='blank'><div className='Svgbacg'><FaTwitter /></div></a>
                            <a href='https://www.linkedin.com/company/stylemixthemes' target='blank'><div className='Svgbacg'><FaLinkedinIn /></div></a>
                            <a href='https://www.instagram.com/stylemixthemes/' target='blank'><div className='Svgbacg'><AiFillInstagram /></div></a>
                        </div>
                    </Col>

                </Row>
                <hr />
                <p style={{ textAlign: 'center' }}>Copyright 2024 All Right Reserved By <a href='https://ideaux.in/' target='blank' style={{ cursor: 'pointer' }}>@ideuauxtech</a></p>
                {/* <Imgg>
                <img src={WaveImg} />
            </Imgg> */}
            </FooterStyle>

        </div>
    )
}

export default Footersection
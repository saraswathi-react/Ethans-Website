import React from 'react'
import { GetInTochStyle } from '../Style'
import { Col, Row } from 'antd'
import { TiLocation } from "react-icons/ti";
import { MdAddIcCall, MdAttachEmail } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const GetInTouch = () => {
    
    return (
        <GetInTochStyle>
            <h2>Get In Touch</h2>
            <Row>
                <Col span={24} md={8}>
                    <div className='IconsStyle'><TiLocation /></div>
                    <div className='IconText'>BYBISA" TC II/3614 -Ground Floor, Kesavadasapuram , MG Road, Trivandrum , Kerala&nbsp;-695004</div>
                </Col>
                <Col span={24} md={8}>
                    <div className='IconsStyle'><MdAttachEmail /></div>
                    <div className='IconText'>Feedback or Contact&nbsp;:<h4>support@ethans.in</h4></div>
                </Col>
                <Col span={24} md={8} >
                    <div className='IconsStyle'><MdAddIcCall /></div>
                    <div className='IconText'>+91 97515 53322</div>
                    <div className='SocialMedia'>
                        <a href='https://www.facebook.com/stylemixthemes/' target='blank'><div className='Svgbacg'><FaFacebookF /></div></a>
                        <a href='https://twitter.com/hashtag/stylemixthemes' target='blank'><div className='Svgbacg'><FaTwitter /></div></a>
                        <a href='https://www.linkedin.com/company/stylemixthemes' target='blank'><div className='Svgbacg'><FaLinkedinIn /></div></a>
                        <a href='https://www.instagram.com/stylemixthemes/' target='blank'><div className='Svgbacg'><AiFillInstagram /></div></a>
                    </div>
                </Col>
            </Row>
        </GetInTochStyle>
    )
}

export default GetInTouch
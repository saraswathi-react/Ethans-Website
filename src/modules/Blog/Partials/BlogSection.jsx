import React from 'react'
import { BlogSectionStyle } from './Style'
import { Col, Row } from 'antd'
import BlureImg from '@assets/Image/blure.gif'
import { IoArrowRedoCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Footersection from '@modules/Footer/Footersection'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'

const BlogSection = () => {

    const nevigate = useNavigate();

    const handleNavigte = () => {
        nevigate('/incometaxslab')
    }

    const handleNavigteNext = () => {
        nevigate('/ffmclicense')
    }

    return (
        <div>
            <BlogSectionStyle>
                <h1 className='Topheading'>NEWS LIST</h1>
                <Row gutter={[24, 24]}>
                    <Col span={24} md={8} lg={6}>
                        <img src={BlureImg} style={{ width: '100%' }} />
                    </Col>
                    <Col span={24} md={16} lg={18}>
                        <h2>INCOME TAX SLAB AY 2019-20</h2><br />
                        <p className='DiamtTxt'>What is this highly valuable asset? Its own people. Says Morgan Fraud, the author of The Thinking Corporation, “Given that we are all capable of contributing new ideas, the question becomes how do you successfully generate, capture, process and implement ideas?”</p>
                        <div className='ReadMore' onClick={handleNavigte}><IoArrowRedoCircle /><p>Read More</p></div>
                    </Col>
                    <Col span={24} md={8} lg={6}>
                        <img src={BlureImg} style={{ width: '100%' }} />
                    </Col>
                    <Col span={24} md={16} lg={18}>
                        <h2>FULL FLEDGE MONEY CHANGER LICENSE IN INDIA (FFMC)</h2><br />
                        <p className='DiamtTxt'>The teams focused their efforts on a few of the highest-value S&OP levers in order to review the current planning process, identify gaps in the planning infrastructure and analytically understand demand and supply variability.</p>
                        <div className='ReadMore' onClick={handleNavigteNext}><IoArrowRedoCircle /><p>Read More</p></div>
                    </Col>
                </Row>
            </BlogSectionStyle>
            <Footersection />
            <BacktoTopPage />
        </div>
    )
}

export default BlogSection
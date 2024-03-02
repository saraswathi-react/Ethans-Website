import { OneStyle, Person } from '../style'
import React from 'react'
import BannerImg from '../../../assets/Image/one.png'
import pic1 from '../../../assets/Image/two.jpg'
import pic2 from '../../../assets/Image/Attached files-bro.svg'
import pic3 from '../../../assets/Image/three.jpg'
import { Row, Col } from 'antd'
import { BannerStyle } from '../style'
import { IoIosCheckbox } from "react-icons/io";
import { color } from 'framer-motion'


export const OnePersonCompany = () => {
    return (
        <div>
            <BannerStyle>
                <div className='LeftSection'>
                    <h1>One Person Company Private Limited</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    <div className='ButtonsBanner'>
                        <div className='BtnOne'>read More</div>
                    </div>
                </div>
                <div className='bannerimg'>
                    <img src={BannerImg} alt='banner' className='ImgSe' />
                </div><br />
            </BannerStyle>
            <OneStyle>

                <Row>
                    <Col span={24} md={24} lg={24} >
                        <h2 style={{ color: "#ff5a58" }}>What is an One Person Company (OPC)</h2><br />
                        <p className='para' >

                            <IoIosCheckbox />   One Person Company is private limited company with single ownership/shareholder Introduced in India through the Companies Act, 2013.<br /><br />

                            <IoIosCheckbox />  One Person Company is private limited company with single ownership/shareholder Introduced in India through the Companies Act, 2013.<br /><br />

                            <IoIosCheckbox />    One Person Company can be defined as a registered sole proprietorship company with separate legal status.<br /><br />

                            <IoIosCheckbox />    Single member/shareholder compared to minimum two members for Pvt Ltd Co and Limited Liability Partnership(LLP).<br /><br />

                            <IoIosCheckbox /> Offers limited liability protection to it member an advantage compared to a normal sole proprietorship entity.<br /><br />

                            <IoIosCheckbox />  Has business continuity and easy to incorporate.<br /><br />

                            <IoIosCheckbox />  Nominee required, who will become the member/shareholder of the company incase of the promoter Director’s death.<br /><br />

                            <IoIosCheckbox />   An One Person Company must be converted into a Private Limited Company if the annual turnover exceeds Rs.2 Crore or if it’s Share Capital exceeds Rs.50 Lakhs.<br /><br />

                            <IoIosCheckbox />    Audit and filling of annual return with ROC Compulsory for One Person Company

                        </p>
                    </Col>
                </Row>
            </OneStyle>
            <Person>
                <Row style={{ paddingTop: 50 }}>
                    <Col span={24} md={12} lg={12} >
                        <img src={pic1} style={{ width: 520, height: 420, paddingLeft: 50 }} alt='banner' />
                    </Col>
                    <Col span={24} md={12} lg={12}>
                        <p className='parag'>
                            <h2 style={{ color: "#ff5a58" }} >One Person Company Incorporation Process</h2>

                            <IoIosCheckbox />   Apply Digital Signature Certificate (DSC) for proposed member/shareholder<br /><br />

                            <IoIosCheckbox />    Identifying and unique name for the company which is not registered or trademarked<br /><br />

                            <IoIosCheckbox />     Apply for Name approval in RUN (Optional, Since the name approval can be done through the incorporation form Spice-32 also)<br /><br />

                            <IoIosCheckbox />    Preparation of Memorandum of Association, Article of Association in Spice-MOA and Spice AOA form<br /><br />

                            <IoIosCheckbox />     Apply for incorporation of the company in form Spice-32 and other supporting documents.<br /><br />

                            <IoIosCheckbox />   Upon incorporation open a current account with bank, collect and deposit the share capital from all shareholders.<br /><br />
                        </p>
                    </Col>
                </Row>

                <Row style={{ paddingTop: 50, margin: 50 }}>
                    <Col span={24} md={12} lg={12} >
                        <p className='paragtwo'>
                            <h2 style={{ color: "#ff5a58" }} >Documents Required to Register a One Person Company In India</h2><br />

                            <IoIosCheckbox />   Passport Size Photograph -2nos of all the proposed shareholder/director<br /><br />

                            <IoIosCheckbox />    Self Attested Pancard Copy of the proposed Director/Shareholder<br /><br />

                            <IoIosCheckbox />     Aadhar Card Copy.<br /><br />

                            <IoIosCheckbox />    Residence Address proof only electricity bill/telephone bill/Mobile bill/Bank passbook accepted<br /><br />

                            <IoIosCheckbox />     Address Proof for registered office electricity bill/telephone bill/Mobile bill in owner’s name.<br /><br />

                            <IoIosCheckbox />   Ownership Proof (Property tax receipt or any other documents which reflects the ownership proof).<br /><br />

                            <IoIosCheckbox />   If registered office is a rented premised, rental agreement and no objection letter from the owner of the property.<br /><br />

                        </p>
                    </Col>
                    <Col span={24} md={12} lg={12}>

                        <img src={pic2} style={{ width: 520, height: 420, paddingLeft: 50 }} alt='banner' />

                    </Col>
                </Row>

                <Row style={{ paddingTop: 50 }}>
                    <Col span={24} md={12} lg={12} >
                        <img src={pic3} style={{ width: 520, height: 420, paddingLeft: 50 }} alt='banner' />
                    </Col>
                    <Col span={24} md={12} lg={12}>

                        <p className='parag'>
                            <h2 style={{ color: "#ff5a58" }} >Our Services </h2>
                            <IoIosCheckbox />   We provide a hassle free services with maximum support from our team in drafting the MOA, AOA and incorporation documents of the company.<br /><br />

                            <IoIosCheckbox />     Support and advisory services on other business needs of the company after registration such as account maintenance, taxation services and other business registration process eg:GST, Import Export Code etc.<br /><br />

                            <IoIosCheckbox />     TRADEMARK Registration of the brand<br /><br />
                        </p>
                    </Col>
                </Row>

            </Person>
        </div>

    )
}

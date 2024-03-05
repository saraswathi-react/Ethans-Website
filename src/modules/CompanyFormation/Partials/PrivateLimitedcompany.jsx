import React from 'react'
import { BannerText, OneStyle, Person, TrustSection } from '../style'
import { Col, Collapse, Row } from 'antd';
import five from '../../../assets/Image/five.png'
import six from '../../../assets/Image/six.png'
import pic3 from '../../../assets/Image/three.jpg'
import Footersection from '@modules/Footer/Footersection';
import { MdOutlineDiamond } from 'react-icons/md'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage';



const text = `
The Cost varies depending upon the state in which the company registered office is situated due to the stamp duty charged by the state. The expenses for registering a Private Limited Company will be Approx.
  Rs.4, 000 to 6,525 (Depending upon the state in which it’s registered) with two shareholder and a maximum Share capital of Rs.10, 00,000/- . The expenses will increase with increase in share capital and number of shareholder. 
In addition to the expenses, the consultant will charge consultancy fees for the services provided.
`;

const items = [
  {
    key: '1',
    label: 'IS PANCARD COMPLUSORY?',
    children: <p>Except for Foreign Nationals, all the other person pan card is compulsory. Even DSC cannot be applied without pan card</p>,
  },
  {
    key: '2',
    label: 'HOW MANY DAYS WILL IT TAKE TO REGISTER A PRIVATE LIMITED COMPANY',
    children: <p>If all documents are in order, it takes 2 to 7 days to register a Private Limited Company</p>,
  },
  {
    key: '3',
    label: 'WHAT IS THE COST OF REGISTERING A PRIVATE LIMITED COMPANY',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'DO THE SHAREHOLDERS HAVE TO BE PHYSICALLY BE PRESENT FOR REGISTERATION?',
    children: <p>No. All the documents and filing are done through online. Also, the signature of documents and forms are done digitally. Hence, the shareholder need not be present at the time of registration.</p>,
  },
  {
    key: '5',
    label: 'CAN AN NRI START A COMPANY IN INDIA',
    children: <p>Yes.</p>,
  },

];

export const PrivateLimitedcompany = () => {

  const onChange = (key) => {
    console.log(key);
  };

  const register = [
    {
      txt: 'Minimum Two Shareholder and Maximum 200 Shareholder (Except in case of One Person Company which requires only One Shareholder) '
    },
    {
      txt: 'Apply for Digital Signature Certificate (DSC) for all proposed Subscribers.'
    },
    {
      txt: 'Identify a unique name for the Company which is not an existing Company Name or registered Trademark.'
    },
    {
      txt: 'Apply for name approval in form RUN. (Optional, as per the new procedure name approval can be done along with the company registration in form Spice 32'
    },
    {
      txt: 'Prepare MOA and AOA in Spice MOA and Spice AOA form'
    },
    {
      txt: 'Apply for Company Incorporation in form Spice-32'
    },
    {
      txt: 'Upon incorporation open a current account with bank, collect and deposit the share capital from all shareholders.'
    },
  ]

  const document = [
    {
      txt: 'Passport size photograph -2nos for all proposed shareholder'
    },
    {
      txt: 'Self-attested PANCARD copy of Director/Shareholder'
    },
    {
      txt: 'Aadhar Card copy of Director/Shareholder'
    },
    {
      txt: 'Bank pass book/Statement/Mobile bill of the proposed Director/Shareholder'
    },
    {
      txt: 'Address Proof for registered office electricity bill/telephone bill/Mobile bill in owner’s name.'
    },
    {
      txt: 'Ownership Proof (Property tax receipt or any other documents which reflects the ownership proof)'
    },
    {
      txt: 'If registered office is a rented premised, rental agreement and no objection letter from the owner of the property.'
    },
  ]

  const serve = [
    {
      txt: ' We provide a hassle free services with maximum support from our team to register Private Limited Company In India      '
    },
    {
      txt: 'Support and advisory services on other business needs of the company'
    },
    {
      txt: ' Taxation services and other business registration process eg:GST, Import Export Code etc.'
    },
    {
      txt: 'FEMA Consultancy on Foreign Direct Investment for NRI’s, Foreign Entity and Foreign Nationals Planning to start a Private Limited Company in India'
    },
    {
      txt: 'TRADEMARK Registration'
    },
  ]

  return (
    <div>
      <Person>
      <BannerText className='bannerText' style={{ textAlign: 'center' }}><h1>Private Limited <br />Company</h1>   </BannerText>
      <svg viewBox="0 70 500 70">
        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0" fill="#162d6d"></path>
      </svg>

      <TrustSection>
      <h2 style={{ color: "#ff5a58", }}>How To Register A Private Limited Company</h2><br /><br />
        <Row>
          <Col span={24} md={6} lg={12} className='sizes'>
            <img src={five} style={{ width: "100%", height: "auto" }} alt='banner' />
          </Col>

          <Col span={24}  lg={12}>
 
              {register.map((rdata, index) => (
                <Row key={index} style={{ marginLeft: '20px' }}>
                  <Col span={2} xs={3} md={1} className='DiamntPoint' ><MdOutlineDiamond /></Col>
                  <Col span={20} md={20} className='DiamtTxt' style={{ marginLeft: '10px' }}>{rdata?.txt}</Col>
                </Row>
              ))
              }

          </Col>
        </Row>
<br/><br/>
        <Row>
          <Col span={24}  lg={12} >
              <h2 style={{ color: "#ff5a58" }}>Documents Required</h2><br /><br />
              {document.map((ddata, index) => (
                <Row key={index} style={{ marginLeft: '20px' }}>
                  <Col span={2} xs={3} md={1} className='DiamntPoint' ><MdOutlineDiamond /></Col>
                  <Col span={20} md={20} className='DiamtTxt' style={{ marginLeft: '10px' }}>{ddata?.txt}</Col>
                </Row>
              ))
              }

          </Col>
          <Col span={24} md={6} lg={12}>
            <img src={six} style={{ width: "100%", height: "auto"}} alt='banner' />
          </Col>
        </Row>

<br/>
      <OneStyle>
        <Row>
          <Col span={0} md={6} lg={0} >
          </Col>
          <Col span={24} md={12} lg={24} >
            <h2 style={{ color: "#ff5a58" }}>Frequently Asked Questions</h2><br />

            <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />

          </Col>
          <Col span={0} md={6} lg={0} >
          </Col>
        </Row>
      </OneStyle>
<br/>
      <h2 style={{ color: "#ff5a58" }}>Our Services</h2><br /><br />
      <Row>
        <Col span={24} md={6} lg={12} >
          <img src={pic3} className='picture' style={{ width: "100%", height: "auto", }} alt='banner' />
        </Col>
        
        <Col span={24}  lg={12}>

            {serve.map((sdata, index) => (
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

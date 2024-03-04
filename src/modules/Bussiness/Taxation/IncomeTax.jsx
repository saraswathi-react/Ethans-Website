import React from "react";
import { StyledIncomeTax } from "./style";
import { Col, Row } from "antd";
import { BannerText } from "@modules/CompanyFormation/style";
import { MdOutlineDiamond } from "react-icons/md";
import Footersection from "@modules/Footer/Footersection";
import BacktoTopPage from "@modules/BacktoTop/BacktoTopPage";

const IncomeTax = () => {

  const Datas = [
    {
      txt: "Income from salary",
    },
    {
      txt: "Income from house property",
    },
    {
      txt: "Profit and gain from business or profession",
    },
    {
      txt: "Capital Gains",
    },
    {
      txt: "Other income",
    },
  ];

  const Proprietorship = [
    {
      txt: "Surcharge of 10% plus cess of 3% is charges on the income tax if the total taxable income exceeds 1 Crore",
    },
    {
      txt: "For individual over and above the age of 60, no tax is charges on income upto Rs.3lakhs for AY 2015-16 and upto 2.5lakhs for AY 2014-15",
    },
    {
      txt: "For individual over and above the age of 80, no tax is charges on income upto Rs.5lakhs for AY 2015-16 and upto 3 lakhs for AY 2014-15.",
    },
    {
      txt: "Audit of accounts is mandatory for turnover over and above 1 Crore or net profit margin less than 8%",
    },
  ];

  return (
    <div>
      <BannerText className="bannerText">
        <h1>Income Tax</h1>
      </BannerText>
      <svg viewBox="0 70 500 70">
        <path
          d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
          fill="#162d6d"
        ></path>
      </svg>
      <StyledIncomeTax>
        <h2>Income Tax on profit and gain from business or profession</h2>
        <br />
        <p>
          Under Income Tax Act 1961, tax is levied on five major head of income
        </p>
        <br />
        {Datas.map((datain, index) => (
          <Row key={index} style={{ marginLeft: "20px" }}>
            <Col span={2} xs={3} md={1} className="DiamntPoint">
              <MdOutlineDiamond />
            </Col>
            <Col span={20} md={20} className="DiamtTxt">
              {datain?.txt}
            </Col>
          </Row>
        ))}<br />
        <p>Under the head profit and gain from business or profession, tax is levied as per the business entity ownership structure.</p>
        <br />
        <h2>Proprietorship</h2>
        <br /> 
        <p>A proprietorship is a business entity which does not have a separate legal existence other than the owner (proprietor) of the company. Hence, the tax is levied as a personal income of the proprietor as per the slab rate applicable to an individual under Income Tax Act, 1961. The Slab rate for the AY 2014-15 & 2015-16 is given below:</p>
        <br /> 
        <div className='Tableresp'>
                    <table id="customers" >
                        <tr>
                            <th>Tax rate</th>
                            <th>AY 2014-15</th>
                            <th>AY 2015-16</th>
                        </tr>
                        <tr>
                            <td>No Tax</td>
                            <td>Income Upto 2,00,000/-</td>
                            <td>Income Upto 2,50,000/-</td>
                        </tr>

                        <tr>
                            <td>10%</td>
                            <td>2,00,000/- to 5,00,000/-</td>
                            <td>2,50,000/- to 5,00,000/-</td>
                        </tr>

                        <tr>
                            <td>20%</td>
                            <td>5,00,000/- to 10,00,000/-</td>
                            <td>5,00,000/- to 10,00,000/-</td>
                        </tr>

                        <tr>
                            <td>30%</td>
                            <td>Above 10,00,000/-</td>
                            <td>Above 10,00,000/-</td>
                        </tr>

                        
                    </table></div>

                <br />
                <br />

                {Proprietorship.map((datain, index) => (
                    <Row key={index} style={{ marginLeft: '20px' }}>
                        <Col span={2} xs={3} md={1} className='DiamntPoint'><MdOutlineDiamond /></Col>
                        <Col span={20} md={20} className='DiamtTxt'>{datain?.txt}</Col>
                    </Row>
                ))}
      </StyledIncomeTax>
      <Footersection />
      <BacktoTopPage />
    </div>
  );
};

export default IncomeTax;

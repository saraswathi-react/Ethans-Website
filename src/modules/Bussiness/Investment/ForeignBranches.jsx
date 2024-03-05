import { BannerText } from "@modules/CompanyFormation/style";
import React from "react";
import { StyledForeign } from "./style";
import { MdOutlineDiamond } from "react-icons/md";
import { Col, Row } from "antd";
import Footersection from "@modules/Footer/Footersection";
import BacktoTopPage from "@modules/BacktoTop/BacktoTopPage";

const ForeignBranches = () => {

  const Datas = [
    {
      txt: "Any body corporate such as firm , Company or Association of Person with a profit making track record of five financial year in the home country immediately preceding the year in which the branch is being set up and",
    },
    {
      txt: "With a net worth of not less than USD 100K or equivalent as per the latest audited balance sheet or account statements certified by the public accountant.",
    },
  ];

  return (
    <div>
      <BannerText className="bannerText">
        <h1>Foreign Branch</h1>
      </BannerText>
      <svg viewBox="0 70 500 70">
        <path
          d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
          fill="#162d6d"
        ></path>
      </svg>
      <StyledForeign>
        <p>
          <span>Branch office</span> is defined under sec 2(14), Companies Act
          2013 as “In relation to a company, means any establishment described
          as such by the company”
        </p><br />

        <p>
          It should be noted that, though the regulation of a foreign branch
          borrows the definition branch from the companies Act, it does not
          imply that only companies outside India can set up branches in India.
          A firm or Association of Person can set up a branch in India as per
          the regulation and all provision applicable to a branch set by a
          foreign company will be applicable to the branch set up by any
          Individual, firm or Body of Individuals.
        </p><br />

        <h2>Who can set up a Foreign Branch office in India?</h2>
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

        <h2>Procedure to set up a branch office in India</h2>
        <br />
        <p>
          Any Foreign entity intending to open a branch office has to submit an application form in FNC along with the supporting documents to RBI through the Authorised Dealer (The Bank)
        </p><br />

        <h2>Can a Company which is a subsidiary of group company and which does not satisfy the eligibility criteria start a branch office in India</h2>
        <br />
        <p>
          Yes. A Subsidiary group company can start a branch office in India even if it does not meet the eligibility criteria subject to the parent company meeting the eligibility criteria and also after obtaining a letter of comfort from the parent company as per the format in Annexure 2 prescribed by Reserve Bank of India in their master circular on establishment of Liaison/Branch/Project offices in India by foreign Entities
        </p><br />

        <h2>Is branch office of a foreign company taxable in India</h2>
        <br />
        <p>
          Yes. The profit made by the branch of a foreign company from any commercial activity in India is taxable as per the Income Tax Act, 1961. However, the countries which have DTAA (double tax avoidance agreement) with India can claim exemption for tax from their domicile countries for profit made from Indian operations.
        </p><br />
      </StyledForeign>

      <Footersection />
      <BacktoTopPage />
    </div>
  );
};

export default ForeignBranches;

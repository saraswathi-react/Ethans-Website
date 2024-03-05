import { BannerText } from "@modules/CompanyFormation/style";
import React from "react";
import { StyledForeign } from "./style";
import Footersection from "@modules/Footer/Footersection";
import BacktoTopPage from "@modules/BacktoTop/BacktoTopPage";
import { MdOutlineDiamond } from "react-icons/md";
import { Col, Row } from "antd";

const IndiaOffice = () => {
  
  const Datas = [
    {
      txt: "Copies of last three years Balance Sheet, profit & Loss account of the parent company",
    },
    {
      txt: "Undertaking that the Liaison office in India will not carry out any commercial or trading activity in India.",
    },
    {
      txt: "Company profile with brief history, product details and details of group companies etc.",
    },
    {
      txt: "English version of the Certificate of Incorporation or registration, Memorandum and Article of Association.",
    },
    {
      txt: "English version of the Board Resolution to open a Liaison office in India.",
    },
    {
      txt: "Notarized Power Attorney in favour of local representative.",
    },
    {
      txt: "Reason for opening a Liaison office in India",
    },
    {
      txt: "Undertaking that the Liaison office will not carry out any commercial or trading activity in india.",
    },
  ];

  return (
    <div>
      <BannerText className="bannerText">
        <h1>Liaison office In India</h1>
      </BannerText>
      <svg viewBox="0 70 500 70">
        <path
          d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
          fill="#162d6d"
        ></path>
      </svg>

      <StyledForeign>
        <h2>What is a Liaison Office:</h2>
        <br />
        <p>
          Section 2(e) of Foreign Exchange Management (Establishment in India of
          branch or office or other place of Business) Regulations, 2000 define
          Liaison office as; a place of business to act as a channel of
          communication between the principal place of business of head office
          by whatever name called and entities in India but which does not
          undertake any commercial/trading/industrial activity, directly or
          indirectly, and maintains itself out of inward remittance from abroad
          through normal banking channel.
        </p>
        <br />

        <h2>Who can open a liaison office in India:</h2>
        <br />
        <p>
          A Foreign Company with three years profit making record and with a net
          worth not less than USD 50,000/- can open a Liaison office in India.
        </p>
        <br />

        <h2>What is the procedure to open a Liaison office in India:</h2>
        <br />
        <p>
          Any Foreign Company intending to open a Liaison office has to submit
          an application form in FNC along with the supporting documents to RBI
          through the Authorised Dealer (The Bank)
        </p>
        <br />

        <h2>
          What are the documents required to be submitted to RBI for approval of
          Liaison Office in India:
        </h2>
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
        ))}
        <br />

        <h2>
          Other Than Obtaining Approval from RBI, does a Liaison office in India
          need to do any other registrations as per the Indian Law:
        </h2>
        <br />
        <p>
          After obtaining the approval from RBI to set up a Liaison office in
          India, they have to register with the register of companies by
          submitting form FC-1 along with the necessary documents
        </p>
        <br />

        <h2>Is Liaison office liable to taxation in India:</h2>
        <br />
        <p>
          The liaison office is not permitted to do any business or profit
          making activity in India. As per the definition in Foreign Exchange
          management (Establishment in India) a Liaison office can only act as a
          channel of communication between customers in India and its head
          office. However, the Liaison office has to obtain a PANCARD and every
          year the liaison office has to file an annual activity report to the
          Income Tax Authority in India.
        </p>
        <br />

        <p>
          The Liaison office in India also has to obtain a no objection/tax
          clearance certificate from the Income Tax Authority prior to closure
          of Liaison Office in India.
        </p>
        <br />

        <h2>
          How does a Liaison office in India differ from a branch of foreign
          company.
        </h2>
        <br />
        <p>
          Liaison office in India can Act only as an intermediary between
          customers in India and its head office abroad. Liaison office cannot
          do any activity with the objective to earn profit in India. However, a
          branch of foreign entity in India can do all commercial activity and
          its more or less like setting up of a company in India.
        </p>
        <br />
      </StyledForeign>

      <Footersection />
      <BacktoTopPage />
    </div>
  );
};

export default IndiaOffice;

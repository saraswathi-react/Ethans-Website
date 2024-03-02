import React from "react";
import { BussinessSer } from "./style";
import { Col, Row } from "antd";
import image from "../../../assets/Image/service.avif";
import Footersection from "@modules/Footer/Footersection";
import BacktoTopPage from "@modules/BacktoTop/BacktoTopPage";

const BussinessService = () => {
  return (
    <BussinessSer>
      <Row className="pageTitle">
        <Col
          span={24}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 className="title">Bussiness Service</h1>
            <div className="line"></div>
          </div>
        </Col>

        <Col span={24} md={12}  style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img src={image} alt="" />
        </Col>
      </Row>
      <Row gutter={[50, 30]} style={{ margin: "30px 0px 50px 0px" }}>
        <Col span={24} md={12}>
          <p className="box">
            Ethan’s, having presence in the Capital City of God’s Own Country,
            Thiruvanathapuram, India is offering all the services related to
            setting up and running of business in India and . Our services among
            others include advisory on Business form, Management of Foreign
            Direct Investment and FEMA Related Issues. We started our operations
            in 2014 in Trivandrum, capital of Kerala. Presently we are catering
            to our clients globally.
          </p>
        </Col>

        <Col span={24} md={12}>
          <p className="box">
            We Offer one stop solutions for Foreign Nationals/ Citizens who want
            to setup their own business in India without National boundaries. We
            assist them in Setting up of business in India requires compliance
            of various law in India and we offer a complete, fast and economical
            solutions. We expertise in Registration of OPC (One Person Company)
            Private Limited Companies, Public Limited Companies and LLP (Limited
            Liability Partnership) in India.
          </p>
        </Col>
        <Col span={24} md={12}>
          <p className="box">
            Team Ethan’s consist of Professionals who are trained to service
            their clients in different areas like finance and accounting. We
            also undertake services relating to project planning, Project
            finance, consultation and implementation.
          </p>
        </Col>
        <Col span={24} md={12}>
          <p className="box">
            Ethan’s offers services in all sectors, have high level
            responsibilities including governance structures and mechanisms,
            corporate conduct within an organization’s regulatory environment,
            board, shareholder and trustee meetings, the negotiation of
            contracts, risk management, property administration and organization
            and the interpretation of financial accounts.
          </p>
        </Col>
      </Row>
      <Footersection />
      <BacktoTopPage />
    </BussinessSer>
  );
};

export default BussinessService;

import React from "react";
import { StyledIncomeTax } from "./style";
import { Col, Row } from "antd";

const IncomeTax = () => {
  return (
    <StyledIncomeTax>
      <div className="pageTitle">
        <div>
          <h1 className="title">Income Tax</h1>
          <div className="line"></div>
        </div>
      </div>
      <Row>
        <Col span={24} md={12} className="firstCol">
          <div>
            <h1 className="title1">
              Income Tax on profit and gain from business or profession
            </h1>
            <p className="para1">
              Under Income Tax Act 1961, tax is levied on five major head of
              income
            </p>
          </div>
        </Col>
        <Col span={24} md={12}></Col>
      </Row>
    </StyledIncomeTax>
  );
};

export default IncomeTax;

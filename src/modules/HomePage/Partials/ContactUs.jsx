import React from "react";
import { StyledContact } from "../Style";
import { Col, Input, Row, Select } from "antd";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <StyledContact>
      <Row className="contactBox">
        <Col span={24} md={11} className="center">
          <div>
            <h1 className="leftTitle">
              Schedule a <div style={{ color: "#f96156" }}>free business</div>
              <div>consultation</div>
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <div
                  style={{ display: "flex", gap: "20px", paddingTop: "10px" }}
                >
                  <div style={{ color: "#f96156" }}>
                    <FaLocationDot size={40} />
                  </div>
                  <div style={{ fontSize: "18px" }}>
                    <p style={{ color: "#f96156" }}>ADDRESS</p>
                    <p style={{ color: "#fff", fontWeight: "700" }}>
                      BYBISA" TC II/3614 -Ground <br /> Floor, Kesavadasapuram ,
                      MG <br /> Road, Trivandrum ,Kerala <br /> -695004
                    </p>
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "20px", paddingTop: "10px" }}
                >
                  <div style={{ color: "#f96156" }}>
                    <FaPhoneVolume size={40} />
                  </div>
                  <div style={{ fontSize: "18px" }}>
                    <p style={{ color: "#f96156" }}>PHONE</p>
                    <p style={{ color: "#fff", fontWeight: "700" }}>
                      +91-9751553322
                    </p>
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "20px", paddingTop: "10px" }}
                >
                  <div style={{ color: "#f96156" }}>
                    <MdEmail size={40} />
                  </div>
                  <div style={{ fontSize: "18px" }}>
                    <p style={{ color: "#f96156" }}>EMAIL</p>
                    <p style={{ color: "#fff", fontWeight: "700" }}>
                      support@ethans.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col span={24} md={13} className="forms">
          <Row gutter={[24, 24]}>
            <Col span={24} md={12}>
              <Input
                size="large"
                placeholder="Your Name"
                prefix={<LuUser2 size={40} color="#162d6d" />}
              />
            </Col>
            <Col span={24} md={12}>
              <Input
                size="large"
                placeholder="Company Name"
                prefix={<LuUser2 size={40} color="#162d6d" />}
              />
            </Col>
            <Col span={24} md={12}>
              <Input
                size="large"
                placeholder="E - Mail"
                prefix={<LuUser2 size={40} color="#162d6d" />}
              />
            </Col>
            <Col span={24} md={12}>
              <Select
                defaultValue="I would like to discuss"
                onChange={handleChange}
                options={[
                  { value: "I would like to discuss", label: "I would like to discuss" },
                  { value: "Value1", label: "Value1" },
                  { value: "Value2", label: "Value2" },
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledContact>
  );
};

export default ContactUs;

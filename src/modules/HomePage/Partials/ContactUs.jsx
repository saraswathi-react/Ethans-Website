import React, { useState } from "react";
import { StyledContact } from "../Style";
import { Col, Input, Row, Select } from "antd";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import TextArea from "antd/es/input/TextArea";

const ContactUs = () => {
 

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    selectOption: 'I would like to discuss',
    message: ''
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledContact>
      <Row className="contactBox">
        <Col span={24} md={24} lg={11} className="center">
          <div className="contactRes">
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
                    <FaLocationDot className="icons" />
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
                    <FaPhoneVolume className="icons" />
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
                    <MdEmail className="icons" />
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

        {/* <Col span={24} md={24} lg={13} className="forms">
          <Row gutter={[50, 50]} className="row">
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
                prefix={<BsBagDash size={40} color="#162d6d" />}
              />
            </Col>
            <Col span={24} md={12}>
              <Input
                size="large"
                placeholder="E - Mail"
                prefix={<FiAtSign size={40} color="#162d6d" />}
              />
            </Col>
            <Col span={24} md={12}>
              <Select
                defaultValue="I would like to discuss"
                onChange={handleChange}
                options={[
                  {
                    value: "I would like to discuss",
                    label: "I would like to discuss",
                  },
                  { value: "Value1", label: "Value1" },
                  { value: "Value2", label: "Value2" },
                ]}
              />
            </Col>
            <Col span={24} md={24} className="textArea">
              <TextArea placeholder="Message" rows={5} />
            </Col>

            <Col span={24} md={24} style={{textAlign:"center"}}>
              <button className="subBtn" type="submit">SUBMIT</button>
            </Col>
          </Row>
        </Col> */}

      <Col span={24} md={24} lg={13} className="forms">
<form onSubmit={handleSubmit}>
        <Row gutter={[50, 50]} className="row">
          <Col span={24} md={12}>
            <Input
              size="large"
              placeholder="Your Name"
              prefix={<LuUser2 size={40} color="#162d6d" />}
              name="name"
              value={formData.name}
              onChange={handleChanges}
            />
          </Col>
          <Col span={24} md={12}>
            <Input
              size="large"
              placeholder="Company Name"
              prefix={<BsBagDash size={40} color="#162d6d" />}
              name="companyName"
              value={formData.companyName}
              onChange={handleChanges}
            />
          </Col>
          <Col span={24} md={12}>
            <Input
              size="large"
              placeholder="E - Mail"
              prefix={<FiAtSign size={40} color="#162d6d" />}
              name="email"
              value={formData.email}
              onChange={handleChanges}
            />
          </Col>
          <Col span={24} md={12}>
            <Select
              defaultValue="I would like to discuss"
              onChange={handleChanges}
              options={[
                { value: "I would like to discuss", label: "I would like to discuss" },
                { value: "Value1", label: "Value1" },
                { value: "Value2", label: "Value2" },
              ]}
              name="selectOption"
              value={formData.selectOption}
            />
          </Col>
          <Col span={24} md={24} className="textArea">
            <TextArea
              placeholder="Message"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChanges}
            />
          </Col>

          <Col span={24} md={24} style={{textAlign:"center"}}>
            <button className="subBtn" type="submit">SUBMIT</button>
          </Col>
        </Row>
    </form>
      </Col>
      </Row>
    </StyledContact>
  );
};

export default ContactUs;

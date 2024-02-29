import React from "react";
import { StyledService } from "../Style";
import image from '../../../assets/Image/circuit_transparent_2.svg'

const ServiceDifferent = () => {
  return (
    <StyledService>
      <div className="serviceBox">
        <div className="paragraph" style={{border:"none", zIndex:"1"}}>
          <p className="different">
            What <span style={{ color:"#f96156" }}>makes us</span> different
          </p>
          <button>CONTACT US</button>
        </div>
        <div className="paragraph" style={{zIndex:"1"}}>
          <h1 className="numbers">01</h1>
          <p className="title">WELL TRAINED PROFESSIONALS</p>
          <p className="content">Team Ethan’s consist of Professionals who are trained to service their clients in different areas like finance and accounting</p>
        </div>
        <div className="paragraph">
        <h1 className="numbers">02</h1>
          <p className="title">ONE STOP SOLUTIONS</p>
          <p className="content">We Offer one stop solutions for Foreign Nationals/ Citizens who want to setup their own business in India without National boundaries</p>
        </div>
        <div className="paragraph">
        <h1 className="numbers">03</h1>
          <p className="title">MULTI SECTOR SERVICES</p>
          <p className="content">have high level responsibilities including governance structures and mechanisms, corporate conduct</p>
        </div>
        <div className="imagePosition"><img src={image} alt="" /></div>
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
    </StyledService>
  );
};

export default ServiceDifferent;

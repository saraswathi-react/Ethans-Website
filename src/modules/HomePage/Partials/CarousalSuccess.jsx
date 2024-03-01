import React from "react";
import { StyledSucess } from "../Style";
import { Carousel } from "antd";
import image from "../../../assets/Image/men.png";

const CarousalSuccess = () => {
  return (
    <StyledSucess>
      <div className="serviceBox">
        <div className="title">
          <h1 className="title-head">
            Doing the{" "}
            <span style={{ color: "#f96156" }}>successful thing, </span>
            at the right time.
          </h1>
        </div>

        <Carousel autoplay>
          {/* first */}
          <div>
            <div className="carouselImgContent">
              <div className="box1"></div>
              <img
                src={image}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
              <div className="box2"></div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <h2 style={{ color: "#FFC200" }}>Christian Marcil</h2>
              <p style={{ color: "#B5BDD2", fontSize: "20px" }}>Grandier Co</p>
              <p
                style={{
                  color: "#B5BDD2",
                  padding: "20px 200px",
                  fontSize: "16px",
                }}
              >
                Consulting WordPress Theme is the way to go for financial
                institutions. We take pride in being a transparent and
                perfection oriented organization.
              </p>
            </div>
          </div>

          {/* second */}
          <div>
            <div className="carouselImgContent">
              <div className="box1"></div>
              <img
                src={image}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
              <div className="box2"></div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <h2 style={{ color: "#FFC200" }}>Cintia Le Corre</h2>
              <p style={{ color: "#B5BDD2", fontSize: "20px" }}>
                Harmony Corporation
              </p>
              <p
                style={{
                  color: "#B5BDD2",
                  padding: "20px 200px",
                  fontSize: "16px",
                }}
              >
                We thought a lot before choosing the Financial WordPress Theme
                because we wanted to sure our investment would yield results.
                This was clearly the best choice.
              </p>
            </div>
          </div>

          {/* third */}
          <div>
            <div className="carouselImgContent">
              <div className="box1"></div>
              <img
                src={image}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
              <div className="box2"></div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <h2 style={{ color: "#FFC200" }}>Mr. HAJA MOHIDEEN</h2>
              <p style={{ color: "#B5BDD2", fontSize: "20px" }}>Global Forex</p>
              <p
                style={{
                  color: "#B5BDD2",
                  padding: "20px 200px",
                  fontSize: "16px",
                }}
              >
                The team of Ethan helped us in getting the company incorporated
                as well as getting us the FFMC license in a short span of time
                within our affordable cost. Our relationship is going to go for
                ages.
              </p>
            </div>
          </div>

          {/* fourth */}
          <div>
            <div className="carouselImgContent">
              <div className="box1"></div>
              <img
                src={image}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
              <div className="box2"></div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <h2 style={{ color: "#FFC200" }}>Mr. ABY OOMMEN</h2>
              <p style={{ color: "#B5BDD2", fontSize: "20px" }}>
                Maxview Private Limited
              </p>
              <p
                style={{
                  color: "#B5BDD2",
                  padding: "20px 200px",
                  fontSize: "16px",
                }}
              >
                Ethans support in other formalities after incorporation also
                helped us in making the business operational at the earliest. We
                thank the Ethan’s team for their support
              </p>
            </div>
          </div>

          {/* fifth */}
          <div>
            <div className="carouselImgContent">
              <div className="box1"></div>
              <img
                src={image}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
              <div className="box2"></div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <h2 style={{ color: "#FFC200" }}>Bianca Hammound</h2>
              <p style={{ color: "#B5BDD2", fontSize: "20px" }}>
              Ericksson
              </p>
              <p
                style={{
                  color: "#B5BDD2",
                  padding: "20px 200px",
                  fontSize: "16px",
                }}
              >
                Prior to joining Consulting WP, Bianca ran a project management
                software firm in the U.S. and worked in consulting and
                investment banking.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </StyledSucess>
  );
};

export default CarousalSuccess;

import styled from "styled-components";

//   Banner section style  ---------

export const BannerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
  .bannerimg {
    width: 60%;
    float: right;
    .ImgSe {
      width: 100%;
      float: left;
    }
    & img {
      max-width: 100%;
      height: auto;
    }
  }

  .LeftSection {
    & h1 {
      margin: 50px;
      font-size: 4vw;
    }
    & p {
      text-align: start;
      width: 80%;
      margin-left: 50px;
      margin-bottom: 20px;
    }
  }

  .ButtonsBanner {
    display: flex;
    text-transform: uppercase;
    font-weight: 700;
    color: #000;
    margin: 50px;
    gap: 30px;
    .BtnOne {
      padding: 15px 30px;
      border: 2px solid #ff5a58;
      border-radius: 30px;
    }
    .BtnTwo {
      padding: 15px 30px;
      border: 2px solid #4aafff;
      border-radius: 30px;
    }
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
    display: contents;
    .bannerimg {
      width: 100%;
      float: right;
      display: flex;
      justify-content: end;
      & img {
        max-width: 80%;
        height: auto;
      }
    }

    .LeftSection {
      & h1 {
        text-align: center;
        font-size: 5vw;
      }
      & p {
        text-align: center;
        width: 80%;
        margin-left: 50px;
        margin-bottom: 20px;
      }
    }
    .ButtonsBanner {
      justify-content: center;
    }
  }
  @media screen and (max-width: 460px) {
    .ButtonsBanner {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
  }
`;

//   what we do style  ---------

export const ServiceAbt = styled.div`
  font-family: "Poppins";
  margin-top: 50px;
  margin: 60px 90px;
  .Topheading {
    text-align: center;
    & h1 {
      text-transform: uppercase;
      font-size: 4vw;
    }
  }
  .Topheading::before {
    content: "";
    background-color: #ff5a58;
    position: absolute;
    width: 60px;
    text-align: center;
    right: 0;
    /* bottom: 0px; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 7px;
    left: 0;
    border-radius: 100px;
    margin-top: -10px;
  }
  & p {
    text-align: center;
    margin: 20px;
  }
  .BoxService {
    background-color: #f96156;
    margin: 80px;
    text-align: center;
    font-family: "Poppins";
    padding: 15px;
    color: #fff;
    border-radius: 20px;
    & svg {
      font-size: 60px;
    }
    & h2 {
      font-size: 25px;
      font-weight: 500;
      margin: 10px 0;
    }
    & p {
      font-size: 16px;
    }
    .BtnReadMore {
      text-align: center;
      padding: 15px 30px;
      margin: 20px;
      font-size: 15px;
      border: 2px solid #fff;
      border-radius: 30px;
      display: inline-block;
    }
  }
  .BoxService:hover {
    background-color: #162d6d;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 1287px) {
    .BoxService {
      margin: 40px;
    }
  }
  @media screen and (max-width: 1174px) {
    .BoxService {
      margin: 20px;
    }
  }
  @media screen and (max-width: 766px) {
    margin: 60px 10px;
  }
`;

//   Total Service style  ---------

export const TotalService = styled.div`
  font-family: "Poppins" !important;
  overflow-x: hidden;
  margin-top: 40px;
  padding: 0px 50px;
  .ServBox {
    background: linear-gradient(to bottom, #f0f0f0 50%, #fff 50%);
    background-size: 100% 200%;
    background-position: bottom left;
    transition: all 0.5s ease-out;
    border-bottom-left-radius: 12200%;
    border-bottom-right-radius: 2220%;
    /* height: 100px; */
    margin: 20px;
  }

  .ServBox:hover {
    background-position: top left;
    color: #fff;
  }

  .Topheading {
    text-align: center;
    font-family: "Poppins" !important;
    margin: 80px;
    & h1 {
      font-size: 4vw;
      text-transform: uppercase;
    }
  }
  .Topheading::before {
    content: "";
    background-color: #ff5a58;
    position: absolute;
    width: 60px;
    text-align: center;
    right: 0;
    /* bottom: 0px; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 7px;
    left: 0;
    border-radius: 100px;
    margin-top: -10px;
  }
  .subheading {
    font-size: 27px;
    font-family: "Poppins" !important;
    color: #f96156;
    padding: 0 20px;
    font-weight: 800;
    margin-top: 25px;
  }
  .subheading2 {
    font-size: 27px;
    font-family: "Poppins" !important;
    color: #162d6d;
    padding: 0 20px;
    font-weight: 800;
    margin-top: 25px;
  }
  & p {
    font-size: 18px;
    color: #7a7878;
    font-weight: 600;
    padding: 20px;
    line-height: 30px;
    width: 80%;
  }
  .seeMore {
    cursor: pointer;
    color: #f96156;
    font-size: 20px;
    padding-left: 20px;
  }
  .seeMore2 {
    cursor: pointer;
    color: #162d6d;
    font-size: 20px;
    padding-left: 20px;
  }
  & svg {
    font-size: 20px;
    margin-top: 10px;
    color: #f96156;
    margin-left: 10px;
  }

  @media screen and (max-width: 1286px) {
    .subheading {
      margin-top: 0px;
    }
    .subheading2 {
      margin-top: 0px;
    }
  }
  @media screen and (max-width: 1023px) {
    padding: 0px 20px;
  }
  @media screen and (max-width: 767px) {
    .Topheading { 
      margin: 10px;
      font-size: 20px !important;
      & h1 {
      }
    }
    /* .ServBox {
      background: linear-gradient(to bottom, #f0f0f0 50%, #fff 50%);
      background-size: 100% 200%;
      background-position: bottom left;
      transition: all 0.5s ease-out;
      border-bottom-left-radius: 12200%;
      border-bottom-right-radius: 2220%;
      height: 190px;
      margin: 20px;
    } */
  }
`;

// Service Sucs -----

export const StyledService = styled.div`
  margin: 0px 50px;
  padding: 50px;
  border-radius: 0px 50px 0px 50px;
  position: relative;
  .serviceBox {
    border-radius: 0px 50px 0px 50px;
    background: #162d6d;
    display: flex;
    flex-wrap: wrap;
    padding: 100px 60px;
  }
  .paragraph {
    flex: 1;
    border-left: 1px solid #284083;
    padding: 0px 40px;
  }
  .different {
    font-size: 3vw;
    line-height: 40px;
    color: white;
  }
  button {
    text-transform: uppercase;
    background-color: #f96156;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #f96156;
    border-radius: 7px 7px 7px 7px;
    padding: 10px 35px 10px 35px;
    margin-top: 20px;
  }
  button:hover {
    color: #162d6d;
  }
  .numbers {
    font-size: 36px;
    color: #f96156;
  }
  .title {
    padding: 20px 0px;
    font-size: 14px;
    line-height: 26px;
    font-weight: bold;
    font-style: normal;
    color: #fff;
  }
  .content {
    color: #ffffff75;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.7px;
  }
  .imagePosition {
    position: absolute;
    top: 20px;
    left: 50px;
  }
  .box1 {
    width: 150px;
    height: 150px;
    background: #f96156;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .box2 {
    width: 150px;
    height: 150px;
    background: #f96156;
    border-radius: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  @media screen and (max-width: 1024px) {
    margin: 20px 20px;
    .serviceBox {
      padding: 60px 60px;
    }
    .paragraph:first-child {
      flex: 1 0 100%;
      text-align: center;
      padding-bottom: 32px;
    }
    .imagePosition {
      display: none;
    }
    .different {
      font-size: 4vw;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
    .paragraph {
      flex: 1 0 100%;
    }
    .box1 {
      display: none;
    }
    .box2 {
      display: none;
    }
    .different {
      font-size: 5vw;
    }
  }
  @media screen and (max-width: 498px) {
    .paragraph:first-child {
      padding: 0;
    }
    .serviceBox {
      padding: 30px 15px;
    }

    button {
      border-width: 2px 2px 2px 2px;
      border-radius: 7px 7px 7px 7px;
      padding: 6px 10px 6px 10px;
      margin: 15px 0px;
      font-size: 12px;
    }

    .different {
      font-size: 6vw;
    }
  }
`;

export const StyledSucess = styled.div`
  margin: 0px 50px;
  padding: 50px;
  border-radius: 0px 50px 0px 50px;

  .serviceBox {
    border-radius: 0px 50px 0px 50px;
    background: #162d6d;
    padding: 60px;
  }

  .title {
    text-align: center;
  }

  .title-head {
    font-size: 3vw;
    color: white;
  }

  .box1 {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #162d6d;
    border: 20px solid #f96156;
  }

  .box2 {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #162d6d;
    border: 20px solid #f96156;
  }

  .carouselImgContent {
    margin-top: 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .content {
    color: #b5bdd2;
    padding: 20px 150px;
    font-size: 16px;
  }

  .ant-carousel .slick-dots-bottom {
    bottom: -20px;
  }

  .ant-carousel .slick-dots li {
    width: 35px;
  }

  .ant-carousel .slick-dots li button {
    height: 10px;
  }

  .ant-carousel .slick-slider .slick-list {
    height: 46vh;
  }

  @media screen and (max-width: 1224px) {
    .ant-carousel .slick-slider .slick-list {
      height: 43vh;
    }

    @media screen and (max-width: 1024px) {
      margin: 0px 20px;
      .serviceBox {
        padding: 50px 0px;
      }
      .title-head {
        font-size: 5vw;
      }
      .content {
        padding: 0px 50px;
      }
      .ant-carousel .slick-slider .slick-list {
        height: 40vh;
      }
    }

    @media screen and (max-width: 768px) {
      margin: 40px 20px;
      padding: 0px;
      .ant-carousel .slick-slider .slick-list {
        height: 50vh;
      }

      .content {
        padding: 20px 30px;
      }
    }
  }
`;

export const StylesCounter = styled.div`
  .title-head {
    text-align: center;
    font-size: 4vw;
    color: #162d6d;
  }

  .contents {
    display: flex;
    gap: 20px;
  }

  .totalNumbers {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 70px 0px;
  }

  .number {
    font-size: 48px;
    color: #162d6d;
  }
  .content {
    color: #162d6d;
    font-size: 13px;
    margin-top: -10px;
  }
  .line {
    height: 30px;
    width: 5px;
    background-color: #f96156;
    margin-top: 17px;
  }
`;

export const StyledContact = styled.div`
font-family: 'Poppins';
  padding: 50px;
  height: 100vh;
  .contactBox {
    height: 100%;
    border-radius: 0px 50px 0px 50px;
    background: #162d6d;
  }

  .leftTitle {
    font-size: 3vw;
    color: #fff;
    font-family: 'Poppins';
  }

  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
  }
  .forms{
    background: #f96156;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 50px;
  }

  .ant-input-affix-wrapper-lg {
    padding: 15px 15px;
    font-size: 16px;
    line-height: 1.5;
    background: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    border-radius: 0px;
    color: #fff;
}

.ant-input::placeholder {
    color: #162d6d;
    padding-left: 25px;
    font-weight: 700;
}

.ant-select-single .ant-select-selector {
    padding: 35px 78px;
    color: #fff;
    font-size: 16px;
    line-height: 1.5714285714285714;
    font-family: inherit;
    display: flex;
    border-radius: 0;
    border: none;
    background: transparent;
    border-bottom: 2px solid #fff;
}
`;

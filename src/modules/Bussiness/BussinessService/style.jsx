import styled from "styled-components";

export const BussinessSer = styled.div`
  margin: 0px 30px 50px 30px;
  .pageTitle {
    padding: 100px 0px;
  }

  .title {
    font-size: 3.3vw;
    color: #162d6d;
  }

  img{
    width: 100%;
  }

  .line {
    width: 19vw;
    height: 3px;
    background: #f96156;
  }

  h2  {
        color: #f96156;
    }

    .DiamntPoint {
        color: #f96156;
        font-size: 25px;
        margin-top: 2px;
        font-family: 'Poppins';
    }
    .DiamtTxt {
        font-weight: 500;
        margin-bottom: 10px;
        color: #919191;
        font-size: 18px;
        line-height: 28px;
        font-family: 'Poppins';
    }

  @media screen and (max-width: 992px) {

    margin: 0px 50px;
    .title {
    font-size: 5vw;
  }

  }

  @media screen and (max-width: 768px) {
    margin: 0px 0px;

    .title {
    font-size: 7vw;
  }
  .pageTitle {
    padding: 50px 0px;
  }

  }


  
`;

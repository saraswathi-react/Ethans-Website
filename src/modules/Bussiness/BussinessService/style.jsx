import styled from "styled-components";

export const BussinessSer = styled.div`
  margin: 0px 100px;
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

  .box {
    width: fit-content;
    background: #f96156;
    color: #fff;
    padding: 30px;
    font-size: larger;
    line-height: 31px;
    border-radius: 10px;
    border: 5px solid #f96156;
  }

  .box:hover {
    background: #162d6d;
    border: 5px solid #f96156;
    box-shadow: 5px 5px 20px rebeccapurple;
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

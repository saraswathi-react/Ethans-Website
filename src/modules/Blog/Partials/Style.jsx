import styled from "styled-components";


export const BlogSectionStyle = styled.div`
margin: 40px 60px;
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
  & h2 {
    color: #f96156;
  }
  .DiamtTxt {
        font-weight: 500;
        margin-bottom: 10px;
        color: #919191;
        font-size: 18px;
        line-height: 28px;
        font-family: 'Poppins';
    }
    .ReadMore{
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: 20px;
        gap: 10px;
        & svg {
            color: #162d6d;
            font-size: 30px;
        }
        & p {
            font-weight: 500;
            font-weight: 600;
            color: #162d6d;
            font-size: 18px;
            font-family: 'Poppins';
        }
    }
    @media screen and (max-width: 500px) {
        margin: 40px 20px;
    }
  `


export const IncomeTaxStyle = styled.div`
  margin: 40px 60px;
  & h2 {
    color: #f96156;
  }
  & p {
    font-weight: 500;
    font-weight: 600;
    color: #919191;
    font-size: 18px;
    font-family: 'Poppins';
    text-indent: 40px;
  }
  & h4 {
    color: #162d6d;
    font-size: 20px;
  }
  #customers {
        border-collapse: collapse;
        width: 100%;
  }

    #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}

    #customers tr:hover {background-color: #ddd;}

    #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #162d6d;
    color: white;
    }
    .Tableresp {
        width: 70%;
        overflow-x: scroll;
    }

    .ant-input {
      line-height: 2.971429;
      font-family: 'Poppins';
      font-weight: 600;
      color: black;
      background-color: #e6e6e6;
    }
    .ant-input::placeholder {
      color: #9e9e9e;
      font-weight: 700;
    }
    .BtnStyle {
        display: flex;
        justify-content: center;
    }
    .ant-btn {
        font-size: 18px;
        line-height: 1.571429;
        height: 50px;
        padding: 4px 35px;
        border-radius: 36px;
        font-family: 'Poppins';
    }
    .ant-btn-primary {
        background: #162d6d;
    }
   

  @media screen and (max-width: 767px) {
      margin: 40px 20px;
      .Tableresp {
        width: 100%;
        overflow-x: scroll;
    }
  }
`

export const FfmcSectionstyle = styled.div`
margin: 40px 80px;
  & h2 {
    color: #f96156;
  }
  & p {
    font-weight: 500;
    font-weight: 600;
    color: #919191;
    font-size: 18px;
    font-family: 'Poppins';
    text-indent: 40px;
  }
  & h4 {
    color: #162d6d;
    font-size: 20px;
    margin: 15px 0;
  }

  .ant-input {
      line-height: 2.971429;
      font-family: 'Poppins';
      font-weight: 600;
      color: black;
      background-color: #e6e6e6;
    }
    .ant-input::placeholder {
      color: #9e9e9e;
      font-weight: 700;
    }
    .BtnStyle {
        display: flex;
        justify-content: center;
    }
    .ant-btn {
        font-size: 18px;
        line-height: 1.571429;
        height: 50px;
        padding: 4px 35px;
        border-radius: 36px;
        font-family: 'Poppins';
    }
    .ant-btn-primary {
        background: #162d6d;
    }
  @media screen and (max-width: 767px) {
      margin: 40px 20px;
  }
`


export const BannerText = styled.div`
    background-color: #162d6d;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    & h1 {
        font-size: 5vw;
    }
    @media screen  and (max-width: 767px) {
        & h1 {
        font-size: 8vw !important;
        }
    }

`
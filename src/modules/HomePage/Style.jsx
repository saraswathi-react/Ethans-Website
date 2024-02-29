import styled from "styled-components";


//   Banner section style  ---------

export const BannerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    .bannerimg{
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
        .BtnTwo{
            padding: 15px 30px;
            border: 2px solid #4aafff;
            border-radius: 30px;
        }
    }
    @media screen and (max-width: 769px) {
        flex-direction: column;
        display: contents;
        .bannerimg{
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

`

//   what we do style  ---------

export const ServiceAbt = styled.div`
    font-family: 'Poppins';
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
        content: '';
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
        font-family: 'Poppins';
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
        & p{
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
    .BoxService:hover{
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
`

//   Total Service style  ---------

export const TotalService = styled.div`
    font-family: 'Poppins' !important;
    margin-top: 40px;
    .ServBox{
       background-color: transparent;
    }
    
    .Topheading {
        text-align: center;
        font-family: 'Poppins' !important;
        margin: 80px;
        & h1 {
            text-transform: uppercase;
            font-size: 4vw;
        }
    }
    .Topheading::before {
        content: '';
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
        font-family: 'Poppins' !important;
        color: #f96156;
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
    & svg {
        font-size: 20px;
        margin-top: 10px;
        color: #f96156;
        margin-left: 10px;
    }
    .ServBox::hover {
        background-color: red;
    }
`
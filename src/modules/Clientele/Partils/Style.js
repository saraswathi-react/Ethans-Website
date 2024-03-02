import styled from "styled-components";


export const ClienteStyle = styled.div`
    font-family: 'Poppins';
    margin: 100px;
    .SectionGap {
        padding: 0 30px;
        font-family: 'Poppins';
        .Title {
          color: #162d6d;
          font-size: 20px;
          font-weight: 700;
        }
        .CompyAdd {
            font-size: 16px;
            padding: 10px 0;
            font-weight: 600;
        }
        .CompyDetails {
            font-size: 14px;
            color: #000;
            padding: 10px 0;
        }
    }
    .CompanyPresent {
        padding: 15px;
        display: flex;
        justify-content : space-evenly;
        align-items: center;
        background-color: #f96156;
        font-family: 'Poppins';
        text-transform: capitalize;
        cursor: pointer;
        color: #fff;
        border: 3px solid #0000;
        
        & svg {
            color: #fff;
            font-size: 25px;
        }
        & h4 {
            font-size: 18px;
            margin-left: 13px;
            font-weight: 500;
        }
    }
    .CompanyPresent:hover {
        background-color: #fff;
        border: 3px solid #f96156;
        color: #f96156;
        & svg {
            color: #f96156;
        }
       
    }
    .ClientServie{
        position: relative;
        font-family: 'Poppins';
        margin: 20px 0;
        background-color: #f96156;
        padding: 15px 20px;
        z-index: 99999999;
        color: #fff;
        & h4 {
            font-size: 20px;
            margin: 10px 0;
        }
        & p {
            line-height: 24px;
        }
    }

    .ButonSty {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        color: #f96156;
        cursor: pointer;
        background-color: #fff;
        margin: 20px 0;
        & h4 {
            font-size: 15px;
            margin-left: 9px;
        }
        & svg {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 767px) {
        .SectionGap {
           padding:  30px 0;
        }
    }
    @media screen and (max-width: 660px) {
        margin: 50px;
    }
    
`

export const CarouselCards = styled.div`
    position:relative;
    padding: 30px 10px;
    /* background: white; */

    .TestimTopIcon {
        background: linear-gradient(180deg, #007FFF 0%, #0051A2 100%);
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 18px;
        width: 37px;
        height: 36px;
        & svg {
        width: 25px;
        margin: 2px 5px;
        }
    }

    .contentStyle {
        color: '#000';
        font-weight : 500;
        background: '#fff';
        line-height: 25px;
        padding: 20px;
        border: 1px solid #aeabab;
    }

`

export const MiniFooter = styled.div`
    margin: 50px 0;
    padding: 40px 20px;
    background-color: #162d6d;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    & h2 {
        margin: 20px;
        color: #fff;
    }
    .ButnContect {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #fff;
        border: 3px solid #0000;
        background-color: #f96156;
        padding: 20px;
        & svg {
            margin-left: 10px;
            font-size: 25px;
        }
    }
    .ButnContect:hover {
        border: 3px solid #fff;
        background-color: #0000;
        transition: all 1s ease;
    }
    @media screen and (max-width: 833px) {
        flex-direction: column;
        text-align: center;
    }
`
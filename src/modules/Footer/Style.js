import styled from "styled-components";
import WaveImg from '@assets/Image/wave.png'

export const FooterStyle = styled.div`
    background-color: #162d6d;
    font-family: 'Poppins';
    position: relative;
    padding: 50px;
    color: #fff;
    & p {
        font-family: 'Poppins';
        font-size: 15px;
        font-weight: 500;
        margin: 30px 0;
    }
    & h3 {
        font-size: 25px;
        padding: 0 20px;
    }
    .CmpyFormation {
       display: flex;
       flex-direction: column;
       padding: 20px;
       margin: 0;
       & p {
            font-family: 'Poppins';
            font-size: 16px;
            font-weight: 600;
            margin: 5px 0;
       }
       & svg {
            font-size: 10px;
            margin-right: 5px;
       }
    }

    
    .IconsStyle {
        background-color: #162d6d;
        color: #fff;
        display: inline-block;
        padding: 5px;
        border-radius: 50%;
        border: 3px dashed;
        & svg {
            font-size: 20px;
        }
    }
    .OnlyFlex {
        display: flex;
        align-items: center;
        gap: 20PX;
        margin-bottom: 20px;
    }

    .SocialMedia {
        display: flex;
        align-items: center;
        margin: 0 0 20px 10px;
        .Svgbacg{
            padding: 10px;
            background-color: #f96156;
            border-radius: 50%;
            border: 3px solid #f96156;
            margin-right: 20px;
            cursor: pointer;
            & svg {
                font-size: 20px;
                color: #fff;
            }
        } 
        .Svgbacg:hover{
            border: 3px solid #162d6d;
            background-color: #fff;
            & svg {
                font-size: 20px;
                color: #162d6d;
            }
        }
    }

    @media screen and (max-width: 1182px) {
        .SocialMedia {
            margin: 40px 0;
        }
    }
`

export const Imgg =  styled.div`
   position: absolute;
`
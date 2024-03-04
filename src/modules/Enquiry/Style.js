import styled from "styled-components";

export const GetInTochStyle = styled.div`
    margin: 60px 40px;
    text-align: center;
    font-family: 'Poppins';
    & h2 {
        text-align: center;
        font-size: 30px;
        margin: 40px 0;
        color: #162d6d;
    }

    & h2::after {
        content: '';
            background-color: #f96156;
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
            /* margin-top: -10px; */
    }

    .IconsStyle {
        background-color: #162d6d;
        color: #fff;
        display: inline-block;
        padding: 10px;
        border-radius: 50%;
        border: 3px dashed;
        & svg {
            font-size: 30px;
        }
    }

    .IconText {
        font-family: 'Poppins';
        padding: 40px;
        font-weight: 600;
        font-size: 20px;
        color: #8b8b8b;
    }

    .SocialMedia {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0 90px;
        .Svgbacg{
            padding: 10px;
            background-color: #f96156;
            border-radius: 50%;
            border: 3px solid #f96156;
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
            margin: 0 10px;
        }
    }
`

export const FeedbackformStyle = styled.div`
    margin: 60px 70px;
    font-family: 'Poppins';
    & h1 {
        color: #162d6d;
        margin: 30px 0;
    }

    .FormStyle {
        padding: 40px;
        background-color: #cccccc;
        .ant-input {
           line-height: 2.971429;
           font-family: 'Poppins';
           font-weight: 600;
           color: black;
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
    }

    .Iframe {
       margin-left: 20px;
    }

    @media screen and (max-width: 768px){
        margin: 30px 20px;
        .Iframe {
             margin-left: 0px;
        }
    }
`
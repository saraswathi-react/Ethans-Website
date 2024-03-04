import styled from "styled-components";

export const StyledIncomeTax = styled.div`
 margin: 40px 60px;
    & h2 {
        color: #f96156;
    }

    p{
      font-weight: 500;
        margin-bottom: 10px;
        color: #919191;
        font-size: 18px;
        line-height: 28px;
        font-family: 'Poppins';
    }

    .OnlyFlex {
            display: flex;
            align-items: center;
            gap: 10PX;
            margin: 20px;
            & svg {
            color: #f96156;
        /* margin-right: 20px; */
        }
        & p {
            font-weight: 500;
            color: #919191;
            font-size: 18px;
        }
    }
    
    

    #customers {
        border-collapse: collapse;
        width: 100%;
        overflow: auto;
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
        width: 100%;
        overflow-x: scroll;
    }

    .DiamntPoint {
        color: #f96156;
        font-size: 25px;
        font-family: 'Poppins';
        margin-top: 2px;
    }
    .DiamtTxt {
        font-weight: 500;
        margin-bottom: 10px;
        color: #919191;
        font-size: 18px;
        line-height: 28px;
        font-family: 'Poppins';
    }

    @media screen  and (max-width: 555px) {
        margin: 40px 20px;
        .OnlyFlex {
            & svg {
            color: #f96156;
            font-size: 70px;
            }
        }
    }
`
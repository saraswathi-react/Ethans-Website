import styled from "styled-components";

//one person

export const OneStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
margin-left: 50px;

.para{
    font-size: 16px;
font-weight: 400;
padding-top: 20px;
}

`

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

// one person company style start

export const Person = styled.div`


.parag{
    font-size: 16px;
font-weight: 400;
padding-top: 20px;
margin-right: 50px;
}

.paragtwo{
    font-size: 16px;
font-weight: 400;
padding-top: 20px;
}

@media screen and (min-width: 768px) and (max-width: 995px){
    
    & img {
        display: none;
    }
}

@media  screen and (min-width: 1100px) {
    & img {
        padding-left: 100px;
    }
    .parag{
        margin-right: 0px;
        margin-left: 50px;
}
}
@media  screen and (min-width: 768px) {
    & img {
        
        /* padding-top: 200px; */
    padding-left: 20px;    }
    .parag{
        margin-right: 0px;
        margin-left: 50px;
}

}
@media  screen and (max-width: 425px) {

& img {
    & img {
        padding-left: 0px;
    }
}
  
}

`
// one person company style

// private limited start 
export const pick = styled.div`
    .picture{

    }
`
// private limited end

// -------- Trust page style

export const TrustSection = styled.div`
    margin: 40px 60px;
    & h2  {
        color: #f96156;
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

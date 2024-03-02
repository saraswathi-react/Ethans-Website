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

@media  screen and (max-width: 1100px) {
    .parag{
        margin-right: 0px;
        margin-left: 50px;
}
}
@media  screen and (min-width: 768px) {
    .parag{
        margin-right: 0px;
        margin-left: 50px;
}
  
}

`
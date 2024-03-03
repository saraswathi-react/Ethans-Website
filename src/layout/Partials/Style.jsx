import styled from 'styled-components'


export const LogoPlace = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 40px;
  cursor: pointer;
    & img{
      width: 150px;
    }

    @media screen and (max-width: 376px) {
      margin: auto;
    }
   
    @media screen and (min-width:377px) and (max-width: 992px) {
      margin: auto;
    }
`;

export const TopNavBar = styled.nav`
/* position: fixed; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: #fff; */
  padding: 30px;
  color: #262626;
  /* position:sticky; */
  top:0px;
  height: 100px;
  width: 100%;
  /* z-index: 999; */
  /* position: fixed; */
  transition: 1s ease-out !important ;
  box-shadow: 0 4px 114.7px 0 rgba(206, 157, 212, 0.54);

  a:-webkit-any-link {
    cursor: pointer;
    text-decoration: none;
    color: #0e0e0e;
    font-size: 16px;
    padding: 10px;
    font-weight: 500;
    text-align: start;
    margin: 0;
}

a:-webkit-any-link:active {
    color: #162d6d;
    /* padding: 0 0 5px 0; */
    /* border-bottom: 1px solid #545454 !important; */
}
a:-webkit-any-link:hover {
  color: #fff;
    /* border-bottom: 1px solid #545454 !important; */
}
  &.sticky {
    position: fixed;
    transition: all 1s ease-out !important;
  }

  & button {
    font-weight: 400;
    font-size:1rem;
    /* border-radius: 25px; */
    padding: 20px 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    float: left;
    margin-right:20px;
    border-color: black;
    color: black;
    top: 5px;
    /* &:hover {
      background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
      color: white;
    } */
  }

  

  .btnstylesmobleicon {
    :hover {
      color: white !important;
    }
  }

  .btnstylesmoble {
    color: black !important;
    border-color: black !important;
    box-shadow: none !important;

    :hover {
      color: white !important;
    }
  }

  .ContactDetail {
    background-color: #f96156;
    padding: 10px 30px;
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
  }

  @media screen and (max-width: 376px) {
    .btnstylesmoble {
      display: none;
    }
  }

  @media screen and (max-width: 1040px) {
    .ContactDetail { 
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    .whatsapplogo {
    display: none;
    }
 }
  
`;

export const NavCollapse = styled.div`
  /* position: relative; */
  /* display: flex;
  flex-direction: row; */
  /* padding-right: 70px; */
  margin-left: 40px;
  & img {
    width: 29px;
  }

  & span {
    color: var(--white-color);
    text-decoration: none;
    font-weight: 400;
    padding: 10px 2px;
    border-radius: 50px;
    cursor: pointer;
    /* transition: 0.5s; */
    &:hover {
      color: var(--brown-color);
      /* background: #252525; */
    }
    @media (max-width: 992px){
        color: #000;
    }
   
  }
  @media screen and (min-width: 1207px) and (max-width: 2900px){
        /* & span { padding: 10px 16px;} */
  }
  @media screen and (max-width:992px) {
    position: absolute;
    display: ${(props) => props.State};
    flex-direction: column;
    padding:20px;
    gap: 0;
    width: 100%;
    top: 70px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    right: 0;
    background-color: #f3f8ff;

    & a {
      display: block;
      /* text-align: center; */
      font-size:20px;
      border-radius: 0;
      line-height: 2rem;
    }
  }

  .submenu {
    position: absolute;
    top: 85px;
    background-color: white;
    padding: 20px;
    width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  right: 2px;
  backdrop-filter: blur(5px); 
  -webkit-backdrop-filter: blur(5px); 
  background-color: rgba(255, 255, 255, 0.5); 
  /* flex-direction: center; */
  display: flex;
  justify-content: space-around;
  font-size: 16px;


  @media screen and (max-width:768px) {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    
  }
  }
  .submenu a {
  color: black;
  /* margin-top: 10px; */
  text-decoration: none;
  padding: 24px 35px;
}

`;


export const Iconplace = styled.div`
  /* padding-right: 50px; */
  display: none;

  & svg {
    color: var(--white-color);
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width:992px) {
    display: flex;
  }
`;
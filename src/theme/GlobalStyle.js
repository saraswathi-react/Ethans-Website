import { createGlobalStyle } from 'styled-components'
import { THEME } from '@theme/index'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
}
  body {
    /* font-family: ${THEME.newyork_font}; */
    font-family: 'Poppins', sans-serif;
    /* background:#000000; */
    /* color:#fff; */
    width:100%;
    overflow-x: hidden;
    /* cursor:none; */
    scroll-behavior:smooth !important;
  }
  a {
  color: ${THEME.primary_color};
  text-decoration: none;
  cursor:none;
  }

header {
  height: 58px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07),
              0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #212529;
}

nav{
  background-color:rgb(153, 153, 230);
  height: 80px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 992px) {
    height: 100%;
  }

}
.navlogo{
  display: flex;
  align-items: center;
  /* padding: 0px 50px; */
  font-size: 40px;
  color: #fff;
}

.nav-area {
  display: flex;
  align-items: center;
  max-width: 100%;
  padding: 0 20px;
  height: 80px;
}

.logo {
  text-decoration: none;
  font-size: 25px;
  color: inherit;
  margin-right: 20px;
}

.menus {
  display: flex;
  list-style: none;
  align-items: center;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  } 

}

.menu-items {
  position: relative;
  font-size: 14px;
  padding: 0 5px;
}

.menu-items a {
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
}

.menu-items .subMenuItems {
  /* color: inherit; */
  /* font-size: inherit; */
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
}

.menu-items a,
.menu-items button {
  text-align: center;
  padding: 2rem;
  gap: 10px;
}
.menu-items li:hover {
  text-align: center;
}
.menu-items .subMenuItems{
  padding: 10px ;
  font-family: 'Poppins';
  text-align: center;
  font-size: 15px;
  color: #0e0e0e;
  font-weight: 500;
  /* color: #fff; */
}

.menu-items a:hover,
/* .menu-items button:hover, */
.menu-items .subMenuItems:hover{
  background-color: #162d6d;
  color: #fff;
  .arrowclr {
    color: #fff;
  }
}

.arrow::after {
  content: "";
  display: inline-block;
  margin-left: 0.28em;
  vertical-align: 0.09em;
  border-top: 0.42em solid;
  border-right: 0.32em solid transparent;
  border-left: 0.32em solid transparent;
}

.dropdown {
  position: absolute;
  right: 0;
  left: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-size: 0.875rem;
  z-index: 9999;
  min-width: 15rem;
  padding: 10px;
  list-style: none;
  background-color: #fff;
  text-align: start;
  /* border-radius: 0.5rem; */
  display: none;
}

.dropdown.show {
  display: block;
  /* margin-top: 100px; */
  cursor: pointer;
}

.dropdown.dropdown-submenu {
  position: absolute;
  left: 100%;
  top: -11px;
}

@media screen and (min-width:2048px){
  zoom:1.5;
}

@media screen and (min-width:3840px){
  zoom:2;
}

@media screen and (max-width: 992px) {
  .dropdown {
  position: relative;
  box-shadow: none;
  background-color: transparent;
  text-align: center;
  height: 100%;
}

.menu-items .subMenuItems:hover{
  background: none;
  color: #000;
  .arrowclr {
    color: #fff;
  }
}

.dropdown.dropdown-submenu {
  position: static;
}
}
`

export default GlobalStyle

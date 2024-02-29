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
@media screen and (min-width:2048px){
  zoom:1.5;
}

@media screen and (min-width:3840px){
  zoom:2;
}
`

export default GlobalStyle

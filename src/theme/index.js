/**
 * ANTD CONFIGURATION
 *
 * Full configuration options:
 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 *
 * **/
// import styled from "styled-components";

const ROOT = {
    // ======  Color  ======
    primary_color: '#FFB800',
    white: '#fff',
    secondary_white: 'F5F5F5',
    dark_black: '#060606',
  
    // ======  FONTS  ======
    newyork_font: "NewYork",
   helvetica_font: "Helvetica",
  
    // =====  SIZES  ========
    gutter_x: '1.5rem',
    gutter_y: '0',
    header_height:'80px',
  
    /*========== z index ==========*/
    z_10: 10,
    z_90: 90,
    z_95: 95,
    z_100: 100,
    z_110: 110,
    // =========  linear Gradiant ======
    linear_gradiant1: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)',
    linear_gradiant2: 'linear-gradient(160.56deg, rgba(112, 112, 112, 0.19) 12%, rgba(43, 43, 43, 0.12) 86.96%);',
    linear_gradiant3: 'linear-gradient(320deg, #FFB800 6%, #FFFFFF 100%);',
  
    // =========  Box Shadow ======
    bottom_box_shadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
    button_box_shadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
    buttonHover_box_shadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
  
    form_box_shadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    formHover_box_shadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'
  }
  
  // =======  Media Queryies Start  ========
  
  // ===========  Define breakpoints  ===========
  
  const SIZES = {
    // mobileS: '320px',
    // mobileM: '375px',
    MOBILEL: '576px',
    TABLET: '768px',
    LAPTOP: '992px',
    LAPTOPL: '1200px',
    DESKTOP: '1400px',
    DESKTOPL: '1800px',
  }
  
  // ===========  Define DEVICES  ===========
  
  const DEVICES = {
    MOBILEL: `(min-width: ${SIZES.MOBILEL})`,
    TABLET: `(min-width: ${SIZES.TABLET})`,
    LAPTOP: `(min-width: ${SIZES.LAPTOP})`,
    LAPTOPL: `(min-width: ${SIZES.LAPTOPL})`,
    DESKTOP: `(min-width: ${SIZES.DESKTOP})`,
    DESKTOPL: `(min-width: ${SIZES.DESKTOPL})`,
  }
  
  const ANTD_COLORS = {
    PRIMARY: '#1677ff', // primary color for all components
    LINK: '#2B69A9', // link color
    SUCCESS: '#52c41a', // success state color
    WARNING: '#faad14', // warning state color
    ERROR: '#f5222d', // error state color
    GEEK_BLUE: 'geekblue', //special blue AntD tags
    HEADING: '#242E39', // heading text color
    TEXT_PRIMARY: '#242E39', // major text color
    TEXT_SECONDARY: '#637487', // secondary text color
    DISABLED: 'rgba(0, 0, 0, .25)', // disable state color
    BORDER: '#d9d9d9', // major border color
  }
  
  
  
  /**
   * CONFIGURE THEME HERE
   * **/
  export const THEME = {
    ...ANTD_COLORS,
    ...ROOT,
    ...DEVICES,
    SS_PRIMARY: '#2B69A9',
    BORDER_COLOR: '#ccc',
  }
  
  const STYLES = {
    CONTAINER_PADDING: 32,
  }
  
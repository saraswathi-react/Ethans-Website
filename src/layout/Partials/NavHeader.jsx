import React, { useState } from "react";
import { Iconplace, LogoPlace, NavCollapse, TopNavBar } from "./Style";
// import Logo from '@assets/images/Logo.png'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { Button } from "@components/form";
import { FiShoppingCart } from "react-icons/fi";
// import whatsappLogo from '@assets/images/whatsappLogo.png'
import { MdOutlineMenu } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { Button, Flex } from "antd";
// import NavNew from '@assets/images/NavNew.png'




export const NavHeader = () => {
  
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(true);


  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  
  const handleToggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };


  const NavData = [
    {
      name: 'Home',
      path: '/',
    },
    // {
    //   name: 'Collection',
    //   path: '/collection',
    //   img: '',
    //   onClick: toggleSubmenu,
    //   submenu: [
    //     {
    //       name: 'Customized Gift Sets',
    //       path: '',
    //     },
    //     {
    //       name: 'Wedding Return Hampers',
    //       path: '',
    //     },
    //     {
    //       name: 'Desktop Utilities',
    //       path: '',
    //     },
    //   ],
    // },
    {
      name: 'About',
      path: '/about',
    },
  ];


  const phoneNumber = "15551234567";

 

//   const chunkArray = (arr, chunkSize) => {
//     const chunkedArray = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       chunkedArray.push(arr.slice(i, i + chunkSize));
//     }
//     return chunkedArray;
//   };

  // Maximum number of submenu items per row
  const itemsPerRow = 3;


  return (
    <div>
      <TopNavBar>
        <LogoPlace>
          {/* <img src={Logo} alt="Logo" /> */}<h2>kjhwe</h2>
          <NavCollapse State={`${isOpen ? 'none' : 'flex'}`}>
            {NavData.map(({ name, path, onClick, submenu }, i) => {
              return (
                <React.Fragment key={i}>
                  <NavLink
                    to={path}
                    onMouseEnter={() => {
                      if (name === 'Collection') {
                        handleToggleSubmenu();
                      }
                    }}
                    onMouseLeave={() => {
                      if (name === 'Collection') {
                        handleToggleSubmenu();
                      }
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {name}
                    {/* {name === 'Collection' && <img src={NavNew} alt='' />} */}

                  </NavLink>
                </React.Fragment>
              );
            })}
          </NavCollapse>
        </LogoPlace>


        <Flex gap={'20px'} >
          <Button
            className='whatsappbtnstylesicon'
            // icon={<img src={whatsappLogo}
            //  alt="Shopping Cart" style={{ marginRight: '0px', width: '28px', height: '28px' }} />}
          />


       
          <Button
            className='btnstylesicon'
            icon={<FiShoppingCart style={{ marginRight: '0px', color: 'black' }} className="btnstylesmobleicon" />}

          />

        </Flex>


        <Iconplace
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <MdOutlineMenu /> : <AiOutlineClose />}
        </Iconplace>
      </TopNavBar>
      <Outlet />
    </div>
  );
};

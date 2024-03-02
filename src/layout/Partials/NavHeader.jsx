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
import MenuItems from "./MenuItems";
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


  const menuItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Company Formation",
      submenu: [
        {
          title: "One Person Company",
          path: "/about"
        },
        {
          title: "Private Limited Company",
          path: "/privatelimited"

        },
        {
          title: "Public Limited Company",
          path: "/about"

        },
        {
          title: "Limited Liability Partnership",
          path: "/about"

        },
        {
          title: "Partnership",
          path: "/about"

        },
        {
          title: "Propreitorship",
          path: "/about"

        },
        {
          title: "Trust",
          path: "/about"

        },
      ],
    },
    {
      title: "Business Services",
      submenu: [
        {
          title: "Taxation",
          submenu: [
            {
              title: "Income Tax",
              path: "/frontend",
            },

          ],
        },
        {
          title: "Foreign Trade and Investments",
          submenu: [
            {
              title: "Foreign Branches In India",
              path: "/frontend",
            },
            {
              title: "Liaison office In India",
              path: "/backend",
            },
          ],
        },
        {
          title: "Others",
          submenu: [
            {
              title: "Import Export Code (IEC)",
              path: "/frontend",
            },
            {
              title: "FCRA Registrations",
              path: "/backend",
            },
            {
              title: "Udayam Registrations",
              path: "/backend",
            },
          ],
        },
      ],
    },
    {
      title: "Clientele",
      path: "/clientele"
    },
    {
      title: "Enquiry",
      path: "/about"
    },
    {
      title: "Blog",
      path: "/about"
    },

  ];


  return (
    <div>
      <TopNavBar>
        {/* <LogoPlace> */}
        {/* <img src={Logo} alt="Logo" /> */}<h2>kjhwe</h2>
        <NavCollapse State={`${isOpen ? 'none' : 'flex'}`}>
          <nav>
            <ul className="menus">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
              })}
            </ul>
          </nav>
        </NavCollapse>
        {/* </LogoPlace> */}


        <div className="ContactDetail">
          More Details
        </div>


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

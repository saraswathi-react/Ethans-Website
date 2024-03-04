import React, { useState } from "react";
import { Iconplace, LogoPlace, NavCollapse, TopNavBar } from "./Style";
// import Logo from '@assets/images/Logo.png'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { Button } from "@components/form";
import { FiShoppingCart } from "react-icons/fi";
// import whatsappLogo from '@assets/images/whatsappLogo.png'
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Flex } from "antd";
import MenuItems from "./MenuItems";
import Logo from '@assets/Image/logo.png'

export const NavHeader = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const [showSubmenu, setShowSubmenu] = useState(false);

  const [showBusinessServices, setShowBusinessServices] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleToggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Company Formation",
      submenu: [
        {
          title: "One Person Company",
          path: "/about",
        },
        {
          title: "Private Limited Company",
          path: "/privatelimited",
        },
        {
          title: "Public Limited Company",
          path: "/about",
        },
        {
          title: "Limited Liability Partnership",
          path: "/liabilitypartnership"
        },
        {
          title: "Partnership",
          path: "/partnership",
        },
        {
          title: "Propreitorship",
          path: "/propreitorship",
        },
        {
          title: "Trust",
          path: "/trust",
        },
      ],
    },
    {
      title: "Business Services",
      submenu: [
        {
          title: "Services",
          path: "/bussiness",
        },
        {
          title: "Taxation",
          submenu: [
            {
              title: "Income Tax",
              path: "/incomeTax",
            },
          ],
        },
        {
          title: "Foreign Trade and Investments",
          submenu: [
            {
              title: "Foreign Branches In India",
              path: "/foreignBranches",
            },
            {
              title: "Liaison office In India",
              path: "/indiaOffice",
            },
          ],
        },
        {
          title: "Others",
          submenu: [
            {
              title: "Import Export Code (IEC)",
              path: "/importexportcode",
            },
            {
              title: "FCRA Registrations",
              path: "/fcraregistration",
            },
            {
              title: "Udayam Registrations",
              path: "/udayamregistration",
            },
          ],
        },
      ],
    },
    {
      title: "Clientele",
      path: "/clientele",
    },
    {
      title: "Enquiry",
      path: "/enquiry",
    },
    {
      title: "Blog",
      path: "/blog"
    },
  ];
  const [name, setname] = useState("");
  const handleMenu = (title) => {
    console.log(title, "bugdy");
    if (title === "Company Formation" || title === "Business Services") {
      setShowBusinessServices((prev) => !prev);
      setname(title);
    }
  };

  return (
    <div>
      <TopNavBar>
        {/* <LogoPlace> */}
        <img src={Logo} alt="Logo" style={{width:'130px'}} />
        {/* <h2>kjhwe</h2> */}
        <NavCollapse State={`${isOpen ? "none" : "flex"}`}>
          <nav>
            <ul className="menus">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <div onClick={() => handleMenu(menu.title)}>
                    <MenuItems
                      name={name}
                      items={menu}
                      key={index}
                      depthLevel={depthLevel}
                    />
                  </div>
                );
              })}
            </ul>
          </nav>
        </NavCollapse>
        {/* </LogoPlace> */}

        <div className="ContactDetail">More Details</div>

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

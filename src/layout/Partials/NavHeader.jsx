import React, { useState } from "react";
import { Iconplace, NavCollapse, TopNavBar } from "./Style";
import { Outlet, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Tooltip } from "antd";
import Logo from '@assets/Image/logo.png'
import NewMenu from "./NewMenu";
import { HiInformationCircle } from "react-icons/hi";

export const NavHeader = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);


  const menuItems = [
    {
      title: "Home",
      path: "/",
      menu: '',
    },
    {
      title: "Company Formation",
      menu: 'drop1',
      submenu: [
        {
          title: "One Person Company",
          path: "/OnePersonCompany"
        },
        {
          title: "Private Limited Company",
          path: "/PrivateLimitedcompany"

        },
        {
          title: "Public Limited Company",
          path: "/publiclimitedcompany"
        },
        //         {
        //           title: "Private Limited Company",
        //           path: "/privatelimited",
        //         },
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
      menu: 'drop2',
      submenu: [
        {
          title: "Services",
          path: "/bussiness",
        },
        {
          title: "Taxation",
          sublist: 'drop1',
          submenu: [
            {
              title: "Income Tax",
              path: "/incomeTax",
            },
          ],
        },
        {
          title: "Foreign Trade and Investments",
          sublist: 'drop2',
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
          sublist: 'drop3',
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
      menu: '',
    },
    {
      title: "Enquiry",
      path: "/enquiry",
      menu: '',
    },
    {
      title: "Blog",
      path: "/blog",
      menu: '',
    },
  ];

 
  const handlenContact = () => {
    navigate('/enquiry')
  }

  return (
    <div>
      <TopNavBar>
        
        <img src={Logo} alt="Logo" style={{ width: '130px' }} />
        <NavCollapse State={`${isOpen ? "none" : "flex"}`}>
          <NewMenu data={menuItems} toggle={isOpen} />
        </NavCollapse>

        <div className="ContactDetail" onClick={handlenContact}>More Details</div>
        <Tooltip placement="top" title={'More Details'} className="ContactIcon">
          <div onClick={handlenContact}><HiInformationCircle /></div>
        </Tooltip>

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

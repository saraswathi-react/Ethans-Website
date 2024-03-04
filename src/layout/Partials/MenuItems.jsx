import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel,showBusinessServices,name }) => {

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        window.innerWidth > 992 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 992 && setDropdown(false);
    };

    return (
        <li className="menu-items" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <div className="SubMainMenu" style={depthLevel > 0 ? null : { padding: '0 10px' }}>
                    <div className="subMenuItems"  aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                        {items.title} {depthLevel > 0 ? <span className="arrowclr">&raquo;</span> : <span className="arrow" />}
                    </div>
                 <Dropdown name={name} showBusinessServices={showBusinessServices} depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown}/>
                </div>
            ) : (
                <Link to={`${items.path}`}>{items.title}</Link>
            )}

        </li>
    );
};


export default MenuItems;


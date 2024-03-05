import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const NewMenu = ({ data, toggle }) => {

    const [subMenu, setSubMenu] = useState('')
    const [subListMenu, setSubListMenu] = useState('')

    // sub:'drop1',
    console.log(subMenu,subListMenu, 'llll');

    const updateSubList = (arg)=>{
        console.log(arg,'sub');
        setSubListMenu(arg)

    }
    return (
        <Holder className={`${!toggle && "active"}`}>
            <ul>
                {
                    data?.map((item, i) => (
                        <li key={i} onClick={() => {
                            setSubMenu(item?.menu)
                            // updateSubList('')
                        }} className={``}>
                            <a href={item?.path ? item?.path : '#'}>{item?.title} {item?.submenu && <b><MdOutlineKeyboardArrowDown /></b>}</a>
                            {
                                item?.submenu && (
                                    <ul className={`list_submenu ${subMenu == item?.menu && "active"}`} >
                                        {item?.submenu?.map((sub, i2) => (
                                            <li key={i2} onClick={() => updateSubList(sub?.sublist)}>
                                                <a href={sub?.path ? sub?.path : '#'}>{sub?.title} {sub?.sublist} {sub?.submenu && <b><MdOutlineKeyboardDoubleArrowRight /></b>}</a>
                                                {
                                                    sub?.submenu && (
                                                        <ul className={`sublist_submenu ${subListMenu == sub?.sublist && "active" } `}>
                                                            {sub?.submenu?.map((sublist, i3) => (
                                                                <li key={i3}>
                                                                    <a href={sublist?.path ? sublist?.path : '#'}>{sublist?.title}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </Holder>
    )
}

export default NewMenu

const Holder = styled.nav`

    ul{
        position:relative;

        li{
            position:relative;
            list-style:none;
            float:left;
            @media screen and (max-width:992px) {
                width:100%;
            }
            a{
                cursor: pointer;
                text-decoration: none;
                color: #0e0e0e;
                font-size: 16px;
                padding: 20px;
                font-weight: 500;
                text-align: center;
                transition:0.3s ease-out;
                display:flex;
                justify-content:space-between;
                align-items:center;

                b{
                    display: flex;
                    align-items: center;
                }

                &:hover{
                    background:#2b93e3;
                }
            }

            ul{
                position:absolute;
                left:0;
                width:200px;
                background:#445964;
                transition:.5s ease-in;
                display:none;
                z-index:10;

            @media screen and (max-width:992px) {
                width:100%;
                position:relative;
                left:0;
            }
                li{
                    position:relative;
                    width:100%;
                    border:1px solid rgba(0,0,0,0.2);
                    @media screen and (max-width:992px) {
                       border:none;
                    }
                    ul{
                        top:0;
                        left:200px;
                        @media screen and (max-width:992px) {
                            width:100%;
                            position:relative;
                            left:0;
                            top:0;
                        }

                        @media screen and (min-width:992px) {
                            display:none;
                        }
                    }
                }
            }

                @media screen and (max-width:992px) {
                    .active{
                        display:inline-block;
                    }
                }

                @media screen and (min-width:992px) {
                &:hover > ul{
                    display:inline-block;
                    }
                }
        }
    }

    @media screen and (max-width:992px) {
        position:absolute;
        width:100%;
        top:100px;
        left:0;
        background:#445964;
        z-index:10;
        display:none;

        &.active{
            display:initial;
        }
        ul li:hover ul li{
            background:#546e7b;
        }
    }
`
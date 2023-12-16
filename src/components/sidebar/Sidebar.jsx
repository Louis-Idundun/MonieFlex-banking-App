import { SideNavItems } from "./SidebarContents";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import {Icon} from "@iconify/react";
import OurRoutes from "../../commons/OurRoutes"
import Assets from "../../assets/Assets";

export const Sidebar = () => {
    const logout = () => {
        window.alert("Hello")
    }

    return (
        <div 
            className="rounded-none border-r-neutral-200 border-r border-solid h-screen flex flex-col justify-between" 
            style={{
                backgroundColor: "#F6F0FF"
            }}
        >
            <div>{
                SideNavItems.map((item, index) => {
                    return <MenuItem key={index} item={item} />
                })
            }</div>
            <div>
                <img
                    loading="lazy"
                    srcSet={ Assets.cardAdvert }
                    alt="Card Advertisement"
                    style={{
                        paddingTop: "18px",
                        margin: "12px",
                        maxWidth: "none"
                    }}
                />
                <div className="justify-center items-stretch bg-violet-50 self-stretch flex w-full flex-col">
                    <Link
                        className="items-center self-stretch flex justify-between"
                        style={{
                            padding: "10px 30px",
                            marginTop: "20px",
                            gap: "20px"
                        }}
                        to={ OurRoutes.settings }
                    >
                        <Icon icon="iconamoon:settings-fill" width="24" height="24"/>
                        <div className="text-zinc-800 text-lg font-semibold tracking-wide grow whitespace-nowrap self-start">
                            Settings
                        </div>
                    </Link>
                    <div
                        onClick={logout}
                        className="items-center self-stretch flex justify-between cursor-pointer"
                        style={{
                            padding: "10px 30px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            gap: "20px"
                        }}
                    >
                        <Icon icon="ri:logout-circle-line" width="24" height="24"/>
                        <div className="text-zinc-800 text-lg font-semibold tracking-wide grow whitespace-nowrap self-start">
                            Log out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const MenuItem = ({item}) => {
    const [ isSubOpen, setIsSubOpen ] = useState(false);
    const [ isHover, setIsHovered ] = useState(false)

    const params = useLocation();

    const toggleSubMenu = () => {
        if(isSubOpen) {
            setIsSubOpen(false)
        } else {
            setIsSubOpen(true)
        }
    }
    const handleHovered = () => {
        setIsHovered(true);
    }
    const handleNotHovered = () => {
        setIsHovered(false);
    }

    if(item.subMenu) {
        return (
            <>
                <button
                    onClick={toggleSubMenu}
                    className={`
                        justify-between items-center content-center self-stretch flex-wrap
                        ${params.pathname.includes(item.path) ? 'bg-purple-300' : ''} flex w-full
                        ${isHover ? 'bg-purple-300' : ''}
                    `}
                    onMouseEnter={handleHovered}
                    onMouseLeave={handleNotHovered}
                    style={{
                        padding: "10px 30px",
                        marginTop: "10px",
                        gap: "20px"
                    }}
                >
                    <div className="items-center flex justify-between gap-5">
                        { item.icon }
                        <div className="text-zinc-600 text-lg font-semibold tracking-wide grow whitespace-nowrap self-start">
                            { item.title }
                        </div>
                    </div>
                    <div className={`${isSubOpen ? 'rotate-180' : ''} flex`}>
                        <Icon icon="lucide:chevron-down" width="24" height="24" />
                    </div>
                </button>
                { isSubOpen && (
                    <div className="flex flex-col space-y-4 mt-5 ml-8 content-start justify-start">
                        {item.subMenuItems?.map((subItem, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    to={subItem.path}
                                    className={`${
                                        subItem.path === params.pathname ? 'font-bold text-sky-950' : 'text-zinc-600'
                                    }`}
                                >
                                    <span>{subItem.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </>
        );
    } else {
        return (
            <Link
                to={item.path}
                className={`
                    items-center self-stretch flex justify-between 
                    ${params.pathname === item.path ? 'bg-purple-300' : ''}
                    ${isHover ? 'bg-purple-300' : ''}
                `}
                onMouseEnter={handleHovered}
                onMouseLeave={handleNotHovered}
                style={{
                    padding: "10px 30px",
                    marginTop: "10px",
                    gap: "20px"
                }}
            >
                { item.icon }
                <div className="text-zinc-600 text-lg font-semibold tracking-wide grow whitespace-nowrap self-start">
                    { item.title }
                </div>
            </Link>
        );
    }
};
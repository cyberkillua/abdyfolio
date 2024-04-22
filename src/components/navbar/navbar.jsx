import { useMotionValue } from "framer-motion";
import "./navbar.scss"
import React, { useState, useEffect, useRef } from 'react';
import { useTransform, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkmode } from "../../state/themeProviderSlice";
import { useSpring } from "framer-motion";
import { NavLink } from "react-router-dom"
import HomeIcon from "../../assets/home-icon";
import ProfileIcon from "../../assets/profile-icon";
import ContactIcon from "../../assets/contact-icon";
import DarkIcon from "../../assets/dark-icon";
import LightIcon from "../../assets/light-icon";
import ProjectIcon from "../../assets/project-icon"

const Navbar = ({ color, iconColor, activeIconColor }) => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)
    const dispatch = useDispatch()
    let mouseX = useMotionValue(Infinity)
    const ref = useRef(null)
    let distance = useTransform(mouseX, val => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })
    const widthSync = useTransform(distance, [-100, 0, 100], [40, 55, 40])
    const imgSync = useTransform(distance, [-150, 0, 150], [20, 30, 20])
    const imgScale = useSpring(imgSync)
    const [clicked, setClicked] = useState(false)
    const width = useSpring(widthSync)
    const NavItem = [
        {
            name: "Home",
            icon: <HomeIcon color={iconColor} imgScale={imgScale} />,
            link: "/",
            activeIcon: <HomeIcon color={"rgba(0, 39, 191, 1)"} imgScale={imgScale} />,
            hovered: false,
            Darkicon: ""
        },
        {
            name: "Profile",
            icon: <ProfileIcon color={iconColor} />,
            link: "/profile",
            hovered: false,
            activeIcon: <ProfileIcon color={"rgba(0, 49, 2, 1)"} />,
            Darkicon: ""
        },
        {
            name: "Projects",
            icon: <ProjectIcon color={iconColor} />,
            link: "/home",
            activeIcon: <HomeIcon color={"rgba(0, 49, 2, 1)"} />,
            hovered: false,
            Darkicon: ""
        },
        {
            name: "Contact",
            icon: <ContactIcon color={iconColor} />,
            link: "/home",
            activeIcon: <HomeIcon color={"rgba(0, 49, 2, 1)"} />,
            hovered: false,
            Darkicon: ""
        },
        {
            name: "Toggle Theme",
            icon: <LightIcon color={iconColor} />,
            link: "/home",
            hovered: false,
            Darkicon: <DarkIcon color={iconColor} />
        },
    ]
    const [isHovered, setIsHovered] = useState(NavItem)
    const Hovered = (index) => {
        setIsHovered(prevIsHovered => {
            return prevIsHovered.map((item, i) => {
                return index === i ? { ...item, hovered: true } : item
            })
        })
    }
    const Unhovered = (index) => {
        setIsHovered(prevIsHovered => {
            return prevIsHovered.map((item, i) => {
                return index === i ? { ...item, hovered: false } : item
            })
        })
    }


    return (
        <nav onMouseMove={(e) => { mouseX.set(e.pageX) }} onMouseLeave={(e) => mouseX.set(Infinity)}>
            {
                NavItem.map((item, index) => {
                    return (
                        <>
                            {
                                index < 4 ? (
                                    <NavLink to={item.link} style={({isActive}) => isActive ? {backgroundColor: "#fff"} : { backgroundColor: `${color}` }} >
                                        {
                                            ({ isActive }) => {
                                                return (
                                                    <AppIcon key={index} item={item} index={index} mouseX={mouseX} isActive={isActive} />
                                                )
                                            }

                                        }
                                    </NavLink>

                                ) : (
                                        <motion.button key={index} style={{ width, backgroundColor: `${color}` }} ref={ref} onClick={(e) => { dispatch(toggleDarkmode()) }}>
                                            {darkmode ? item.Darkicon : item.icon}
                                        </motion.button>
                                    )
                            }
                        </>
                    )
                })
            }
        </nav>
    );
}
export default Navbar;


function AppIcon({ item, index, mouseX, isActive }) {
    const ref = useRef(null)

    let distance = useTransform(mouseX, val => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

        return val - bounds.x - bounds.width / 2
    })
    const widthSync = useTransform(distance, [-150, 0, 150], [40, 65, 40])
    const imgSync = useTransform(distance, [-150, 0, 150], [1, 1.2, 1])
    const imgScale = useSpring(imgSync)
    const width = useSpring(widthSync)

    return (
        <motion.div ref={ref} className="icon" style={{width}}> { isActive ? item.activeIcon : item.icon}</motion.div>
    )
}


function NavItemLabel({ item }) {
    return (
        <div className="label_container">
            <p className="paragraph--1">{item.name}</p>
        </div>
    )
}
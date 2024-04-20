import { useMotionValue } from "framer-motion";
import "./navbar.scss"
import React, { useState, useEffect, useRef } from 'react';
import { useTransform, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkmode } from "../../state/themeProviderSlice";
import { useSpring } from "framer-motion";
import { Link } from "react-router-dom"

const Navbar = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)
    const dispatch = useDispatch()
    let mouseX = useMotionValue(Infinity)
    const ref = useRef(null)
    let distance = useTransform(mouseX, val => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })
    const widthSync = useTransform(distance, [-100, 0, 100], [40, 70, 40])
    const imgSync = useTransform(distance, [-150, 0, 150], [1, 1.2, 1])
    const imgScale = useSpring(imgSync)
    const [clicked, setClicked] = useState(false)
    const width = useSpring(widthSync)
    const NavItem = [
        {
            name: "Home",
            icon: "/home.svg",
            link: "/home",
            hovered: false,
            lighticon: ""
        },
        {
            name: "Profile",
            icon: "/profile.svg",
            link: "/about",
            hovered: false,
            lighticon: ""
        },
        {
            name: "Projects",
            icon: "/star.svg",
            link: "/home",
            hovered: false,
            lighticon: ""
        },
        {
            name: "Contact",
            icon: "/contact.svg",
            link: "/home",
            hovered: false,
            lighticon: ""
        },
        {
            name: "Toggle Theme",
            icon: "/sun-medium.svg",
            link: "/home",
            hovered: false,
            lighticon: "/moon.svg"
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
                                    <div  key={index}>
                                        <AppIcon item={item} index={index} mouseX={mouseX} Hovered={Hovered} Unhovered={Unhovered} />
                                    </div>
                                ) : (
                                    <div key={index}>
                                        <motion.button style={{ width }} ref={ref} onClick={(e) => { dispatch(toggleDarkmode()) }}>
                                            <img src={darkmode ? item.lighticon : item.icon} style={{ scale: imgScale }} alt="" />
                                        </motion.button>
                                    </div>
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


function AppIcon({ item, index, mouseX, Hovered, Unhovered }) {
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
        <motion.a href={item.link} ref={ref} style={{ width }} className={index === 0 ? "active" : ""}>
            <motion.img src={item.icon} alt={item.name} style={{ scale: imgScale }} />
        </motion.a>
    )
}


function NavItemLabel({ item }) {
    return (
        <div className="label_container">
            <p className= "paragraph--1">{ item.name }</p>
        </div>
    )
}
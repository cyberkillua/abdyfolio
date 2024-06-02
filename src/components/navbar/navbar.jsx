import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/button";
import "./navbar.scss";

const Navbar = () => {
    const [ navOpen, setNavopen ] = useState(false)
    const { isDesktop, isMobile } = useWindowSize()
    const NavItem = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Profile",
            link: "/profile"
        },
        {
            name: "Projects",
            link: "/projects"
        }
    ]

    const handleNavOpen = () => {
        setNavopen(prevNavOpen => !prevNavOpen)
    }

    useEffect(() => {
        if(navOpen){
            document.body.style.position = 'fixed';
        }
        return () => {
            document.body.style.position = 'initial';
        }
    }, [navOpen])
    

    return (
        <nav className="nav">
            <Link  to="/" className="logo">
                <img src="/logoA.svg" alt="logo" />
            </Link>
            <ul className="nav_center" style={isMobile && navOpen ? { transform: 'translateX(0)' } : {}}>
            { isMobile && (<a href="mailto:abdymovicxi@gmail.com"><Button text={"Say Hello!"} /></a>)}       
                {
                    NavItem.map((navItem, index) => {
                        return (
                            <NavLink to={navItem.link} className={({ isActive }) => isActive ? "nav_link active" : "nav_link"} key={index}>
                                <li className="nav_item paragraph--8">{navItem.name}</li>
                                <img src="/arrow-up-right.svg" className="icon-sm" alt="arrow-icon" />
                            </NavLink>
                        )
                    })
                }
            </ul>
            {
                isDesktop &&  (<a href="mailto:abdymovicxi@gmail.com"><Button text={"Say Hello!"} /></a>)
            }

           {
             isMobile && (
                <div className="hamburger" data-open={`${navOpen}`} onClick={handleNavOpen}>
                    <div className="hamburger__line hamburger_line--one"></div>
                    <div className="hamburger__line hamburger_line--two"></div>
                    <div className="hamburger__line hamburger_line--three"></div>
                </div>
             )
           }
        </nav>
    );
}

export default Navbar;
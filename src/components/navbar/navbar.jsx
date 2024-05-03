import { NavLink } from "react-router-dom";
import Button from "../Button/button";
import "./navbar.scss";

const Navbar = () => {
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


    return (
        <nav className="nav">
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
            </div>
            <ul className="nav_center">
                {
                    NavItem.map((navItem, index) => {
                        return (
                            <NavLink to={navItem.link} className={({ isActive }) => isActive ? "nav_link active" : "nav_link" } key={index}>
                                <li className="nav_item paragraph--8">{navItem.name}</li>
                                <img src="/arrow-up-right.svg" className="icon-sm" alt="arrow-icon" />
                            </NavLink>
                        )
                    })
                }
            </ul>

            <Button text={"Hire me!"} />

        </nav>
    );
}

export default Navbar;
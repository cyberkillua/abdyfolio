import { useSelector } from "react-redux";
import PageTransition from  "../../components/page-transition/pageTransition"
import Button from "../../components/Button/button"
import "../projects/projects.scss"
import Navbar from "../../components/navbar/navbar"

const Projects = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    const projects = [
        {
            img: "/scribblet.png",
            name: "Scribblet.AI",
            platform: "iOS"
        },
        {
            img: "/fezzant.png",
            name: "Fezzant",
            platform: "Website"
        },
        {
            img: "/focusFusion.png",
            name: "FocusFusion.AI",
            platform: "MacOS"
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS"
        },
        {
            img: "/baz.png",
            name: "BAZ",
            platform: "Fashion"
        },
        {
            img: "/cykea.png",
            name: "Cykea",
            platform: "Website"
        },
        {
            img: "/scribblet.png",
            name: "Scribblet.AI",
            platform: "iOS"
        },
        {
            img: "/scribblet.png",
            name: "Scribblet.AI",
            platform: "iOS"
        },
        {
            img: "/scribblet.png",
            name: "Scribblet.AI",
            platform: "iOS"
        },

    ]
    return (
        <div className="wrapper"  darkmode={`${darkmode}`}>
             <Navbar color={" rgba(107, 0, 191, 1)"} iconColor={"rgba(255, 255, 255, 1)"} />
            <div className="profile_header">
                <Button text={"contact Me"} darkmodeBG={"rgba(255, 255, 255, 1)"} darkmodeTX={"rgba(130, 0, 191, 1)"} />
                {/* <HomeIcon color={"#ffffff"} /> */}
            </div>
            <div className="projects">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="projects_container" key={index}>
                                <img src={project.img} alt={project.name} />
                                <p className="projects_name" darkmode={`${darkmode}`}>{project.name}</p>
                                <p className="projects_platform" darkmode={`${darkmode}`}>{project.platform}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
}

export default PageTransition(Projects);
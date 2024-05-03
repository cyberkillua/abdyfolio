import { useSelector } from "react-redux";
import { useEffect } from "react";
import PageTransition from "../../components/page-transition/pageTransition"
import Button from "../../components/Button/button"
import Navbar from "../../components/navbar/navbar";
import "../projects/projects.scss"

const Projects = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    
    const playVideo = (id) => {
        const vid = document.querySelectorAll("video")
        vid.forEach((vid, index) => {
            if (id === index) {
                vid.play()
            }
        });
    }
    const pauseVideo = (id) => {
        const vid = document.querySelectorAll("video")
        vid.forEach((vid, index) => {
            if (id === index) {
                vid.pause()
            }
        });
    }

    const projects = [
        {
            img: "/scribblet.png",
            name: "Scribblet",
            platform: "iOS",
            video: false,
            link: "/scribblet"
        },
        {
            img: "/fezzant.png",
            name: "Fezzant",
            platform: "Website",
            video: false,
            link: "/#"
        },
        {
            img: "/focusFusion.png",
            name: "FocusFusion.AI",
            platform: "MacOS",
            video: false,
            link: "/fusionFocus"
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS",
            video: false,
            link: "/#"
        },
        {
            img: "/baz.png",
            name: "BAZ",
            platform: "Fashion",
            video: false,
            link: "/#"
        },
        {
            img: "/cykea.png",
            name: "Cykea",
            platform: "Website",
            video: false,
            link: "/#"
        },
        {
            img: "/scribblet.png",
            name: "Scribblet",
            platform: "iOS",
            video: false,
            link: "/scribblet"
        },
        {
            img: "/fezzant.png",
            name: "Fezzant",
            platform: "Website",
            video: false,
            link: "/#"
        },
        {
            img: "/focusFusion.png",
            name: "FocusFusion.AI",
            platform: "MacOS",
            video: false,
            link: "/fusionFocus"
        },

    ]
    return (
        <div className="wrapper">
            <Navbar/>
            <div className="profile_header">
           
            </div>
            <div className="projects">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="projects_container" key={index}>
                                {
                                    project.video ? (
                                        <video loop muted src={project.img} onMouseEnter={() => playVideo(index)} onMouseLeave={() => pauseVideo(index)} > </video>
                                    ) : (<img src={project.img} alt={project.name} />)
                                }
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
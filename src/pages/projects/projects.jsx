import PageTransition from "../../components/page-transition/pageTransition"
import Navbar from "../../components/navbar/navbar";
import scroll from "../../animations/scroll"
import "../projects/projects.scss"
import ReturnBtn from "../../components/returnUp/returnUpBtn";
import fusionFocus from "../../focusfusion.json"
import Baz from "../../Baz.json"
import Fezzant from "../../fezzant.json"
import Scribblet from "../../Scribblet.json"
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
const Projects = () => {
    scroll()

    const projects = [
        {
            img: "/scribblet.webp",
            name: "Scribblet",
            platform: "iOS",
            link: "/scribblet",
            animation: true,
            animationFile: Scribblet
        },
        {
            img: "/fezzant.webp",
            name: "Fezzant",
            platform: "Website",
            link: "/#",
            animation: true,
            animationFile: Fezzant
        },
        {
            img: "/focusFusion.jpg",
            name: "FocusFusion.AI",
            platform: "MacOS",
            link: "/fusionFocus",
            animation: true,
            animationFile: fusionFocus
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS",
            link: "/#",
            animation: false
        },
        {
            img: "/baz.webp",
            name: "BAZ",
            platform: "Fashion",
            link: "/#",
            animation: true,
            animationFile: Baz
        },
        {
            img: "/cykea.jpg",
            name: "Cykea",
            platform: "Website",
            link: "/#",
            animation: false
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS",
            link: "/#",
            animation: false
        },
        {
            img: "/baz.webp",
            name: "BAZ",
            platform: "Fashion",
            link: "/#",
            animation: true,
            animationFile: Baz
        },
        {
            img: "/cykea.jpg",
            name: "Cykea",
            platform: "Website",
            link: "/#",
            animation: false
        },
    ]
    return (
        <div className="wrapper">
            <Navbar />
            <div className="project_header">
                <h2>All Projects</h2>
            </div>
            <div className="project">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="project_container" key={index}>
                                {
                                    project.animation ? (
                                        <Link to={project.link}>
                                            <div className='animation_cont'>
                                                <Lottie animationData={project.animationFile} className='project_img' loop={true} />
                                            </div>
                                        </Link>
                                    ) : (
                                        <Link to={project.link}>
                                            <div className='animation_cont'>
                                                <img src={project.img} alt={project.name} className='project_img' />
                                            </div>
                                        </Link>
                                    )
                                }

                                <p className="project_name" >{project.name}</p>
                                <p className="project_platform">{project.platform}</p>
                            </div>
                        )
                    })
                }
            </div>
            <ReturnBtn />
        </div>

    );
}

export default PageTransition(Projects);
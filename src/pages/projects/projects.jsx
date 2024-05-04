import PageTransition from "../../components/page-transition/pageTransition"
import Navbar from "../../components/navbar/navbar";
import scroll from "../../animations/scroll"
import "../projects/projects.scss"
import ReturnBtn from "../../components/returnUp/returnUpBtn";

const Projects = () => {
    scroll()

    const projects = [
        {
            img: "/scribblet.webp",
            name: "Scribblet",
            platform: "iOS",
            link: "/scribblet"
        },
        {
            img: "/fezzant.webp",
            name: "Fezzant",
            platform: "Website",
            link: "/#"
        },
        {
            img: "/focusFusion.jpg",
            name: "FocusFusion.AI",
            platform: "MacOS",
            link: "/fusionFocus"
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS",
            link: "/#"
        },
        {
            img: "/baz.webp",
            name: "BAZ",
            platform: "Fashion",
            link: "/#"
        },
        {
            img: "/cykea.jpg",
            name: "Cykea",
            platform: "Website",
            link: "/#"
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS",
            link: "/#"
        },
        {
            img: "/baz.webp",
            name: "BAZ",
            platform: "Fashion",
            link: "/#"
        },
        {
            img: "/cykea.jpg",
            name: "Cykea",
            platform: "Website",
            link: "/#"
        },

    ]
    return (
        <div className="wrapper">
            <Navbar />
            <div className="profile_header">

            </div>
            <div className="projects">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="projects_container" key={index}>
                                <img src={project.img} alt={project.name} />
                                <p className="projects_name" >{project.name}</p>
                                <p className="projects_platform" >{project.platform}</p>
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
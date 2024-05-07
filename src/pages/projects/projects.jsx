import PageTransition from "../../components/page-transition/pageTransition"
import Navbar from "../../components/navbar/navbar";
import scroll from "../../animations/scroll"
import "../projects/projects.scss"
import ReturnBtn from "../../components/returnUp/returnUpBtn";
import { Link } from "react-router-dom";
import '@dotlottie/player-component';

const Projects = () => {
    scroll()

    const projects = [
        {
            img: "/scribblet.webp",
            name: "Scribblet",
            platform: "iOS",
            link: "/scribblet",
            animation: true,
            animationLink: "https://cdn.lottielab.com/l/3RgoTSGAd5vARf.json"
        },
        {
            img: "/fezzant.webp",
            name: "Fezzant",
            platform: "Website",
            link: "/#",
            animation: false,
        },
        {
            img: "/focusFusion.jpg",
            name: "FocusFusion.AI",
            platform: "MacOS",
            link: "/fusionFocus",
            animation: true,
            animationLink: "https://cdn.lottielab.com/l/9bp3Z3A4CpEnqc.json"
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
            animationLink: "https://cdn.lottielab.com/l/5AWYYbcg4LSmQv.json"
        },
        {
            img: "/cykea.jpg",
            name: "Cykea",
            platform: "Website",
            link: "/#",
            animation: false
        },
        {
            img: "/cykea.jpg",
            name: "Cykea",
            platform: "Website",
            link: "/#",
            animation: false
        },
        {
            img: "/cykea.jpg",
            name: "Cykea",
            platform: "Website",
            link: "/#",
            animation: false
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
            <div className="profile_header">

            </div>
            <div className="projects">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="projects_container" key={index}>
                                {
                                    project.animation ? (
                                        <Link to={project.link}>
                                            <dotlottie-player className="video" src={project.animationLink} autoplay loop style={{ width: '100%', height: '460px' }} />
                                        </Link>
                                    ) : (
                                        <Link to={project.link}>
                                            <img src={project.img} alt={project.name} />
                                        </Link>
                                    )
                                }
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
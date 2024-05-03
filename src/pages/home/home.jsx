import Navbar from '../../components/navbar/navbar';
import ReturnBtn from '../../components/returnUp/returnUpBtn';
import { useSelector } from "react-redux";
import Button from "../../components/Button/button"
import PageTransition from "../../components/page-transition/pageTransition"
import './home.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    useEffect(() => {
        document.body.style = darkmode ? "rgba(207, 246, 255, 1)" : " #1632A0";
    }, [])
    // console.log(darkmode)
    const Backgrounds = [
        {
            path: "/GOAT_1.png"
        },
        {
            path: "GOAT_3.png"
        },
        {
            path: "GOAT_2.png"
        }
    ]

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
    ]
    return (
        <main className="home_container" darkmode={`${darkmode}`}>
            <Navbar />
            {/* <Navbar /> */}
            <section className="hero" >
                <h2 className="hero_header header--2">Digital<br></br>Product Designer</h2>
                <p className="paragraph--2 hero_text" darkmode={`${darkmode}`}>
                    I am a Designer and Product Manager currently at Fezzant.
                    I love to build powerful and elegant products.
                </p>

            </section>

            <section className="project">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="project_container" key={index}>
                                {
                                    project.video ? (
                                        <Link>
                                            <video loop muted src={project.img} onMouseEnter={() => playVideo(index)} onMouseLeave={() => pauseVideo(index)}> </video>
                                        </Link>
                                    ) : (
                                        <Link to={project.link}>
                                            <img src={project.img} alt={project.name} />
                                        </Link>
                                    )
                                }
                                <p className="project_name" darkmode={`${darkmode}`}>{project.name}</p>
                                <p className="project_platform" darkmode={`${darkmode}`}>{project.platform}</p>
                            </div>
                        )
                    })
                }
            </section>
            {
                Backgrounds.map((background, index) => {
                    return (
                        <div className={`background background-${index}`}>
                            <img src={background.path} alt={background.name} />
                        </div>
                    );
                })
            }
            <ReturnBtn />
        </main>
    );
}

export default PageTransition(Home);
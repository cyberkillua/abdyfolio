import Navbar from '../../components/navbar/navbar';
import ReturnBtn from '../../components/returnUp/returnUpBtn';
import { useSelector } from "react-redux";
import Button from "../../components/Button/button"
import PageTransition from "../../components/page-transition/pageTransition"
import './home.scss'
import { useEffect, useRef } from 'react';

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
            img: "/Scribblet.mp4",
            name: "Scribblet",
            platform: "iOS",
            video: true
        },
        {
            img: "/Fezzant.mp4",
            name: "Fezzant",
            platform: "Website",
            video: true
        },
        {
            img: "/FOCUSFUSION.mp4",
            name: "FocusFusion.AI",
            platform: "MacOS",
            video: true
        },
        {
            img: "/widgetX.png",
            name: "WidgetX",
            platform: "VisionOS",
            video: false
        },
        {
            img: "/baz.png",
            name: "BAZ",
            platform: "Fashion",
            video: false
        },
        {
            img: "/cykea.png",
            name: "Cykea",
            platform: "Website",
            video: false
        },
    ]
    return (
        <main className="home_container" darkmode={`${darkmode}`}>
            <Button text={"contact me"} darkmodeBG={"rgba(0, 39, 191, 1)"} darkmodeTX={"rgba(207, 246, 255, 1)"} />
            <section className="hero" >
                <p className="paragraph--2 hero_text" darkmode={`${darkmode}`}>
                    I am a Designer and Product Manager currently at Fezzant.
                    I love to build powerful and elegant products and
                    I’m passionate about technology and what it can do for people.
                </p>

                <Navbar iconColor={"rgba(255, 255, 255, 1)"} activeIconColor={"rgba(0, 39, 191, 1)"} />
            </section>

            <section className="project">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="project_container" key={index}>
                                {
                                    project.video ? (
                                        <video loop muted src={project.img} onMouseEnter={() => playVideo(index)} onMouseLeave={() => pauseVideo(index)} > </video>
                                    ) : (<img src={project.img} alt={project.name} />)
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
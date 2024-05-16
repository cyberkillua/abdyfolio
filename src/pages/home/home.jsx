import Navbar from '../../components/navbar/navbar';
import ReturnBtn from '../../components/returnUp/returnUpBtn';
import useWindowSize from '../../hooks/useWindowSize';
import scroll from "../../animations/scroll";
import PageTransition from "../../components/page-transition/pageTransition";
import './home.scss'
import fusionFocus from "../../focusfusion.json"
import Baz from "../../Baz.json"
import Fezzant from "../../fezzant.json"
import Scribblet from "../../Scribblet.json"
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { Preloader } from '../../utilis/preloader';
import gsap from 'gsap';
import { useEffect } from 'react';

const Home = () => {
    scroll()
    const { loaderVisible, loadedImages } = Preloader()
    const { isDesktop } = useWindowSize()
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
            animationFile: Fezzant,
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
    ]

    return (
        <main className="home_container">
            <Navbar />
            <section className="hero" >
                <h2 className="hero_header header--2">Digital<br></br> Product Designer</h2>
                <p className="paragraph--2 hero_text">
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
            </section>
            {
                Backgrounds.map((background, index) => {
                    return (
                        <div className={`background background-${index}`} key={index}>
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
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

const Home = () => {
    scroll()
    const { loaderVisible, loadedImages } = Preloader()
    const { isDesktop } = useWindowSize()
    const Backgrounds = [
        {
            path: "A1.png"
        },
        {
            path: "A2.png"
        },
        {
            path: "A3.png"
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
            img: "/Banshee.png",
            name: "Banshee",
            platform: "MacOS & WindowsOS",
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
            img: "/Baz.png",
            name: "BAZ",
            platform: "Fashion",
            link: "/#",
            animation: false,
            animationFile: Baz
        },
    ]

    return (
        <main className="home_container">
            <Navbar />
            <section className="hero" >
                <h2 className="hero_header header--2">Digital<br></br> Product Designer</h2>

                <div className="right">
                    <p className="paragraph--2 hero_text">
                        Crafting Inclusive & Intelligent Experiences.
                        Let's craft something amazing together.
                    </p>
                    <p className='paragraph--2 hero_text hero_text_bottom'>Lets talk - <a href="mailto:abdymovicxi@gmail.com">abdymovicxi@gmail.com</a></p>
                </div>
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
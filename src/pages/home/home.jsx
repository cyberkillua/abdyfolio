import Navbar from '../../components/navbar/navbar';
import ReturnBtn from '../../components/returnUp/returnUpBtn';
import useWindowSize from '../../hooks/useWindowSize';
import scroll from "../../animations/scroll";
import PageTransition from "../../components/page-transition/pageTransition"
import './home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    scroll()
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
    ]
    return (
        <main className="home_container">
            <Navbar />
            <section className="hero" >
                <h2 className="hero_header header--2">Digital{ isDesktop && (<br></br>)} Product Designer</h2>
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
                                <Link to={project.link}>
                                    <img src={project.img} alt={project.name} />
                                </Link>
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
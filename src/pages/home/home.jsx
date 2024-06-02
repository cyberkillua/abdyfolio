import './home.scss';
import Navbar from '../../components/navbar/navbar';
import ReturnBtn from '../../components/returnUp/returnUpBtn';
import scroll from "../../animations/scroll";
import PageTransition from "../../components/page-transition/pageTransition";
import Project from '../../components/project/project';
import projectArray from '../../components/projectArray';

const Home = () => {
    scroll()
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

    const projectPreview = projectArray.slice(0, 6)

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
                    projectPreview.map((project, index) => {
                        return (
                           <Project project={project} key={index} />
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
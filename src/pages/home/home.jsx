import './home.scss';
import Navbar from '../../components/navbar/navbar';
import ReturnBtn from '../../components/returnUp/returnUpBtn';
import scroll from "../../animations/scroll";
import PageTransition from "../../components/page-transition/pageTransition";
import Project from '../../components/project/project';
import { useEffect, useState } from 'react';
import CardLoader from '@/components/Loaders/card-loader';


const Home = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
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

    const fetpost = async () => {
        const response = await fetch("https://abdymovix-cms.onrender.com/api/Projects?populate=*", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${'cc17b5539269615fbbef8c4dce8c28df9036188f146ce17dff8b59c7798f43cff7172c476f865363565c81d86577a1ef228fc67e0e5d47086bdb35b7140cb01cecb48356960b4539e37301aef63651aa0908cff33622a171414e5ed49e21bbacc4560fb9d9cc63de48318b5b714a7cd93d529cfc78572dcb842c18ef422052bd'}`,
            },
        });
        const data = await response.json();
        setProjects(data)
        setLoading(false)
    }

    useEffect(() => {
        fetpost()
    }, [])


    const mappedProject = (project) =>
        project.data?.map((project) => ({
            img: project?.image?.url,
            name: project?.Title,
            platform: project?.Platform,
            link: project?.Link,
            animation: !!project?.Lottie,
            loadExternaly: project?.loadExternally,
            animationFile: project?.Lottie ? project?.Lottie : project?.Lottie ? project?.animationFile : null
        }))


    const projectPreview = mappedProject(projects)?.slice(0, 6)

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
                    loading ? (
                        <>
                            {
                                Array.from({ length: 6 }).map((_, index) => (
                                    <CardLoader key={index} />
                                ))
                            }
                        </>
                    ) : (
                        projectPreview?.map((project, index) => {
                            return (
                                <>
                                    <Project
                                        project={project}
                                        key={index}
                                    />
                                </>
                            )
                        })
                    )
                }
            </section>
            {
                Backgrounds.map((background, index) => {
                    return (
                        <div className={`background background-${index}`} key={index}>
                            <img
                                src={background.path}
                                alt={background.name}
                            />
                        </div>
                    );
                })
            }
            <ReturnBtn />
        </main>
    );
}

export default PageTransition(Home);
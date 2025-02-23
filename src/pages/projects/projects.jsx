import "../projects/projects.scss";
import PageTransition from "../../components/page-transition/pageTransition";
import Navbar from "../../components/navbar/navbar";
import scroll from "../../animations/scroll"
import ReturnBtn from "../../components/returnUp/returnUpBtn";
import Project from "../../components/project/project";
import { useState, useEffect } from "react";
import CardLoader from "../../components/Loaders/card-loader";

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    scroll()

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

    return (
        <div className="wrapper">
            <Navbar />
            <div className="project_header ">
                <h2 className="prj_header">All Projects</h2>
            </div>
            <div className="project">
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
                        mappedProject(projects)?.map((project, index) =>
                            <Project
                                project={project}
                                key={index}
                            />)
                    )
                }
            </div>
            <ReturnBtn />
        </div>

    );
}

export default PageTransition(Projects);
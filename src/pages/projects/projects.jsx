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
                "Authorization": `Bearer ${'2999fc88f2cfe4ee041ae0d94666fbbd75eabe142edfcb93dc12fefb79e8ed93e6609ac89179fe9d260c983f86a6f48eb780fa54a93040941ef50a7d5411eade1d6f1cd9761bb798e1fc35523780132e385cbb689fdc57417b8f5e4d3df1243ea74e2b67cd97e57c3a6060d4107fbd43f87e16a835472a4b38f7d89ea3d140c4'}`,
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
            img: `http://localhost:1337/uploads/${project?.image?.hash}.png`,
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
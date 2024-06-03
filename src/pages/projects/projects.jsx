import "../projects/projects.scss";
import PageTransition from "../../components/page-transition/pageTransition";
import Navbar from "../../components/navbar/navbar";
import scroll from "../../animations/scroll"
import ReturnBtn from "../../components/returnUp/returnUpBtn";
import projectArray from "../../components/projectArray";
import Project from "../../components/project/project";

const Projects = () => {
    scroll()
    
    return (
        <div className="wrapper">
            <Navbar />
            <div className="project_header ">
                <h2 className="prj_header">All Projects</h2>
            </div>
            <div className="project">
                {
                    projectArray.map((project, index) => <Project project={project} key={index} />)
                }
            </div>
            <ReturnBtn />
        </div>

    );
}

export default PageTransition(Projects);
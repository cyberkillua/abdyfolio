import "./project.scss"
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const Project = ({ project }) => {
    return (
        <div className="project_container">
            {
                project.animation ? (
                    <Link to={project.link} target={project.loadExternaly ?  "_blank" : ""}>
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
    );
}

export default Project;
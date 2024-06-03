import Button from "../../components/Button/button";
import Navbar from "../../components/navbar/navbar";
import "./profile.scss";
import scroll from "../../animations/scroll";
import PageTransition from "../../components/page-transition/pageTransition";
import useWindowSize from "../../hooks/useWindowSize";

const Profile = () => {
    scroll()

    const { isMobile } = useWindowSize()

    return (
        <div className="profile">
            <div className="profile_wrapper">
                <Navbar />
                <main className="content">
                    <div className="content_left">
                        <h1 className="header--2 content_header">About me</h1>
                        <div className="content_paragraph">
                            <p className="paragraph--2">Hi there!</p>
                            <p className="paragraph--2">
                                I’m Adam Abdullah, a passionate UI/UX Designer with over 4 years of experience crafting beautiful, intuitive, and inclusive digital experiences.  My skills span the entire design process, from user research and design thinking to wireframing, prototyping, and visual design (including strong typography and color theory).
                            </p>

                            <p className="paragraph--2">
                                <span>Accessibility Advocate</span> I ensure all users can benefit from the products I design, following WCAG guidelines and conducting user testing with diverse participants.
                            </p>

                            <p className="paragraph--2">
                                <span>Beyond Design</span> My experience in Product Management and as a Certified Scrum Master equips me with a well-rounded perspective on product development and leading cross-functional teams. I'm also proficient in design software like Figma, Spline, Adobe Illustrator, Photoshop,
                            </p>
                            <p className="paragraph--2">Thrilled to be at <a href="">Fezzant!</a> Contributing my expertise in design and management  to their mission of inclusive and accessible cybersecurity.</p>
                        </div>
                        {
                            isMobile && (<Button text={"Download Resume"} align={'center'} />)
                        }
                    </div>
                    <div className="profile_right">
                        <img src="/abdy.png" className="abdy" alt="abdy" />
                        <ul className="content_footer">
                            <a href="https://twitter.com/Abdymovic10">
                                <li>
                                    <img src="/x.svg" alt="/twitter-icon" />
                                </li>
                            </a>

                            <a href="https://www.linkedin.com/in/abdymovic/">
                                <li>
                                    <img src="/in.svg" alt="linkedin-icon" />
                                </li>
                            </a>

                            <a href="https://dribbble.com/abdymovic">
                                <li>
                                    <img src="/dribble.png" alt="behance-icon" />
                                </li>
                            </a>
                        </ul>
                        {
                            !isMobile && (<Button text={"Download Resume"} align={'center'} />)
                        }

                    </div>
                </main>
            </div>
        </div>
    );
}

export default PageTransition(Profile);
import Button from "../../components/Button/button"
import Navbar from "../../components/navbar/navbar"
import HomeIcon from "../../assets/home-icon"
import "./profile.scss"
import PageTransition from  "../../components/page-transition/pageTransition"
import  { useSelector } from "react-redux"


const Profile = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    return (
        <div className="profile" darkmode={`${darkmode}`}>
            <Navbar color={" rgba(0, 49, 2, 1)"} iconColor={"rgba(255, 255, 255, 1)"} />
            <div className="profile_wrapper">
                <div className="profile_header">
                    <Button text={"contact Me"} darkmodeBG={"rgba(0, 49, 2, 1)"} darkmodeTX={"rgba(221, 255, 215, 1)"} />
                    {/* <HomeIcon color={"#ffffff"} /> */}
                </div>
                <main className="content">
                    <div className="content_left">
                        <div className="content_paragraph" darkmode={`${darkmode}`}>
                            <p className="paragraph--2">
                                I am a Designer and Product Manager currently at Fezzant.
                                I love to build powerful and elegant products and I’m passionate about technology and what it can do for people.
                            </p>
                            <p className="paragraph--2">
                                I am a Designer and Product Manager currently at Fezzant.
                                I love to build powerful and elegant products and I’m passionate about technology and what it can do for people.
                            </p>
                        </div>

                        <ul className="content_footer">
                            <li>
                                <img src="/x.png" alt="" />
                            </li>
                            <li>
                                <img src="/linkedin.png" alt="" />
                            </li>
                            <li>
                                <img src="/behance.png" alt="" />
                            </li>
                        </ul>

                    </div>
                    <div className="profile_img">
                        <img src={darkmode ? "Rectangle2.png" : "/Rectangle.png"} alt="abdy_picture" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PageTransition(Profile);
import Button from "../../components/Button/button"
import Navbar from "../../components/navbar/navbar"
import { useEffect } from "react"
import "./profile.scss"
import PageTransition from "../../components/page-transition/pageTransition"
import { useSelector } from "react-redux"


const Profile = () => {
    const darkmode = useSelector((state) => state.darkMode?.darkMode)

    useEffect(() => {
        document.body.style = darkmode ? "rgba(207, 246, 255, 1)" : " #1632A0";
    },  [])

    return (
        <div className="profile" darkmode={`${darkmode}`}>
            <div className="profile_wrapper">
                <Navbar />
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
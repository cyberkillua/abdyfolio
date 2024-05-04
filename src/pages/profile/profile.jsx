import Button from "../../components/Button/button"
import Navbar from "../../components/navbar/navbar"
import { useEffect } from "react"
import "./profile.scss"
import scroll from "../../animations/scroll";
import PageTransition from "../../components/page-transition/pageTransition"
import { useSelector } from "react-redux"


const Profile = () => {
    scroll()

    return (
        <div className="profile">
            <div className="profile_wrapper">
                <Navbar />
                <main className="content">
                    <div className="content_left">
                    <h1 className="header--2 content_header">Bio</h1>
                        <div className="content_paragraph">
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
                                <img src="/x.svg" alt="/twitter-icon" />
                            </li>
                            <li>
                                <img src="/in.svg" alt="linkedin-icon" />
                            </li>
                            <li>
                                <img src="/be.svg" alt="behance-icon" />
                            </li>
                        </ul>

                    </div>
                    <div className="profile_img">
                        <img src= "/Rectangle.png" alt="abdy_picture" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PageTransition(Profile);
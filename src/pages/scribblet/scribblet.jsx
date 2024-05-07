import "../scribblet/scribblet.scss";
import { useEffect } from "react";
import scroll from "../../animations/scroll";
import PageTransition from "../../components/page-transition/pageTransition";
import '@dotlottie/player-component';

const Scribblet = () => {
    scroll()
    useEffect(() => {
        document.body.style.backgroundColor = 'white';

        return () => document.body.style.backgroundColor = 'black'
    }, []);

    return (
        <>
            <div className="scribblet">
                <div className="scribblet_hero">
                    <div className="header">
                        <h1 className="header--01">Scribblet.AI</h1>
                        <p className="paragraph--4">A MacOS app that automatically rates your apps based on, so you can identify and eliminate time-wasting distractions.</p>
                        <div className="btns">
                            <a href="#" className="header_btn1">Website</a>
                            <a href="#" className="header_btn2">Download App</a>
                        </div>
                    </div>

                    <div className="gallery">
                        <div className="right">
                            <img src="/record.webp" alt="" />
                        </div>
                        <div className="left">
                            <img src="/menu.webp" alt="" />
                            <img src="/footer.webp" alt="" />
                        </div>
                    </div>
                </div>


                <div className="onboarding">
                    <h1 className="header--1">Onboarding</h1>
                    <div className="onboarding_gallery">
                        <div className="images">
                            <img src="/Onboarding76.webp" alt="onboarding_img" />
                            <dotlottie-player className="video" src="https://cdn.lottielab.com/l/7RksNMDYhPxaVn.json"  autoplay loop style={{ width: '30%', height: '0%' }} />
                            <img src="/Onboarding74.webp" alt="edit_img" />
                        </div>

                    </div>
                </div>

                <div className="recording">
                    <h1 className="header--1">Recording</h1>
                    <div className="recording_gallery">
                        <div className="gallery_item1">
                            <p className="paragraph--5">Add an attachment
                                (Video or Image) to
                                a recording
                            </p>
                            <img src="/recording.webp" alt="" />
                        </div>
                        <div className="gallery_item2">
                            <p className="paragraph--5">Loading Screen</p>
                            <img src="/transcribing.webp" alt="" />
                        </div>
                    </div>
                </div>

                <div className="results">
                    <h1 className="header--1">Recording results</h1>
                    <img src="/refine.webp" alt="refine_img" />
                </div>

                <div className="refine">
                    <h1 className="header--1">Refine results</h1>
                    <img src="/Refine2.webp" alt="resulty_img" />
                </div>

                <div className="home_page">
                    <h1 className="header--1">Homepage</h1>
                    <img src="/home.webp" alt="home-img" />
                </div>
                <div className="widget">
                    <h1 className="header--1">Widgets</h1>
                    <div className="widget-gallery">
                        <img src="/iPhone-Light.webp" alt="" />
                        <img src="/iPhone-Light2.webp" alt="" />
                        <img src="/iPhone-Light3.webp" alt="" />
                        <img src="/iPhone-Light4.webp" alt="" />
                    </div>
                </div>
                <div className="settings">
                    <h1 className="header--1">Settings</h1>
                    <div className="settings-gallery">
                        <img src="/default-color.webp" alt="" />
                        <img src="/Settings.webp" alt="" />
                        <img src="/Widgets.webp" alt="" />
                    </div>
                </div>

            </div>

            <section className="appstore">
                <h1 className="header--1">IOS Appstore Screenshots</h1>
                <div className="appstore_gallery">
                    <img src="/playstore6.webp" alt="" />
                    <img src="/playstore5.webp" alt="" />
                    <img src="/playstore3.webp" alt="" />
                    <img src="/playstore4.webp" alt="" />
                    <img src="/playstore2.webp" alt="" />
                    <img src="/playstore1.webp" alt="" />
                </div>
            </section>


            <section className="hero-section">
                <h1 className="header--1">Website Hero Section</h1>
                <img src="/website-hero-section.webp" alt="" />
            </section>
        </>

    );
}

export default PageTransition(Scribblet);
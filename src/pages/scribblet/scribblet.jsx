import "../scribblet/scribblet.scss";
import { useEffect } from "react";
import PageTransition from "../../components/page-transition/pageTransition";

const Scribblet = () => {
    useEffect(() => {
        document.body.style = "rgba(238, 249, 255, 1)";
    }, [])
    return (
        <>
            <div className="scribblet">
                <div className="header">
                    <h1 className="header--1">Scribblet.AI</h1>
                    <p className="paragraph--4">A MacOS app that automatically rates your apps based on, so you can identify and eliminate time-wasting distractions.</p>
                    <a href="#" className="header_btn">Website</a>
                </div>

                <div className="gallery">
                    <div className="right">
                        <img src="/record.png" alt="" />
                    </div>
                    <div className="left">
                        <img src="/menu.png" alt="" />
                        <img src="/footer.png" alt="" />
                    </div>
                </div>

                <div className="onboarding">
                    <h1 className="header--1">Onboarding</h1>
                    <div className="onboarding_gallery">
                        <div className="images">
                            <img src="/Onboarding76.png" alt="" />
                            <img src="/Onboarding75.png" alt="" />
                            <img src="/Onboarding74.png" alt="" />
                        </div>
                        <img src="/New-Lottie10.png" alt="" />
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
                            <img src="/recording.png" alt="" />
                        </div>
                        <div className="gallery_item2">
                            <p className="paragraph--5">Loading Screen</p>
                            <img src="/transcribing.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="results">
                    <h1 className="header--1">Recording results</h1>
                    <img src="/refine.png" alt="" />
                </div>

                <div className="refine">
                    <h1 className="header--1">Refine results</h1>
                    <img src="/Refine2.png" alt="" />
                </div>

                <div className="home_page">
                    <h1 className="header--1">Homepage</h1>
                    <img src="/home.png" alt="" />
                </div>
                <div className="widget">
                    <h1 className="header--1">Widgets</h1>
                    <div className="widget-gallery">
                        <img src="/iPhone-Light.png" alt="" />
                        <img src="/iPhone-Light2.png" alt="" />
                        <img src="/iPhone-Light3.png" alt="" />
                        <img src="/iPhone-Light4.png" alt="" />
                    </div>
                </div>
                <div className="settings">
                    <h1 className="header--1">Settings</h1>
                    <div className="settings-gallery">
                        <img src="/default-color.png" alt="" />
                        <img src="/Settings.png" alt="" />
                        <img src="/Widgets.png" alt="" />
                    </div>
                </div>

            </div>

            <section className="appstore">
                <h1 className="header--1">IOS Appstore Screenshots</h1>
                <div className="appstore_gallery">
                    <img src="/playstore6.png" alt="" />
                    <img src="/playstore5.png" alt="" />
                    <img src="/playstore3.png" alt="" />
                    <img src="/playstore4.png" alt="" />
                    <img src="/playstore2.png" alt="" />
                    <img src="/playstore1.png" alt="" />
                </div>
            </section>


            <section className="hero-section">
                <h1 className="header--1">Website Hero Section</h1>
                <img src="/website-hero-section.png" alt="" />
            </section>
        </>

    );
}

export default PageTransition(Scribblet);
import "./fusionfocus.scss";
import scroll from "../../animations/scroll.js";
import { useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize.js";
import Title from "../../components/title/title.jsx";

const FusionFocus = () => {
    scroll()
    const { isMobile } = useWindowSize()

    useEffect(() => {
        document.body.style.backgroundColor = '#08081A';

        return () => document.body.style.backgroundColor = 'black'
    }, []);

    return (
        <div className="focus_wrapper">
            <section className="hero">
                <div className="hero_left">
                    <img src="/top-post-badge.png" alt="" />
                    <p className="paragraph--6">
                        FocusFusion: A MacOS app that automatically rates your apps based on, so you can identify and eliminate time-wasting distractions.
                    </p>
                    <a href="https://focusfusion.app/">
                        <button className="hero_left_btn">Website <span><img src="/btn-arrow.png" alt="" /></span></button>
                    </a>
                </div>
                <img src="fusion_hero_background.webp" className="fusion_background" alt="" />
            </section>
            <main className="fusionfocus_container">
                <section className="intro">
                    <Title text={"intro"} align={'center'} />
                    <p className="paragraph--6">In todays busy world filled with distractions, focusing on work or studies, especially for those heavily relying on their PCs, has become a real challenge. Our goal is simple: enhance workflow, cut out distractions, and help you identify productivity patterns. Imagine avoiding those three-hour YouTube cat video marathons during crucial work moments. Were here to transform how you balance productivity and play.</p>
                </section>
                <section className="logo">
                    <Title text={"logo"} align={isMobile ? 'center' : 'flex-start'} />
                    <div className="logo-images">
                        <img src="/fusion_logo_2.webp" alt="" />
                        <img src="/fusion_logo_1.webp" alt="" />
                    </div>
                </section>
                <section className="onMac">
                    <Title text={"on Mac"} align={isMobile ? 'center' : 'flex-start'} />
                    <div className="onMac-images">
                        <img src="/onMac1.webp" alt="" />
                        <img src="/onMac2.webp" alt="" />
                    </div>
                </section>
                <section className="productive_hours">
                    <div className="heading">
                        <Title text={"Productive Hours"} align={'center'} />
                        <p className="paragraph--7">In this final view, there’s not much issue with breakpoint, whether its minimized or maximized. The full view is consistent and also compared to the previous version, its more detailed and its just a day at a time, so you can see live patterns of how productive you’ve been.</p>
                    </div>
                    <img src="/Home_stats.webp" className="home_stats" alt="" />
                </section>
                <section className="activity">
                    <div className="activity-1">
                        <div className="left">
                            <Title text={"activity"} align={isMobile ? 'center' : 'flex-start'} />
                            <p className="paragraph--7">The initial designed view of the productive hours is a bit different because its time spent against level of productivity,at the end of the day it was decided to group either prductive or unproductive instead of a score,  simply because theres a level of subjectivity in ratings accrorss Users.</p>
                        </div>
                        <img className="activity_img" src="/activity.webp" alt="" />
                    </div>
                    <div className="activity-2">
                        <img className="activity_img" src="/Timeline.webp" alt="" />
                        <div className="left">
                            <Title text={"activity"} align={isMobile ? 'center' : 'flex-start'} />
                            <p className="paragraph--7">The final design shows the timeline ina different view, and ita broken down to apps used or interacted in an hour, this view is simplified and apps or site visited are categorized as productive or unproductive</p>
                        </div>
                    </div>
                    <div className="activity-3">
                        <div className="left">
                            < Title text={"Default - List"} align={isMobile ? 'center' : 'flex-start'} />
                            <p className="paragraph--7">In the list view which is the default, users can explore detailed information about their  usage, productivity levels, and the specific time invested across all synced devices.</p>
                        </div>
                        <img className="activity_img" src="/activity3.webp" alt="" />

                    </div>
                </section>
                <section className="report">
                    <div className="report-content-heading">
                        <Title text={"Usage report"} align={'center'} />
                        <p className="paragraph--7">All tracking data collected and ae showed and they range from Users most active or used apps and sites, their Most productive days and productivity score.The point or the use fo this is to provide Users with a comprehensive presentation of their Productivity patterns and rating.</p>
                    </div>
                    <img className="stats" src="/Stats.webp" alt="" />
                </section>
                <section className="limit">

                    <div className="limit-content-heading">
                        <Title text={"Daily Limits"} align={'center'} />
                        <p className="paragraph--7">In Limits, users can create specific time constraints for distracting apps. This  allows users to define the how long they intend to spend on any app or website, helping them manage and control their digital activities.</p>
                    </div>
                    <img className="limit_img" src="/limits.webp" alt="" />

                </section>
                <section className="strict">
                    <div className="strict-header">
                        <div className="strict-wrapper">
                            <Title text={"strict mode"} align={'center'} />
                            <p className="paragraph--7">The Strict Mode, once set, imposes an irreversible block. If you commit to, for example, a 6-day duration, you re unable to undo the restriction until the full 6 days have elapsed. This feature ensures an unwavering commitment to set boundaries, fostering discipline and intentional use of apps and websites.</p>
                        </div>
                    </div>
                    <div className="strict_bottom">
                        <div className="strict_left">
                            <img className="strict-header-img" src="/strict-header.png" alt="" />
                            <img className="app_png" src="/app.webp" alt="" />
                        </div>
                        <div className="strict_right">
                            <img src="/Calendar.webp" alt="" />
                        </div>
                    </div>
                </section>
                <section className="alerts">
                    <div className="alert_content">
                        <Title text={"Alerts and Notifications"} align={'center'} />
                        <p className="paragraph--7">Personalized alerts and notifications are designed to assist you in monitoring your expenditure on specific apps, assessing their productivity, and providing guidance on how to stay on track with your goals.</p>
                    </div>
                    <div className="bottom_images">
                        <img src="/alert_1.png" alt="" />
                        <img src="/alert_2.png" alt="" />
                    </div>
                </section>
                <section className="pomodoro">
                    <Title text={"pomodoro"} align={'center'} />
                    <p className="paragraph--7">While not currently included in the latest release, the Pomodoro technique aids in task planning by breaking them down into short, focused intervals.</p>
                    <img src="/pomodoro.webp" alt="" />
                </section>
                <section className="website">
                    <Title text={"website"} align={'center'} />
                    <p className="paragraph--7">While not currently included in the latest release, the Pomodoro technique aids in task planning by breaking them down into short, focused intervals.</p>
                    <img src="/website.webp" alt="" />
                </section>
            </main>
        </div>
    );
}

export default FusionFocus;
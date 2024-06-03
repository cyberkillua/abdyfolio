import "./returnUpBtn.scss"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"


const ReturnBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 200
            const offset = window.scrollY;
            setIsVisible(offset > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const btnVisibility = {
        initial: {
            opacity: 0,
            transition: {
                duration: .5,
            }
        },
        animate: {
            opacity: 1,
            transition: {
                duration: .5,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5,
            }
        },

    }
    return (
        <AnimatePresence>
            {
                isVisible && (
                    <motion.button className="returnBtn" variants={btnVisibility} initial="initial" animate="animate" exit="exit" onClick={handleScrollToTop} >
                        <img src="/arrow-up.svg" alt="go up" />
                    </motion.button>
                )
            }
        </AnimatePresence>
    )
}

export default ReturnBtn;

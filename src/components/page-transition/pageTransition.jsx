import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./pageTransition.scss";


const PageTransition = (Component) => {
    return () => {
        return (
            <>
                <Component />
                <motion.div className="slide_in" initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} />
                <motion.div className="slide_out" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1,  ease: [0.76, 0, 0.24, 1] }}/>

            </>
        );
    };

    return PageTransitionComponent;
};

export default PageTransition;

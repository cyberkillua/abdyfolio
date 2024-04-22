import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./pageTransition.scss";

const PageTransition = (Component) => {


    const PageTransitionComponent = () => {
        const [isFirstLoad, setIsFirstLoad] = useState(true);

        useEffect(() => {
            setIsFirstLoad(false);
        }, [isFirstLoad]);

        console.log(isFirstLoad)
        return (
            <>
                <Component />

                <>
                    <motion.div className="slide_in" initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
                    <motion.div className="slide_out" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
                </>
            </>
        );
    };

    return PageTransitionComponent;
};

export default PageTransition;

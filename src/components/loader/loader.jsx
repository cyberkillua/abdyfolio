import { Preloader } from "../../utilis/preloader";
import { motion, AnimatePresence, } from "framer-motion";
import "./loader.scss"
const Loader = (prop) => {
    const { loadedImages } = Preloader()
    return (
        <AnimatePresence mode="wait">
            {
                prop.loaderVisible && <motion.div className="loader" initial={{ opacity: 1 }} animate={{ opacity: 1, duration: .3 }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: .5 }}>
                    {
                        prop.loaderVisible && (
                            <motion.div className="loader_wrapper" animate={{ opacity: 1 }} exit={{opacity: 0, duration: .3, delay: .1}}>
                                <div className="progress">
                                    <div className="loader_background"></div>
                                    <div className="loader_gradient" style={{ width: `${loadedImages}%` }}></div>
                                    <p className="counter">{`${loadedImages}%`}</p>
                                </div>
                            </motion.div>
                        )
                    }
                </motion.div>
            }

        </AnimatePresence>
    );
}

export default Loader;
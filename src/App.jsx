import { useEffect } from "react"
// import scroll from "./animations/scroll"
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/navbar";
import Projects from "./pages/projects/projects";
import Scribblet from "./pages/scribblet/scribblet";
import { split } from "./animations/text";
import PageTransition from "./components/page-transition/pageTransition";
// import FusionFocus from "./pages/fusionfocus/fusionFocus"
// import FusionFocus from "./pages/fusionfocus/fusionfocus";
import FusionFocus from "./pages/FusionFocus/fusionfocus";
import Loader from "./components/loader/loader";
import { Preloader } from "./utilis/preloader";

function App() {
  const location = useLocation()
  const { loaderVisible } = Preloader()
  useEffect(() => {
    // scroll()
    split()
  }, [])
  
  return (
    <div className="container">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scribblet" element={<Scribblet />} />
          <Route path="/fusionFocus" element={<FusionFocus />} />
        </Routes>
        <Loader loaderVisible={loaderVisible} />
      </AnimatePresence>
    </div>
  )
}

export default App

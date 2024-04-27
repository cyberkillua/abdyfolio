import { useEffect } from "react"
import scroll from "./animations/scroll"
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/projects/projects";
import Scribblet from "./pages/scribblet/scribblet";
import { split } from "./animations/text";

function App() {
  const location = useLocation()
  useEffect(() => {
    scroll()
    split()
  }, [])
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/scribblet" element={<Scribblet />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App

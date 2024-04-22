import { useEffect } from "react"
import scroll from "./animations/scroll"
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  useEffect(() => {
    scroll()
  }, [])
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App

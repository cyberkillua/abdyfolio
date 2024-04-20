import { useEffect } from "react"
import scroll from "./animations/scroll"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
function App() {
  useEffect(() => {
    scroll()
  }, [])
  return (
    <>
      <Home />
    </>
  )
}

export default App

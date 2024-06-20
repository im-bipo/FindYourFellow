import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Events from "./pages/Events"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

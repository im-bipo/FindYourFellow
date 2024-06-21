import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Events from "./pages/Events"
import About from "./pages/About"

import CardDetails from "./components/Cards/CardDetails"
import Landing from "./pages/Landing"



function App() {

  return (
   <BrowserRouter>
   <Navbar />
   
   <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/about" element={<About/>} />

    <Route path="/card-details" element={<CardDetails/>} />
    <Route path="/" index element={<Landing/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

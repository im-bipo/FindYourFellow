import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Events from "./pages/Events"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CardDetails from "./components/Cards/CardDetails"

function App() {

  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/card-details" element={<CardDetails/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

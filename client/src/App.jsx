import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import CardDetails from './components/Cards/CardDetails';
import Landing from './pages/Landing';
import Signin from './pages/SignIn';
import Signup from './pages/SignUp';
import PageNotFound from "./pages/404Page"


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/card-details" element={<CardDetails />} />

          <Route path="/landing" element={<Landing />} />
          <Route
                    path="*"
                    element={<PageNotFound />}
                />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

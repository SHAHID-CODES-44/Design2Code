import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import LandingPage from "./components/Landing-Page";
import FolioMate from "./components/FolioMate";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/FeedbackForm";
import Testimonials from "./components/Testimonials";
import Auth from "./components/Auth";
import Home from "./components/Home-Page"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/FolioMate' element={<FolioMate />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App

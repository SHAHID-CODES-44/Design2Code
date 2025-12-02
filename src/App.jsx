// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from "./components/Landing-Page";
import FolioMate from "./components/FolioMate";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/FeedbackForm";
import Testimonials from "./components/Testimonials";
import Auth from "./components/Auth";
import Home from "./components/Home-Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/folio-mate" element={<FolioMate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Schedule from "./Components/Schedule";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Blog from "./Components/Blog";
import Classes from "./Components/Classes";
import Contact from "./Components/Contact";
import Join from "./Components/Join";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

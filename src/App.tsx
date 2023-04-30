import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { HomePage } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Donate } from "./pages/Donate";
import { Faq } from "./pages/Faq";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

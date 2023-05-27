import React from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { HomePage } from "./pages/Home";
import { Team } from "./pages/About";
import { Contact } from "./pages/Contact";
import { DonateFood } from "./pages/DonateFood";
import { DonateMoney } from "./pages/DonateMoney";
import { Faq } from "./pages/Faq";

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donateMoney" element={<DonateMoney />} />
            <Route path="/donateFood" element={<DonateFood />} />
          </Routes>
        </div>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;

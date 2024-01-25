import React from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.module.css";

import { HomePage } from "./pages/Home";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { DonateFood } from "./pages/DonateFood";
import { DonateMoney } from "./pages/DonateMoney";
import { Faq } from "./pages/Faq";
import { Reports } from "./pages/Reports";
import { HeedHelp } from "./pages/HeedHelp";

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <div className={"container"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/needHelp" element={<HeedHelp />} />
          <Route path="/donateMoney" element={<DonateMoney />} />
          <Route path="/donateFood" element={<DonateFood />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
);

export default App;

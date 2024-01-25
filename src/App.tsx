import React from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./App.module.css";

import { HomePage } from "./pages/Home";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { DonateFood } from "./pages/DonateFood";
import { DonateMoney } from "./pages/DonateMoney";
import { Faq } from "./pages/Faq";
import { Reports } from "./pages/Reports";
import { NeedHelp } from "./pages/NeedHelp";
import { CookiesProvider } from "react-cookie";
import {
  LangSwitcherSet,
  PawsLanguage,
} from "./components/langSwitcher/langSwitcher";

const App = () => (
  <React.StrictMode>
    <CookiesProvider>
      <HashRouter>
        <div className={"container"}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/needHelp" element={<NeedHelp />} />
            <Route path="/donateMoney" element={<DonateMoney />} />
            <Route path="/donateFood" element={<DonateFood />} />
            <Route path="/reports" element={<Reports />} />

            <Route
              path="/ukrainian"
              element={<LangSwitcherSet lang={PawsLanguage.Ukr} />}
            />
            <Route
              path="/english"
              element={<LangSwitcherSet lang={PawsLanguage.Eng} />}
            />
          </Routes>
        </div>
      </HashRouter>
    </CookiesProvider>
  </React.StrictMode>
);

export default App;

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/header";
import { Footer } from "./components/footer";
import { Team } from "./components/team";
import { Services } from "./components/Services/services";
import { Feature_benefits } from "./components/feature_benefits";
import { Partners } from "./components/partners";
import { Main } from "./components/Main/main";
import { Faq } from "./components/faq";
function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Services />
      <Partners />
      <Feature_benefits />
      <Faq />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

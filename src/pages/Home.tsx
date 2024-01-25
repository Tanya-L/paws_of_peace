import React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ServicesSection } from "../components/servicesSection";
import { PartnersSection } from "../components/partnersSection";
import { MainSection } from "../components/mainSection";

const HomePage = () => (
  <div>
    <div className="container">
      <Header activeItem="home" />
      <MainSection />
      <ServicesSection />
      <PartnersSection />
      <Footer />
    </div>
  </div>
);

export { HomePage };

import React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ServicesSection } from "../components/main/servicesSection";
import { PartnersSection } from "../components/main/partnersSection";
import { MainSection } from "../components/main/mainSection";

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

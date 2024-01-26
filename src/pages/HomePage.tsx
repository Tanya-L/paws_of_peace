import React from "react";

import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { ServicesSection } from "../components/main/servicesSection";
import { PartnersSection } from "../components/main/partnersSection";
import { MainSection } from "../components/main/mainSection";

const HomePage = () => (
  <>
    <Header activeItem="home" />
    <MainSection />
    <ServicesSection />
    <PartnersSection />
    <Footer />
  </>
);

export { HomePage };

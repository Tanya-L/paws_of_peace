import React from "react";

import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { MainPageServicesSection } from "../components/main/MainPageServicesSection";
import { MainPagePartnersSection } from "../components/main/MainPagePartnersSection";
import { MainPageBody } from "../components/main/MainPageBody";

const HomePage = () => (
  <>
    <Header currentPageId="home" />
    <MainPageBody />
    <MainPageServicesSection />
    <MainPagePartnersSection />
    <Footer />
  </>
);

export { HomePage };

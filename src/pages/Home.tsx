import React from "react";

import { Header } from "../components/Header/header";
import { Footer } from "../components/footer";
import { TeamSection } from "../components/teamSection";
import { ServicesSection } from "../components/servicesSection";
import { FeatureBenefitsSection } from "../components/featureBenefitsSection";
import { PartnersSection } from "../components/partnersSection";
import { MainSection } from "../components/mainSection";
import { FAQSection } from "../components/FAQSection";

function HomePage() {
  return (
    <div>
      <div className="container">
        <Header />
        <MainSection />
        <ServicesSection />
        <FeatureBenefitsSection />
        <PartnersSection />
        <FAQSection />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
}

export { HomePage };

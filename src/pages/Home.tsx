import React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ServicesSection } from "../components/servicesSection";
import { FeatureBenefitsSection } from "../components/featureBenefitsSection";
import { PartnersSection } from "../components/partnersSection";
import { MainSection } from "../components/mainSection";
import { FAQSection } from "../components/FAQSection";

function HomePage() {
  return (
    <div>
      <div className="container">
        <Header activeItem="home" />
        <MainSection />
        <ServicesSection />
        {/*<FeatureBenefitsSection />*/}
        <PartnersSection />
        {/*<FAQSection />*/}
        <Footer />
      </div>
    </div>
  );
}

export { HomePage };

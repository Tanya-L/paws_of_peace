import React from "react";
import { FaqUkrSection } from "../components/faqUkrSection";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";

const FaqPage = () => (
  <>
    <Header activeItem="faq" />
    <FaqUkrSection />
    <Footer />
  </>
);

export { FaqPage };

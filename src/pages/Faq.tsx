import React from "react";
import { FaqUkr } from "../components/faqUkr";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";

const Faq = () => (
  <>
    <Header activeItem="faq" />
    <FaqUkr />
    <Footer />
  </>
);

export { Faq };

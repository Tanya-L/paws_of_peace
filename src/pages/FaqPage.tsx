import React from "react";
import { FaqUkr } from "../components/faqUkr";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";

const FaqPage = () => (
  <>
    <Header activeItem="faq" />
    <FaqUkr />
    <Footer />
  </>
);

export { FaqPage };

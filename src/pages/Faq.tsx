import React from "react";
import { FaqUkr } from "../components/faqUkr";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function Faq() {
  return (
    <div className="container">
      <Header activeItem="faq" />
      <FaqUkr />
      <Footer />
    </div>
  );
}

export { Faq };

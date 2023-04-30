import React from "react";
import { FaqUkr } from "../components/faqUkr";
import { Header } from "../components/Header/header";
import { Footer } from "../components/footer";

function Faq() {
  return (
    <div className="container">
      <Header />
      <FaqUkr />
      <Footer />
    </div>
  );
}

export { Faq };

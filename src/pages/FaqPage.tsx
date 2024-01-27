import React from "react";
import { FaqPageBody } from "../components/FaqPageBody";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";

const FaqPage = () => (
  <>
    <Header currentPageId="faq" />
    <FaqPageBody />
    <Footer />
  </>
);

export { FaqPage };

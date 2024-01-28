import React from "react";
import { FaqPageBody } from "../components/FaqPageBody";
import { Header } from "../components/headerAndFooter/Header";
import { Footer } from "../components/headerAndFooter/Footer";
import { useCookies } from "react-cookie";
import {
  getActiveLanguage,
  PawsLanguage,
} from "../components/langSwitcher/langSwitcher";
import { UkrainianOnly } from "../components/prefabs";

const FaqPage = () => {
  const [cookies] = useCookies(["lang"]);
  const activeLang = getActiveLanguage(cookies.lang);

  if (activeLang !== PawsLanguage.Ukr) {
    return (
      <>
        <Header currentPageId="needHelp" />
        <UkrainianOnly />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header currentPageId="faq" />
      <FaqPageBody />
      <Footer />
    </>
  );
};

export { FaqPage };

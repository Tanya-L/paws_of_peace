import React from "react";
import { Header } from "../components/headerAndFooter/Header";
import { Footer } from "../components/headerAndFooter/Footer";
import { PawsFacebookScript } from "../components/PawsFacebookFeed";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import {
  PawsFacebook,
  PawsIfYouHaveQuestions,
  PawsInstagram,
} from "../components/prefabs";

const strings: PawsLangStrings = {
  [PawsLanguage.Swe]: {
    "Activity reports": "Verksamhetsrapporter",
    "text.reports":
      "Vi publicerar regelbundet verksamhetsrapporter i våra sociala medier",
  },
  [PawsLanguage.Ukr]: {
    "Activity reports": "Звіти про діяльність",
    "text.reports": "Ми публікуємо регулярні звіти про нашу діяльність",
  },
  [PawsLanguage.Eng]: {
    "text.reports":
      "We regularly publish activity reports in our social media accounts",
  },
};

const ReportsPage = () => {
  const { translate } = useTranslate(strings);

  return (
    <>
      {/*<PawsFacebookScript />*/}

      <Header currentPageId="reports" />

      <h1>{translate("Activity reports")}</h1>

      <p>
        {translate("text.reports")}: <PawsFacebook />, <PawsInstagram />
      </p>
      <p>
        <PawsIfYouHaveQuestions />
      </p>

      <Footer />
    </>
  );
};

export { ReportsPage };

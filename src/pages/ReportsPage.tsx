import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
// import Construction from "../Img/Under-Construction.png";
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
      <PawsFacebookScript />

      <Header currentPageId="reports" />

      <h1>{translate("Activity reports")}</h1>
      <div className="text-start">
        <div className="text-start">
          <p>
            {translate("text.reports")}: <PawsFacebook />, <PawsInstagram />
          </p>
          <p>
            <PawsIfYouHaveQuestions />
          </p>
        </div>
      </div>
      {/*<h3>Monthly activity reports</h3>*/}
      {/*<img src={Construction} alt={""} />*/}

      {/*<PawsFacebookFeed />*/}
      <Footer />
    </>
  );
};

export { ReportsPage };

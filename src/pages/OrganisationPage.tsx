import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import { orgNr, PawsUrl, stadgarSweUrl, stadgarUkrUrl } from "../site-const";
import { Link } from "react-router-dom";

const strings: PawsLangStrings = {
  [PawsLanguage.Swe]: {
    "Organisation Information": "Information om organisationen",
    "text.orgReg": `Organisationen är en ideell förening och är registrerad i Sverige under nummer ${orgNr}.`,
    "text.theBoard": "Styrelsen vald för 2023",
    "see.team": "se team-sidan",
    "text.stadgarSwe": "Föreningens stadgar (svenska, original)",
    "text.stadgarUkr": "Föreningens stadgar (ukrainska, översättning)",
  },
  [PawsLanguage.Ukr]: {
    "Organisation Information": "Інформація про організацію",
    "text.orgReg": `Організація є неприбутковою та благодійною, і зареєстрована в Швеції під номером ${orgNr}.`,
    "text.theBoard": "Правління об'єднання обране на 2023 рік",
    "see.team": "див. сторінку команди",
    "text.stadgarSwe": "Статут об'єднання (шведською, оригінал)",
    "text.stadgarUkr": "Статут об'єднання (українською, переклад)",
  },
  [PawsLanguage.Eng]: {
    "text.orgReg": `The organisation is a non-profit charity, and is registered in Sweden under the number ${orgNr}.`,
    "text.theBoard": "The board elected for 2023",
    "see.team": "see the team page",
    "text.stadgarSwe": "Statutes of the organisation (Swedish, original)",
    "text.stadgarUkr": "Statutes of the organisation (Ukrainian, translation)",
  },
};

const OrganisationPage = () => {
  const { translate } = useTranslate(strings);

  return (
    <>
      <Header currentPageId="organisation" />

      <h1>{translate("Organisation Information")}</h1>

      <p>{translate("text.orgReg")}</p>
      <p>
        {translate("text.theBoard")}:{" "}
        <Link to={PawsUrl.Team}>{translate("see.team")}</Link>
      </p>
      <p>
        <Link target="_blank" to={stadgarSweUrl}>
          {translate("text.stadgarSwe")}
        </Link>
      </p>
      <p>
        <Link target="_blank" to={stadgarUkrUrl}>
          {translate("text.stadgarUkr")}
        </Link>
      </p>

      <Footer />
    </>
  );
};

export { OrganisationPage };

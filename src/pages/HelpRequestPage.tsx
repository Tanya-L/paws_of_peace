import React from "react";
import { Header } from "../components/headerAndFooter/Header";
import { Footer } from "../components/headerAndFooter/Footer";
import { ButtonStyle, PawsCard } from "../components/PawsCard";
import secondHelp from "../Img/donate/secondHelp.jpg";
import needHelp from "../Img/donate/needHelp.jpg";
import {
  getActiveLanguage,
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import {
  pawsRequestHelpAgainFormUrl,
  pawsRequestHelpFormUrl,
} from "../site-const";
import { Col, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { UkrainianOnly } from "../components/prefabs";

const strings: PawsLangStrings = {
  [PawsLanguage.Swe]: {},
  [PawsLanguage.Ukr]: {
    "eng.Disclaimer": "",
  },
  [PawsLanguage.Eng]: {
    "eng.Disclaimer":
      "Disclaimer: This page is to be used by those who are in need of help and located in Ukraine.",
  },
};

const HelpRequestPage = () => {
  const { translate } = useTranslate(strings);

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
      <Header currentPageId="needHelp" />

      <p>{translate("eng.Disclaimer")}</p>

      <Row>
        <Col>
          <PawsCard
            topImage={needHelp}
            title={"Потрібна допомога?"}
            text={
              <>
                Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам!{" "}
                <span className="text-danger">
                  Ця форма лише для тих, хто звертається вперше.
                </span>{" "}
                Якщо ви вже отримували допомогу від нас, скористайтеся, будь
                ласка, другою формою.
              </>
            }
            buttonText={"Перше звернення"}
            buttonLink={pawsRequestHelpFormUrl}
          />
        </Col>

        <Col>
          <PawsCard
            topImage={secondHelp}
            title={"Знову потрібна допомога?"}
            text={
              <>
                Потребуете{" "}
                <span className="text-danger">ПОВТОРНОЇ ДОПОМОГИ?</span>{" "}
                Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам!
              </>
            }
            buttonText={"Друге та наступні звернення"}
            buttonLink={pawsRequestHelpAgainFormUrl}
            buttonStyle={ButtonStyle.Success}
          />
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export { HelpRequestPage };

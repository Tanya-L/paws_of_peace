import React from "react";
import { PawsCard } from "../PawsCard";
import donateCat from "../../Img/donate/donateCat.jpg";
import needHelp from "../../Img/donate/needHelp.jpg";
import dogfood from "../../Img/donate/dogfood.png";
import "../../App.module.css";
import {
  getActiveLanguage,
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/LangSwitcher";

import { PawsUrl } from "../../site-const";
import { Col, Container, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "Need help?": "Потрібна допомога?",
    "text.needHelp":
      "Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам! ",
    "button.needHelp": "Заповнити форму",
    "Help Ukrainian animal shelters now!": "Допоможіть притулкам в Україні!",
    "text.donateFood":
      "(Для жителів Швеції) Маєте зайвий корм або засоби для тварин? Пожертвуйте їх притулкам в Україні!",
    "button.donateFood": "Пожертвувати корм та речі (Швеція)",
    "Donate, Save Lives!": "Врятуйте життя!",
    "text.donateMoney":
      "Хочете допомогти нашій діяльності грошима? Пожертвуйте вже сьогодні!",
    "button.donateMoney": "Пожертвувати гроші",
  },
  [PawsLanguage.Swe]: {
    "Need help?": "Behöver du hjälp?", // Only shows in Ukrainian version
    "text.needHelp":
      "Fyll i detta formulär och vi ska göra vårt bästa för att hjälpa dig!", // Only shows in Ukrainian version
    "button.needHelp": "Fyll i formulär", // Only shows in Ukrainian version
    "Help Ukrainian animal shelters now!": "Hjälp ukrainska djurhem nu!",
    "text.donateFood":
      "Har du extra djurfoder eller förnödenheter? Donera dem till ett djurhem i Ukraina!",
    "button.donateFood": "Saker och djurfoder",
    "Donate, Save Lives!": "Skänk pengar och rädda liv!",
    "text.donateMoney":
      "Vill du hjälpa oss med pengar? Donera till Paws of Peace idag!",
    "button.donateMoney": "Skänk pengar",
  },
  [PawsLanguage.Eng]: {
    "text.needHelp":
      "(Only for residents of Ukraine) Fill this request form and we will do our best to help you!", // Only shows in Ukrainian version
    "button.needHelp": "Request Help (Ukraine only)", // Only shows in Ukrainian version
    "text.donateFood":
      "Got some extra pet food or supplies laying around? Donate them to a shelter in Ukraine!",
    "button.donateFood": "Donate food or supplies",
    "text.donateMoney":
      "Want to help with a money? Donate to Paws of Peace today!",
    "button.donateMoney": "Donate money",
  },
};

export const MainPageServicesSection = () => {
  const { translate } = useTranslate(strings);

  // Only show request help from the Ukrainian version
  const [cookies] = useCookies(["lang"]);
  const activeLang = getActiveLanguage(cookies.lang);

  return (
    <Container>
      <Row>
        {activeLang === PawsLanguage.Ukr && (
          <Col>
            <PawsCard
              topImage={needHelp}
              title={translate("Need help?")}
              text={translate("text.needHelp")}
              buttonText={translate("button.needHelp")}
              buttonLink={PawsUrl.RequestHelp}
            />
          </Col>
        )}
        <Col>
          <PawsCard
            topImage={dogfood}
            title={translate("Help Ukrainian animal shelters now!")}
            text={translate("text.donateFood")}
            buttonText={translate("button.donateFood")}
            buttonLink={PawsUrl.DonateSupplies}
          />
        </Col>
        <Col>
          <PawsCard
            topImage={donateCat}
            title={translate("Donate, Save Lives!")}
            text={translate("text.donateMoney")}
            buttonText={translate("button.donateMoney")}
            buttonLink={PawsUrl.DonateMoney}
          />
        </Col>
      </Row>
    </Container>
  );
};

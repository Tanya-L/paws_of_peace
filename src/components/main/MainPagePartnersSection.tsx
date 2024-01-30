import React from "react";
import { ButtonStyle, PawsCard } from "../PawsCard";
import gerb2 from "../../Img/partners/gerb.png";
import hundstallet from "../../Img/partners/hundstallet.png";
import kattstallet from "../../Img/partners/kattstallet.png";
import nuf from "../../Img/partners/nuf.png";
import hub from "../../Img/partners/hub.png";
import PoPquestion from "../../Img/PoPquestion.png";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/LangSwitcher";

import { PawsUrl } from "../../site-const";
import { Col, Container, Row } from "react-bootstrap";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "Embassy of Ukraine in The Kingdom of Sweden":
      "Посольство України в Королівстві Швеція",
    "Ukrainian Volunteer Hub - Stockholm":
      "Український Волонтерський Хаб - Стокгольм",
    Hundstallet: "Мережа притулків для собак Hundstallet",
    Kattstallet: "Притулок для котів Kattstallet",
    "Do you want to become our partner? Contact us!":
      "Хочете стати нашим партнером? Зв'яжіться з нами!",
    "text.popPartnerJoin":
      "Ваша організація хоче співпрацювати з нами? Давайте станемо партнерами.",
    "Contact us!": "Зв'яжіться з нами!",
    "Our Partners": "Наші партнери",
  },
  [PawsLanguage.Swe]: {
    "Embassy of Ukraine in The Kingdom of Sweden":
      "Ukrainas ambassad i Sverige",
    "Ukrainian Volunteer Hub - Stockholm": "Ukrainska Volontär Hub - Stockholm",
    Hundstallet: "Hundstallet",
    Kattstallet: "Kattstallet",
    "Do you want to become our partner? Contact us!":
      "Vill du bli vår partner? Kontakta oss!",
    "text.popPartnerJoin": "Vill din organisation samarbeta med oss?",
    "Contact us!": "Kontakta oss!",
    "Our Partners": "Våra partners",
  },
  [PawsLanguage.Eng]: {
    "text.popPartnerJoin":
      "Does your organisation want to work together? Let's become partners.",
  },
};

export const MainPagePartnersSection = () => {
  const { translate } = useTranslate(strings);

  return (
    <div>
      <Container className="text-center ">
        <h1>{translate("Our Partners")}</h1>
        <Row>
          <Col className="w-75">
            <PawsCard
              image={gerb2}
              buttonText={translate(
                "Embassy of Ukraine in The Kingdom of Sweden"
              )}
              buttonLink={"https://sweden.mfa.gov.ua/en"}
              buttonStyle={ButtonStyle.Link}
            />
          </Col>
          <Col>
            <PawsCard
              image={nuf}
              buttonText={translate("Nordic Ukraine Forum")}
              buttonLink={"https://nuforum.se/"}
              buttonStyle={ButtonStyle.Link}
            />
          </Col>
          <Col>
            <PawsCard
              image={hub}
              buttonText={translate("Ukrainian Volunteer Hub - Stockholm")}
              buttonLink={"https://www.facebook.com/uavhub.stockholm/"}
              buttonStyle={ButtonStyle.Link}
            />
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <PawsCard
              image={hundstallet}
              buttonText={translate("Hundstallet")}
              buttonLink={"https://hundstallet.se/"}
              buttonStyle={ButtonStyle.Link}
            />
          </Col>

          <Col>
            <PawsCard
              image={kattstallet}
              buttonText={translate("Kattstallet")}
              buttonLink={"https://kattstallet.se/"}
              buttonStyle={ButtonStyle.Link}
            />
          </Col>

          <Col>
            <PawsCard
              image={PoPquestion}
              text={translate("text.popPartnerJoin")}
              buttonText={translate("Contact us!")}
              buttonLink={PawsUrl.Contact}
              buttonStyle={ButtonStyle.Primary}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

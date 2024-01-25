import React from "react";
import { ButtonStyle, Card } from "../Card";
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
} from "../langSwitcher/langSwitcher";

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
  },
  [PawsLanguage.Eng]: {},
};

export const PartnersSection = () => {
  const { translate } = useTranslate(strings);

  return (
    <div>
      <div className="container text-center ">
        <h1>Our Partners</h1>
        <div className="row">
          <div className="col" style={{ width: "75%" }}>
            <Card
              image={gerb2}
              buttonText={translate(
                "Embassy of Ukraine in The Kingdom of Sweden"
              )}
              buttonLink={"https://sweden.mfa.gov.ua/en"}
              buttonStyle={ButtonStyle.Link}
            />
          </div>
          <div className="col">
            <Card
              image={nuf}
              buttonText={translate("Nordic Ukraine Forum")}
              buttonLink={"https://nuforum.se/"}
              buttonStyle={ButtonStyle.Link}
            />
          </div>
          <div className="col">
            <Card
              image={hub}
              buttonText={translate("Ukrainian Volunteer Hub - Stockholm")}
              buttonLink={"https://www.facebook.com/uavhub.stockholm/"}
              buttonStyle={ButtonStyle.Link}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card
              image={hundstallet}
              buttonText={translate("Hundstallet")}
              buttonLink={"https://hundstallet.se/"}
              buttonStyle={ButtonStyle.Link}
            />
          </div>
          <div className="col">
            <Card
              image={kattstallet}
              buttonText={translate("Kattstallet")}
              buttonLink={"https://kattstallet.se/"}
              buttonStyle={ButtonStyle.Link}
            />
          </div>
          <div className="col">
            <Card
              image={PoPquestion}
              buttonText={translate(
                "Do you want to become our partner? Contact us!"
              )}
              buttonLink={"/contact"}
              buttonStyle={ButtonStyle.Primary}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

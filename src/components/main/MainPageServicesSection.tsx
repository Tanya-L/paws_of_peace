import React from "react";
import { Card } from "../Card";
import needHelp from "../../Img/donate/needHelp.png";
import dogfood from "../../Img/donate/dogfood.png";
import swishNUF from "../../Img/donate/swishNUF.png";
import "../../App.module.css";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/langSwitcher";

import { PawsUrl } from "../../site-const";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "Need help?": "Потрібна допомога?",
    "text.needHelp":
      "Заповніть цю форму, і ми зробимо все можливе, щоб допомогти вам! ",
    "button.needHelp": "Заповнити форму",
    "Help Ukrainian animal shelters now!": "Допоможіть притулкам в Україні!",
    "text.donateFood":
      "(Для жителів Швеції) Маєте зайвий корм або засоби для тварин? Пожертвуйте їх притулкам в Україні!",
    "button.donateFood": "Пожертвувати (Швеція)",
    "Donate, Save Lives!": "Врятуйте життя!",
    "text.donateMoney":
      "Хочете допомогти нашій діяльності грошима? Пожертвуйте вже сьогодні!",
    "button.donateMoney": "Пожертвувати гроші",
  },
  [PawsLanguage.Eng]: {
    "text.needHelp":
      "(Only for residents of Ukraine) Fill this request form and we will do our best to help you!",
    "button.needHelp": "Request Help (Ukraine only)",
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

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Card
            image={needHelp}
            title={translate("Need help?")}
            text={translate("text.needHelp")}
            buttonText={translate("button.needHelp")}
            buttonLink={PawsUrl.RequestHelp}
          />
        </div>
        <div className="col">
          <Card
            image={dogfood}
            title={translate("Help Ukrainian animal shelters now!")}
            text={translate("text.donateFood")}
            buttonText={translate("button.donateFood")}
            buttonLink={PawsUrl.DonateSupplies}
          />
        </div>
        <div className="col">
          <Card
            image={swishNUF}
            title={translate("Donate, Save Lives!")}
            text={translate("text.donateMoney")}
            buttonText={translate("button.donateMoney")}
            buttonLink={PawsUrl.DonateMoney}
          />
        </div>
      </div>
    </div>
  );
};

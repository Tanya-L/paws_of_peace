import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { Card } from "../components/Card";
import swishNUF from "../Img/donate/swishNUF.png";
import BMClogo from "../Img/donate/BMClogo.png";
import BG from "../Img/donate/BG.png";
import PPlogo from "../Img/donate/PPlogo.png";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import { Paws100Percent } from "../components/prefabs";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "Thank you!": "Дякуємо!",
    "Donate by Swish": "Пожертвувати через Swish (Швеція)",
    "swish.text":
      "Пожертви через Swish стали можливі завдяки допомозі Nordic Ukraine Forum. Будь ласка зробіть помітку в пожертві",
    "Donate by Bankgiro": "Пожертвувати через Bankgiro (Швеція)",
    "bankgiro.text":
      "Пожертви через Bankgiro стали можливі завдяки допомозі Nordic Ukraine Forum. Будь ласка зробіть помітку в пожертві",
    "Donate by PayPal": "Пожертвувати через PayPal",
    "For international supporters.":
      "Для підтримки нашої справи з усіх країн світу.",
    "Donate in our ByMeACoffee fundraiser": "Пожертвувати через ByMeACoffee",
  },
  [PawsLanguage.Eng]: {
    "swish.text":
      "Swish donations are handled by Nordic Ukraine Forum. Please label your donation with the message",
    "bankgiro.text":
      "Bankgiro donations are handled by Nordic Ukraine Forum. Please label your donation with the message",
  },
};

const DonateMoneyPage = () => {
  const { translate } = useTranslate(strings);

  return (
    <>
      <Header currentPageId="donateMoney" />
      <div className="row">
        <div className="col">
          <Card
            image={swishNUF}
            title={translate("Donate by Swish")}
            text={
              <>
                {translate("swish.text")}: <code>Paws of Peace</code>.{" "}
                {translate("Thank you!")}
              </>
            }
            buttonText={"Swish 123 437 52 83"}
            buttonLink={"https://www.swish.nu/"}
          />
        </div>
        <div className="col">
          <Card
            image={BG}
            title={translate("Donate by Bankgiro")}
            text={
              <>
                {translate("bankgiro.text")}: <code>Paws of Peace</code>.{" "}
                {translate("Thank you!")}
              </>
            }
            buttonText={"BANKGIRO: 280 8228 Nordic Ukraine Forum"}
            buttonLink={"https://nuforum.se/support-us/donate/"}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <Card
            image={PPlogo}
            title={translate("Donate by PayPal")}
            text={
              <>
                {translate("For international supporters.")}{" "}
                {translate("Thank you!")}
              </>
            }
            buttonText={"PayPal"}
            buttonLink={
              "https://www.paypal.com/donate/?hosted_button_id=CESU98W7BR43S"
            }
          />
        </div>
        <div className="col">
          <Card
            image={BMClogo}
            title={translate("Donate in our ByMeACoffee fundraiser")}
            text={
              <>
                {translate("For international supporters.")}{" "}
                {translate("Thank you!")}
              </>
            }
            buttonText={"ByMeACoffee"}
            buttonLink={"https://www.buymeacoffee.com/TanyaL"}
          />
        </div>
      </div>
      <Paws100Percent />
      <Footer />
    </>
  );
};

export { DonateMoneyPage };

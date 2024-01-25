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
import { Paws100Percent } from "../components/constants";

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

const DonateMoney = () => {
  const { translate } = useTranslate();

  return (
    <>
      <Header activeItem="donateMoney" />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Card
              image={swishNUF}
              title={translate(strings, "Donate by Swish")}
              text={
                <>
                  {translate(strings, "swish.text")}: <code>Paws of Peace</code>
                  . {translate(strings, "Thank you!")}
                </>
              }
              buttonText={"Swish 123 437 52 83"}
              buttonLink={"https://www.swish.nu/"}
            />
          </div>
          <div className="col">
            <Card
              image={BG}
              title={translate(strings, "Donate by Bankgiro")}
              text={
                <>
                  {translate(strings, "bankgiro.text")}:{" "}
                  <code>Paws of Peace</code>. {translate(strings, "Thank you!")}
                </>
              }
              buttonText={"BANKGIRO: 280 8228 Nordic Ukraine Forum"}
              buttonLink={"https://nuforum.se/support-us/donate/"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card
              image={PPlogo}
              title={translate(strings, "Donate by PayPal")}
              text={
                <>
                  {translate(strings, "For international supporters.")}{" "}
                  {translate(strings, "Thank you!")}
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
              title={translate(strings, "Donate in our ByMeACoffee fundraiser")}
              text={
                <>
                  {translate(strings, "For international supporters.")}{" "}
                  {translate(strings, "Thank you!")}
                </>
              }
              buttonText={"ByMeACoffee"}
              buttonLink={"https://www.buymeacoffee.com/TanyaL"}
            />
          </div>
        </div>
      </div>
      <Paws100Percent />
      <Footer />
    </>
  );
};

export { DonateMoney };

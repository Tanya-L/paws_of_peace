import React from "react";
import { Header } from "../components/headerAndFooter/header";
import { Footer } from "../components/headerAndFooter/footer";
import { PawsCard } from "../components/PawsCard";
import swishNUF from "../Img/donate/swishNUF.png";
import BMClogo from "../Img/donate/BMClogo.png";
import BG from "../Img/donate/BG.png";
import PPlogo from "../Img/donate/PPlogo.png";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import { Paws100PercentDisclaimer } from "../components/prefabs";
import { Col, Row } from "react-bootstrap";

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
  [PawsLanguage.Swe]: {
    "Thank you!": "Tack!",
    "Donate by Swish": "Donera via Swish",
    "swish.text":
      "Swish-donationer hanteras av Nordic Ukraine Forum. " +
      "Märk din donation med meddelandet",
    "Donate by Bankgiro": "Donera via Bankgiro",
    "bankgiro.text":
      "Bankgiro-donationer hanteras av Nordic Ukraine Forum. " +
      "Märk din donation med meddelandet",
    "Donate by PayPal": "Donera via PayPal",
    "For international supporters.":
      "För att stödja vår sak från alla länder i världen.",
    "Donate in our ByMeACoffee fundraiser": "Donera via ByMeACoffee",
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
      <Row>
        <Col>
          <PawsCard
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
        </Col>

        <Col>
          <PawsCard
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
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <PawsCard
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
        </Col>

        <Col>
          <PawsCard
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
        </Col>
      </Row>

      <Paws100PercentDisclaimer />
      <Footer />
    </>
  );
};

export { DonateMoneyPage };

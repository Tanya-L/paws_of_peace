import React from "react";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "./langSwitcher/langSwitcher";
import { Link } from "react-router-dom";
import {
  pawsFacebook,
  pawsInstagram,
  pawsRequestHelpAgainFormUrl,
  pawsRequestHelpFormUrl,
  PawsUrl,
} from "../site-const";
import Facebook from "../Img/contact/fb.png";
import styles from "../App.module.css";
import Instagram from "../Img/contact/insta1.png";
import classNames from "classnames";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "paws.address":
      "Ми знаходимося у м. Стокгольм, Швеція, вул. Sveavägen 162B.",
    "paws.address.short": "Стокгольм, Швеція, Sveavägen 162B",
    "paws.hours":
      "Ми відкриті кожної неділі, з 14:00 до 18:00, інші дні лише за домовленістю для відвантаження відправлень.",
    "paws.hours.short": "кожної неділі, 14:00-18:00",
    "paws.contactUs":
      "Якщо у вас є питання, будь ласка, обов'язково надішліть нам повідомлення.",
    "paws.100%":
      "100% вашої пожертви буде використано на допомогу тваринам та притулкам для тварин в регіонах України, які постраждали від війни.",
    "link.requestHelp": "Форма допомоги (перше звернення)",
    "link.requestHelpAgain": "Форма допомоги (друге та наступні звернення)",
  },
  [PawsLanguage.Swe]: {
    "paws.address": "Vi finns på Sveavägen 162B i Stockholm.",
    "paws.address.short": "Stockholm, Sveavägen 162B",
    "paws.hours":
      "Vi har öppet på söndagar, 14:00-18:00, andra dagar enligt överenskommelse för lasthantering.",
    "paws.hours.short": "Söndagar, 14:00-18:00",
    "paws.contactUs":
      "Om du har några frågor, tveka inte att skicka oss ett meddelande.",
    "paws.100%":
      "100% av din donation går till att hjälpa djur i Ukraina i regioner som drabbats mest av krig.",
    "link.requestHelp": "",
    "link.requestHelpAgain": "",
  },
  [PawsLanguage.Eng]: {
    "paws.address": "We are located in Stockholm on Sveavägen 162B.",
    "paws.address.short": "Stockholm, Sveavägen 162B",
    "paws.hours":
      "We are open on Sundays, from 14:00 to 18:00, other days negotiable only for cargo handling.",
    "paws.hours.short": "Sundays, 14:00-18:00",
    "paws.contactUs":
      "If you have any questions, please don't hesitate to send us a message.",
    "paws.100%":
      "100% of your donation goes towards helping animals and animal shelters in war-affected zones of Ukraine.",
    "link.requestHelp": "Request Help form (first request)",
    "link.requestHelpAgain":
      "Request Help form (second and following requests)",
  },
};

export const PawsAddress = () => {
  const { translate } = useTranslate(strings);
  return <>{translate("paws.address")}</>;
};

export const PawsOpeningHours = () => {
  const { translate } = useTranslate(strings);
  return <>{translate("paws.hours")}</>;
};

export const PawsAddressShort = () => {
  const { translate } = useTranslate(strings);
  return <>{translate("paws.address.short")}</>;
};

export const PawsOpeningHoursShort = () => {
  const { translate } = useTranslate(strings);
  return <>{translate("paws.hours.short")}</>;
};

export const Paws100PercentDisclaimer = () => {
  const { translate } = useTranslate(strings);
  return (
    <>
      <h4 className="text-danger text-center p-5">{translate("paws.100%")}</h4>
    </>
  );
};

export const PawsIfYouHaveQuestions = () => {
  const { translate } = useTranslate(strings);
  return (
    <div className="mt-4 mb-4">
      ❓ <Link to={PawsUrl.Contact}>{translate("paws.contactUs")}</Link>
    </div>
  );
};

export const RequestHelpLink = () => {
  const { translate } = useTranslate(strings);
  return (
    <Link to={pawsRequestHelpFormUrl}>{translate("link.requestHelp")}</Link>
  );
};
export const RequestHelpAgainLink = () => {
  const { translate } = useTranslate(strings);
  return (
    <Link to={pawsRequestHelpAgainFormUrl}>
      {translate("link.requestHelpAgain")}
    </Link>
  );
};

export const PawsFacebook = () => (
  <>
    Facebook{" "}
    <Link className="text-body-secondary p-1" to={pawsFacebook}>
      <img src={Facebook} className={styles.textInline} alt="Facebook" />
    </Link>
  </>
);

export const PawsInstagram = () => (
  <>
    Instagram
    <Link className="text-body-secondary p-1" to={pawsInstagram}>
      <img
        src={Instagram}
        className={classNames("black-and-white", styles.textInline)}
        alt="Instagram"
      />
    </Link>
  </>
);

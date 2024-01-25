import React from "react";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "./langSwitcher/langSwitcher";
import { Link } from "react-router-dom";

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

export const Paws100Percent = () => {
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
    <>
      ❓ <Link to="/contact">{translate("paws.contactUs")}</Link>
    </>
  );
};

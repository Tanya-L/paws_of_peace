import React from "react";
import Email from "../../Img/contact/mail.png";
import Instagram from "../../Img/contact/insta1.png";
import LinkedIn from "../../Img/contact/linkedin.png";
import Facebook from "../../Img/contact/fb.png";
import styles from "../../App.module.css";
import classNames from "classnames";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/LangSwitcher";
import {
  orgNr,
  pawsFacebook,
  pawsInstagram,
  pawsLinkedin,
} from "../../site-const";
import { Link } from "react-router-dom";

const strings: PawsLangStrings = {
  [PawsLanguage.Swe]: {
    "text.copy": `© 2024 Paws of Peace. Organisationsnummer ${orgNr}`,
  },
  [PawsLanguage.Ukr]: {
    "text.copy": `© 2024 Paws of Peace. Зарєстрований номер в Швеції ${orgNr}`,
  },
  [PawsLanguage.Eng]: {
    "text.copy": `© 2024 Paws of Peace. Registered org nr in Sweden ${orgNr}`,
  },
};

export const Footer = () => {
  const { translate } = useTranslate(strings);

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
      <div className="col-md-8 d-flex align-items-center">
        <span className="mb-4 mb-md-0 text-body-secondary ">
          {translate("text.copy")}
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end align-items-baseline d-flex">
        <li className="ms-3">
          <a
            className="text-body-secondary"
            href="mailto:thepawsofpeace@gmail.com"
          >
            <img src={Email} className={styles.footerInline} alt="Email" />
          </a>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" to={pawsFacebook}>
            <img
              src={Facebook}
              className={styles.footerInline}
              alt="Facebook"
            />
          </Link>
        </li>
        <li className="ms-3">
          <Link className="text-body-secondary" to={pawsInstagram}>
            <img
              src={Instagram}
              className={classNames("black-and-white", styles.footerInline)}
              alt="Instagram"
            />
          </Link>
        </li>

        <li className="ms-3">
          <Link className="text-body-secondary" to={pawsLinkedin}>
            <img
              src={LinkedIn}
              className={styles.footerInline}
              alt="Linkedin"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

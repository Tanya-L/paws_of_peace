import React from "react";
import { Header } from "../components/headerAndFooter/header";
import Email from "../Img/contact/mail.png";
import Facebook from "../Img/contact/fb.png";
import Instagram from "../Img/contact/insta1.png";
import LinkedIn from "../Img/contact/linkedin.png";
import Linktree from "../Img/contact/linktree.png";
import styles from "../App.module.css";
import classNames from "classnames";
import { Map } from "../components/main/Map";
import { Footer } from "../components/headerAndFooter/footer";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../components/langSwitcher/langSwitcher";
import { PawsAddress, PawsOpeningHours } from "../components/prefabs";
import { pawsInstagram, pawsLinkedin, pawsLinktree } from "../site-const";
import { Link } from "react-router-dom";

const strings: PawsLangStrings = {
  [PawsLanguage.Swe]: {
    "Contact Paws of Peace": "Kontakta Paws of Peace",
    "Find Us Here": "Hitta oss här",
  },
  [PawsLanguage.Ukr]: {
    "Contact Paws of Peace": "Зв'язатися з Paws of Peace",
    "Find Us Here": "Знайдіть нас тут",
  },
  [PawsLanguage.Eng]: {},
};

const ContactPage = () => {
  const { translate } = useTranslate(strings);

  return (
    <>
      <Header currentPageId="contact" />

      <h1>{translate("Contact Paws of Peace")}</h1>

      <ul className="vertical-list list-unstyled">
        <li className="ms-3">
          <a href="mailto:thepawsofpeace@gmail.com">
            <img
              src={Email}
              className={classNames(styles.textInline, styles.contactIcon)}
              alt="E-mail"
            />
            <span>thepawsofpeace@gmail.com</span>
          </a>
        </li>
        <li className="ms-3">
          <a href="https://www.facebook.com/pawsofpeace">
            <img
              src={Facebook}
              className={classNames(styles.textInline, styles.contactIcon)}
              alt="Facebook"
            />
            pawsofpeace
          </a>
        </li>
        <li className="ms-3">
          <a href={pawsInstagram}>
            <img
              className={classNames(
                styles.textInline,
                styles.contactIcon,
                "black-and-white"
              )}
              src={Instagram}
              alt="Instagram"
            />
            @thepawsofpeace
          </a>
        </li>
        <li className="ms-3">
          <Link to={pawsLinkedin}>
            <img
              src={LinkedIn}
              className={classNames(styles.textInline, styles.contactIcon)}
              alt="Linkedin"
            />
            paws-of-peace
          </Link>
        </li>
        <li className="ms-3">
          <Link to={pawsLinktree}>
            <img
              src={Linktree}
              className={classNames(styles.textInline, styles.contactIcon)}
              alt="Linktree"
            />
            pawsofpeace
          </Link>
        </li>
      </ul>

      <h3>{translate("Find Us Here")}</h3>

      <p>
        <PawsAddress />
      </p>
      <p>
        <PawsOpeningHours />
      </p>

      <Map />

      <Footer />
    </>
  );
};

export { ContactPage };

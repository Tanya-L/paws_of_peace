import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../Img/logo.png";
import {
  getActiveLanguage,
  LangSwitcher,
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/LangSwitcher";

import { PawsUrl } from "../../site-const";
import {
  isMenuitemVisibleWithLanguage,
  MenuBar,
  MenuItemDefinition,
} from "./Menu";
import { useCookies } from "react-cookie";
import { Col, Row } from "react-bootstrap";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    Home: "Головна",
    "Need help?": "Потребуєте допомоги?",
    "Donate Money": "Пожертва грошима",
    "Donate Supplies": "Пожертва речами",
    FAQs: "Питання",
    Team: "Наша команда",
    Reports: "Звіти про діяльність",
    Contact: "Контакти",
    Organisation: "Наша організація",
  },
  [PawsLanguage.Swe]: {
    Home: "Hem",
    "Need help?": "", // not visible in English version
    "Donate Money": "Skänk pengar",
    "Donate Supplies": "Skänk saker/foder",
    FAQs: "", // not visible in English version
    Team: "Vårt team",
    Reports: "Verksamhetsrapporter",
    Contact: "Kontakta oss",
    Organisation: "Vår organisation",
  },
  [PawsLanguage.Eng]: {
    "Need help?": "@", // not visible in English version
    FAQs: "@", // not visible in English version
  },
};

const menuItems: MenuItemDefinition[] = [
  {
    to: PawsUrl.Root,
    highlightId: "home",
    text: "Home",
    nested: [
      {
        to: PawsUrl.RequestHelp,
        highlightId: "needHelp",
        text: "Need help?",
        lang: [PawsLanguage.Ukr],
      },
      {
        to: PawsUrl.Faq,
        highlightId: "faq",
        text: "FAQs",
        lang: [PawsLanguage.Ukr],
      },
    ],
  },
  {
    to: PawsUrl.DonateMoney,
    highlightId: "donateMoney",
    text: "Donate Money",
    nested: [
      {
        to: PawsUrl.DonateSupplies,
        highlightId: "donateFood",
        text: "Donate Supplies",
      },
    ],
  },
  {
    to: PawsUrl.Organisation,
    highlightId: "organisation",
    text: "Organisation",
    nested: [
      { to: PawsUrl.Team, highlightId: "team", text: "Team" },
      { to: PawsUrl.Reports, highlightId: "reports", text: "Reports" },
    ],
  },
  { to: PawsUrl.Contact, highlightId: "contact", text: "Contact" },
];

const Logo = () => {
  return (
    <Link to={PawsUrl.Root}>
      <img src={logo} className={styles.logo} alt="Paws of Peace" />
    </Link>
  );
};

interface HeaderProps {
  currentPageId: string;
}

export const Header: FC<HeaderProps> = ({ currentPageId }) => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-2 mb-4 border-bottom">
      <Row className="w-100">
        <Col sm={1} lg={1} className={styles.logoContainer}>
          <Logo />
        </Col>

        <Col sm={9} lg={9}>
          <MenuBar
            strings={strings}
            currentPageId={currentPageId}
            items={menuItems}
          />
        </Col>

        <Col sm={1} lg={1}>
          <LangSwitcher />
        </Col>
      </Row>
    </header>
  );
};

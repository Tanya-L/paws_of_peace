import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
import logo from "../../Img/logo.png";
import classNames from "classnames";
import {
  LangSwitcher,
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/langSwitcher";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    Home: "Головна",
    "Need help?": "Потрібна допомога?",
    "Donate Money": "Пожертва грошима",
    "Donate Supplies": "Пожертва речами",
    FAQs: "Питання",
    Team: "Команда",
    Reports: "Звіти",
    Contact: "Контакти",
  },
  [PawsLanguage.Eng]: {},
};

const Logo = () => {
  return (
    <Link
      to="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <img src={logo} width={48} alt="Paws of Peace" />
    </Link>
  );
};

interface HeaderProps {
  activeItem: string;
}

export const Header: FC<HeaderProps> = ({ activeItem }) => {
  const { translate } = useTranslate(strings);

  const isActive = (item: string): string => {
    if (activeItem === item) {
      return classNames("btn", "btn-link", styles.navLink, styles.active);
    } else {
      return classNames("btn", "btn-link", styles.navLink);
    }
  };

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Logo />

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/" className={isActive("home")} aria-current="page">
            {translate("Home")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/needHelp" className={isActive("needHelp")}>
            {translate("Need help?")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donateMoney" className={isActive("donateMoney")}>
            {translate("Donate Money")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donateFood" className={isActive("donateFood")}>
            {translate("Donate Supplies")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faq" className={isActive("faq")}>
            {translate("FAQs")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className={isActive("team")}>
            {translate("Team")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className={isActive("reports")}>
            {translate("Reports")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={isActive("contact")}>
            {translate("Contact")}
          </Link>
        </li>
        <li className="nav-item">
          <LangSwitcher />
        </li>
      </ul>
    </header>
  );
};

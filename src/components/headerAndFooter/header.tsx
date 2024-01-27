import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
import logo from "../../Img/logo.png";
import {
  LangSwitcher,
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/langSwitcher";

import { PawsUrl } from "../../site-const";
import { MenuBar, MenuItemDefinition } from "./menu";

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
    Organisation: "Організація",
  },
  [PawsLanguage.Eng]: { FAQs: "FAQ (in Ukrainian)" },
};

const menuItems: MenuItemDefinition[] = [
  { to: PawsUrl.Root, highlightId: "home", text: "Home" },
  { to: PawsUrl.RequestHelp, highlightId: "needHelp", text: "Need help?" },
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
  { to: PawsUrl.Faq, highlightId: "faq", text: "FAQs" },
  {
    to: PawsUrl.Organisation,
    highlightId: "organisation",
    text: "Organisation",
    nested: [
      { to: PawsUrl.Team, highlightId: "team", text: "Team" },
      { to: PawsUrl.Reports, highlightId: "reports", text: "Reports" },
      { to: PawsUrl.Contact, highlightId: "contact", text: "Contact" },
    ],
  },
];

const Logo = () => {
  return (
    <Link
      to={PawsUrl.Root}
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <img src={logo} className={styles.logo} alt="Paws of Peace" />
    </Link>
  );
};

interface HeaderProps {
  currentPageId: string;
}

export const Header: FC<HeaderProps> = ({ currentPageId }) => {
  const { translate } = useTranslate(strings);

  const getMenuitemCssClasses = (menuitemPageId: string): string[] => {
    return currentPageId === menuitemPageId
      ? [styles.pawsNavLink, styles.pawsCurrentPage]
      : [styles.pawsNavLink];
  };

  return (
    <header className="d-flex flex-wrap justify-content-center py-2 mb-4 border-bottom">
      <Logo />

      <ul className="nav nav-pills">
        <MenuBar
          items={menuItems}
          getMenuitemCssClasses={getMenuitemCssClasses}
          translate={translate}
        />

        <li className="nav-item">
          <LangSwitcher />
        </li>
      </ul>
    </header>
  );
};

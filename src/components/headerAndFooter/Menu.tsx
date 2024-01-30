import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  getActiveLanguage,
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../langSwitcher/LangSwitcher";
import sha1 from "crypto-js/sha1";
import styles from "./Menu.module.css";
import { Col, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";

export interface MenuItemDefinition {
  to: string;
  highlightId: string;
  text: string;
  nested?: MenuItemDefinition[];
  lang?: PawsLanguage[];
}

const strToHash = (str: string): string => {
  console.log(str, sha1(str).toString());
  return sha1(str).toString();
};

const getMenuitemCssClasses = (
  currentPageId: string,
  menuitemPageId: string
): string[] => {
  return currentPageId === menuitemPageId
    ? [styles.pawsNavLink, styles.pawsCurrentPage]
    : [styles.pawsNavLink];
};

export const isMenuitemVisibleWithLanguage = (
  item: MenuItemDefinition,
  lang: PawsLanguage
): boolean => {
  return item.lang === undefined || item.lang.includes(lang);
};

interface MenuBarProps {
  strings: PawsLangStrings;
  items: MenuItemDefinition[];
  currentPageId: string;
}

export const MenuDropdown: FC<MenuBarProps> = ({
  strings,
  currentPageId,
  items,
}) => {
  const { translate } = useTranslate(strings);
  const [cookies] = useCookies(["lang"]);
  const activeLang = getActiveLanguage(cookies.lang);
  const subitemsVisibleWithLanguage = items.filter((item) =>
    isMenuitemVisibleWithLanguage(item, activeLang)
  );

  return (
    <ul className={classNames("nav")}>
      {subitemsVisibleWithLanguage.map((item) => (
        <li
          className={classNames("nav-item", styles.menuDropdownItem)}
          key={strToHash(item.text)}
        >
          <Link
            to={item.to}
            className={classNames(
              ...getMenuitemCssClasses(currentPageId, item.highlightId)
            )}
            aria-current="page"
          >
            {translate(item.text)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const MenuBar: FC<MenuBarProps> = ({
  strings,
  items,
  currentPageId,
}) => {
  const { translate } = useTranslate(strings);
  const [cookies] = useCookies(["lang"]);
  const activeLang = getActiveLanguage(cookies.lang);
  const itemsVisibleWithLanguage = items.filter((item) =>
    isMenuitemVisibleWithLanguage(item, activeLang)
  );

  return (
    <Row className="w-100">
      {itemsVisibleWithLanguage.map((item) => (
        <Col>
          <Link
            to={item.to}
            className={classNames(
              ...getMenuitemCssClasses(currentPageId, item.highlightId)
            )}
          >
            {translate(item.text)}
          </Link>
          {item.nested && (
            <MenuDropdown
              strings={strings}
              items={item.nested}
              currentPageId={currentPageId}
            />
          )}
        </Col>
      ))}
    </Row>
  );
};

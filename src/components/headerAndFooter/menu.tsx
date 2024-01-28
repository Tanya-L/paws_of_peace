import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { PawsLanguage } from "../langSwitcher/langSwitcher";
import sha1 from "crypto-js/sha1";

export interface MenuItemDefinition {
  to: string;
  highlightId: string;
  text: string;
  nested?: MenuItemDefinition[];
  lang?: PawsLanguage[];
}

interface MenuBarProps {
  items: MenuItemDefinition[];
  getMenuitemCssClasses: (menuitemPageId: string) => string[];
  translate: (text: string) => string;
}

const strToHash = (str: string): string => {
  console.log(str, sha1(str).toString());
  return sha1(str).toString();
};

export const MenuDropdown: FC<MenuBarProps> = ({
  items,
  getMenuitemCssClasses,
  translate,
}) => {
  return (
    <ul className="nav nav-pills">
      {items.map((item) => (
        <li className="nav-item" key={strToHash(item.text)}>
          <Link
            to={item.to}
            className={classNames(...getMenuitemCssClasses(item.highlightId))}
            aria-current="page"
          >
            {translate(item.text)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const isMenuitemVisibleWithLanguage = (
  item: MenuItemDefinition,
  lang: PawsLanguage
): boolean => {
  return item.lang === undefined || item.lang.includes(lang);
};

// Must be contained within a <ul> element
export const MenuBar: FC<MenuBarProps> = ({
  items,
  getMenuitemCssClasses,
  translate,
}) => {
  return (
    <>
      {items.map((item) => (
        <li className="nav-item" key={strToHash(item.text)}>
          <Link
            to={item.to}
            className={classNames(...getMenuitemCssClasses(item.highlightId))}
            aria-current="page"
          >
            {translate(item.text)}
          </Link>
          {item.nested && (
            <MenuDropdown
              items={item.nested}
              getMenuitemCssClasses={getMenuitemCssClasses}
              translate={translate}
            />
          )}
        </li>
      ))}
    </>
  );
};

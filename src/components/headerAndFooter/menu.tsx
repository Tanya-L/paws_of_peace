import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface MenuItemProps {
  to: string;
  className?: string;
  text: string;
}

export interface MenuItemDefinition {
  to: string;
  highlightId: string;
  text: string;
  nested?: MenuItemDefinition[];
}

interface MenuBarProps {
  items: MenuItemDefinition[];
  getMenuitemCssClasses: (menuitemPageId: string) => string[];
  translate: (text: string) => string;
}

export const MenuDropdown: FC<MenuBarProps> = ({
  items,
  getMenuitemCssClasses,
  translate,
}) => {
  return (
    <>
      {items.map((item) => (
        <li className="nav-item">
          <Link
            to={item.to}
            className={classNames(...getMenuitemCssClasses(item.highlightId))}
            aria-current="page"
          >
            {translate(item.text)}
          </Link>
        </li>
      ))}
    </>
  );
};

export const MenuBar: FC<MenuBarProps> = ({
  items,
  getMenuitemCssClasses,
  translate,
}) => {
  return (
    <>
      {items.map((item) => (
        <li className="nav-item">
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

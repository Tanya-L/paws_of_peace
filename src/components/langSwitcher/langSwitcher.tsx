import React, { FC, useEffect } from "react";
import langUkr from "../../Img/langUkr.png";
import langEng from "../../Img/langEng.png";
import styles from "./langSwitcher.module.css";
import { useCookies } from "react-cookie";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

export enum PawsLanguage {
  Ukr = "Ukr",
  Eng = "Eng",
}

const getBrowserLanguages = () => {
  const languages = navigator.languages || [];
  return languages.map((lang) => lang.split("-")[0]);
};

interface LangSwitcherSetProps {
  lang: PawsLanguage;
}

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export type PawsLangStrings = {
  [lang in PawsLanguage]: { [key: string]: string };
};

export const useTranslate = (strings: PawsLangStrings) => {
  const browserLanguages = getBrowserLanguages();
  const guessedLanguage =
    browserLanguages.includes("uk") || browserLanguages.includes("ru")
      ? PawsLanguage.Ukr
      : PawsLanguage.Eng;
  console.log(browserLanguages, guessedLanguage);

  const [cookies] = useCookies(["lang"]);
  const lang = (cookies.lang as PawsLanguage) || guessedLanguage;

  const translate = (key: string) => {
    const candidate = strings[lang][key];
    return candidate !== undefined ? candidate : key;
  };

  return { lang, translate };
};

export const LangSwitcherSet: FC<LangSwitcherSetProps> = ({ lang }) => {
  const [cookies, setCookie] = useCookies(["lang"]);
  const query = useQuery();

  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.lang !== lang) {
      setCookie("lang", lang, { path: "/" });
    }
    return navigate(query.get("referrer") || "/");
  }, []);
  return <></>;
};

export const LangSwitcher = () => {
  const [cookies] = useCookies(["lang"]);
  const location = useLocation();

  return (
    <>
      <Link to={`/ukrainian?referrer=${location.pathname}`}>
        <img
          src={langUkr}
          alt="Українська"
          title="Українська"
          className={classNames(styles.langIcon, {
            [styles.inactive]: cookies.lang !== PawsLanguage.Ukr,
          })}
        />
      </Link>
      <Link to={`/english?referrer=${location.pathname}`}>
        <img
          src={langEng}
          alt="English"
          title="English"
          className={classNames(styles.langIcon, {
            [styles.inactive]: cookies.lang === PawsLanguage.Ukr,
          })}
        />
      </Link>
    </>
  );
};

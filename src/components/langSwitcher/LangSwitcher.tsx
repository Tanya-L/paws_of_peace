import React, { FC, ReactNode, useEffect } from "react";
// import langUkr from "../../Img/langUkr.png";
// import langEng from "../../Img/langEng.png";
import styles from "./LangSwitcher.module.css";
import { useCookies } from "react-cookie";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { PawsUrl } from "../../site-const";
import { Col, Row } from "react-bootstrap";

export enum PawsLanguage {
  Ukr = "Ukr",
  Eng = "Eng",
  Swe = "Swe",
}

export type PawsTranslateFn = (key: string) => string;

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
  [lang in PawsLanguage]: { [key: string]: ReactNode };
};

export const useTranslate = (strings: PawsLangStrings) => {
  const browserLanguages = getBrowserLanguages();
  const guessFn = () => {
    if (browserLanguages.includes("uk") || browserLanguages.includes("ru")) return PawsLanguage.Ukr;
    if (browserLanguages.includes("sv")) return PawsLanguage.Swe;
    return PawsLanguage.Eng;
  };
  const guessedLanguage = guessFn();

  const [cookies] = useCookies(["lang"]);
  const lang = (cookies.lang as PawsLanguage) || guessedLanguage;

  const translate = (key: string): string => {
    const candidate = strings[lang][key] ?? key;
    return candidate.toString();
  };

  const translateJsx = (key: string): ReactNode => {
    return strings[lang][key] ?? key;
  };

  return { lang, translate, translateJsx };
};

export const LangSwitcherPage: FC<LangSwitcherSetProps> = ({ lang }) => {
  const [cookies, setCookie] = useCookies(["lang"]);
  const query = useQuery();

  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.lang !== lang) {
      setCookie("lang", lang, { path: "/" });
    }
    return navigate(query.get("referrer") || PawsUrl.Root);
  }, []);
  return <></>;
};

export const getActiveLanguage = (lang: PawsLanguage | undefined) => {
  return lang || PawsLanguage.Eng;
};

export const LangSwitcher = () => {
  const [cookies] = useCookies(["lang"]);
  const location = useLocation();

  let activeLang = getActiveLanguage(cookies.lang);
  let ukrActive = activeLang === PawsLanguage.Ukr;
  let ukrSwitchStyle = classNames(styles.langSwitch, {
    [styles.inactive]: !ukrActive,
    [styles.active]: ukrActive,
  });

  let engActive = activeLang === PawsLanguage.Eng;
  let engSwitchStyle = classNames(styles.langSwitch, {
    [styles.inactive]: !engActive,
    [styles.active]: engActive,
  });

  let sweActive = activeLang === PawsLanguage.Swe;
  let sweSwitchStyle = classNames(styles.langSwitch, {
    [styles.inactive]: !sweActive,
    [styles.active]: sweActive,
  });
  return (
    <Col>
      <Row>
        <Link to={`${PawsUrl.Ukrainian}?referrer=${location.pathname}`} className={ukrSwitchStyle}>
          Українська
        </Link>
      </Row>
      <Row>
        <Link to={`${PawsUrl.English}?referrer=${location.pathname}`} className={engSwitchStyle}>
          English
        </Link>
      </Row>
      <Row>
        <Link to={`${PawsUrl.Swedish}?referrer=${location.pathname}`} className={sweSwitchStyle}>
          Svenska
        </Link>
      </Row>
    </Col>
  );
};

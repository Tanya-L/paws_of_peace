import React, { FC } from "react";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../../components/langSwitcher/LangSwitcher";
import { Button } from "react-bootstrap";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "Not authenticated": "Ви хто?",
    "Log in with Google": "Увійти через Google",
  },
  [PawsLanguage.Swe]: {},
  [PawsLanguage.Eng]: {},
};

interface DashboardUnauthenticatedProps {
  doLogin: () => void;
}

export const DashboardUnauthenticated: FC<DashboardUnauthenticatedProps> = ({
  doLogin,
}) => {
  const { translate } = useTranslate(strings);
  return (
    <div>
      <h3>{translate("Not authenticated")}</h3>
      <Button onClick={doLogin}>{translate("Log in with Google")}</Button>
    </div>
  );
};

import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";
import React, { FC } from "react";
import { getPersonsCount } from "../../model/person";
import { getHelpRequestsCount } from "../../model/helpRequest";
import { getBoxesCount } from "../../model/box";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../../components/langSwitcher/LangSwitcher";
import { useQuery } from "../../components/backoffice/pawsFirebase";
import { PawsUrl } from "../../site-const";
import { Link } from "react-router-dom";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {
    "text.authAs": "Ви увійшли як",
    "link.helpRequestsUnapproved": "Не схвалені запити на допомогу",
  },
  [PawsLanguage.Swe]: {
    "text.authAs": "Du är inloggad som",
    "link.helpRequestsUnapproved": "Ej godkända hjälpbegäran",
  },
  [PawsLanguage.Eng]: {
    "text.authAs": "You are logged in as",
    "link.helpRequestsUnapproved": "Unapproved help requests",
  },
};

interface DashboardAuthenticatedProps {
  app: FirebaseApp;
  authUser: User;
}

// const router = createHashRouter([]);

export const DashboardAuthenticated: FC<DashboardAuthenticatedProps> = ({
  authUser,
  app,
}) => {
  const { translate } = useTranslate(strings);

  const { data: personCount, isLoading: isPersonCountLoading } = useQuery(
    () => getPersonsCount(app),
    "personCount"
  );

  const { data: helpRequestCount, isLoading: isHelpRequestCountLoading } =
    useQuery(() => getHelpRequestsCount(app), "helpRequestCount");

  const { data: boxCount, isLoading: isBoxCountLoading } = useQuery(
    () => getBoxesCount(app),
    "boxCount"
  );

  return (
    <>
      <div>
        {translate("text.authAs")} {authUser.displayName}
      </div>
      {!isPersonCountLoading && <div>Contact Persons: {personCount}</div>}
      {!isBoxCountLoading && <div>Boxes: {boxCount}</div>}
      {!isHelpRequestCountLoading && (
        <div>
          Help Requests: {helpRequestCount} (
          <Link to={PawsUrl.BackofficeHelpRequestsUnapproved}>
            {translate("link.helpRequestsUnapproved")}
          </Link>
          )
        </div>
      )}
    </>
  );
};

import { FirebaseApp } from "firebase/app";
import React, { FC } from "react";
import {
  getUnapprovedHelpRequests,
  MHelpRequest,
} from "../../../model/helpRequest";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../../../components/langSwitcher/LangSwitcher";
import {
  useFirebaseAuth,
  useQuery,
} from "../../../components/backoffice/pawsFirebase";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: {},
  [PawsLanguage.Swe]: {},
  [PawsLanguage.Eng]: {},
};

interface BackofficeHelpRequestsUnapprovedProps {
  app: FirebaseApp;
  //   authUser: User;
}

export const BackofficeHelpRequestsUnapproved: FC<
  BackofficeHelpRequestsUnapprovedProps
> = ({ app }) => {
  // const { authUser, doLogin } = useFirebaseAuth(app);
  const { translate } = useTranslate(strings);

  // const { data: unapproved, isLoading: isUnapprovedLoading } = useQuery(
  //   () => getUnapprovedHelpRequests(app),
  //   "unapproved"
  // );
  const unapproved: MHelpRequest[] = [];
  const isUnapprovedLoading = false;
  console.log("Rerender: Unapproved");

  return (
    <div>
      <h1>Unapproved List</h1>

      {isUnapprovedLoading && <div>Loading...</div>}

      {unapproved && unapproved.length === 0 && (
        <div>No unapproved requests</div>
      )}

      {unapproved &&
        unapproved.map((helpRequest) => <div>Help? {helpRequest.region}</div>)}
    </div>
  );
};

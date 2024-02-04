import React, { FC } from "react";
import {
  useFirebaseApp,
  useFirebaseAuth,
} from "../../components/backoffice/pawsFirebase";
import { DashboardUnauthenticated } from "./DashboardUnauthenticated";
import { DashboardAuthenticated } from "./DashboardAuthenticated";
import { FirebaseApp } from "firebase/app";

interface BackofficeDashboardProps {
  app: FirebaseApp;
}

export const BackofficeDashboard: FC<BackofficeDashboardProps> = ({ app }) => {
  const { authUser, doLogin } = useFirebaseAuth(app);

  return (
    <div>
      <h1>Backoffice Dashboard</h1>
      {authUser && <DashboardAuthenticated authUser={authUser} app={app} />}
      {!authUser && <DashboardUnauthenticated doLogin={doLogin} />}
    </div>
  );
};

import React, { FC } from "react";
import { DashboardUnauthenticated } from "./DashboardUnauthenticated";
import { DashboardAuthenticated } from "./DashboardAuthenticated";
import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";

interface BackofficeDashboardProps {
  app: FirebaseApp;
  authUser: User | null | undefined;
  doLogin: () => void;
}

export const BackofficeDashboard: FC<BackofficeDashboardProps> = ({
  app,
  authUser,
  doLogin,
}) => {
  return (
    <div>
      <h1>Backoffice Dashboard</h1>
      {authUser && <DashboardAuthenticated authUser={authUser} app={app} />}
      {!authUser && <DashboardUnauthenticated doLogin={doLogin} />}
    </div>
  );
};

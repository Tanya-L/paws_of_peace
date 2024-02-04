import React, { FC, useState } from "react";
import {
  useFirebaseApp,
  useFirebaseAuth,
} from "../../components/backoffice/pawsFirebase";
import { Button } from "react-bootstrap";
import { User } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { getPersonsCount } from "../../model/person";
import { getHelpRequestsCount } from "../../model/helpRequest";
import { getBoxesCount } from "../../model/box";

interface DashboardUnauthenticatedProps {
  doLogin: () => void;
}

const DashboardUnauthenticated: FC<DashboardUnauthenticatedProps> = ({
  doLogin,
}) => (
  <div>
    <h3>Not authenticated</h3>
    <Button onClick={doLogin}>Log in with Google</Button>
  </div>
);

interface DashboardAuthenticatedProps {
  app: FirebaseApp;
  authUser: User;
}

const DashboardAuthenticated: FC<DashboardAuthenticatedProps> = ({
  authUser,
  app,
}) => {
  const [personCount, setPersonCount] = useState(0);
  getPersonsCount(app)
    .then((count) => setPersonCount(count))
    .catch(console.error);

  const [helpRequestCount, setHelpRequestCount] = useState(0);
  getHelpRequestsCount(app)
    .then((count) => setHelpRequestCount(count))
    .catch(console.error);

  const [boxCount, setBoxCount] = useState(0);
  getBoxesCount(app)
    .then((count) => setBoxCount(count))
    .catch(console.error);

  return (
    <>
      <div>Authenticated as {authUser.displayName}</div>
      <div>Contact Persons: {personCount}</div>
      <div>Help Requests: {helpRequestCount}</div>
      <div>Boxes: {boxCount}</div>
    </>
  );
};

export const BackofficeDashboard = () => {
  const app = useFirebaseApp();
  const { authUser, doLogin } = useFirebaseAuth(app);

  return (
    <div>
      <h1>Backoffice Dashboard</h1>
      {authUser && <DashboardAuthenticated authUser={authUser} app={app} />}
      {!authUser && <DashboardUnauthenticated doLogin={doLogin} />}
    </div>
  );
};

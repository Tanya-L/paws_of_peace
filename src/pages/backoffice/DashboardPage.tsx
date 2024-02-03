import React from "react";
import {
  useFirebaseApp,
  useFirebaseAuth,
} from "../../components/backoffice/pawsFirebase";
import { Button } from "react-bootstrap";

export const BackofficeDashboard = () => {
  const app = useFirebaseApp();
  const { userCred, doLogin } = useFirebaseAuth(app);

  return (
    <div>
      <h1>Backoffice Dashboard</h1>
      {userCred && <div>Authenticated as {userCred.user.displayName}</div>}
      {!userCred && (
        <div>
          <h3>Not authenticated</h3>
          <Button onClick={doLogin}>Log in with Google</Button>
        </div>
      )}
    </div>
  );
};

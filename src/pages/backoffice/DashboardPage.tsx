import React from "react";
import {
  useFirebase,
  useFirebaseAuth,
} from "../../components/backoffice/pawsFirebase";

export const BackofficeDashboard = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  const app = useFirebase();
  const auth = useFirebaseAuth(app);

  return (
    <div>
      <h1>Backoffice Dashboard</h1>
      {auth.currentUser && (
        <div>Authenticated as {auth.currentUser.displayName}</div>
      )}
      {!auth.currentUser && <div>Not authenticated</div>}
    </div>
  );
};

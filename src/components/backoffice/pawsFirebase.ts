import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export const useFirebase = () => {
  const location = useLocation();
  const dev = process.env.REACT_APP_DEV === "1";

  const firebaseConfig = {
    apiKey: "AIzaSyDdVkMsfmWoy0HPcXiybLqIvaS62ZI1FX0",
    authDomain: dev ? "localhost:3000" : "pawsofpeace.se",
    projectId: "paws-of-peace",
    storageBucket: "paws-of-peace.appspot.com",
    messagingSenderId: "35895836921",
    appId: "1:35895836921:web:d4fec386893e7fb356e228",
    measurementId: "G-8Y708HDYBX",
  };
  return useMemo(() => {
    return initializeApp(firebaseConfig);
  }, []);
};

export const useFirebaseAuth = (app: FirebaseApp) => {
  const [auth, setAuth] = useState(getAuth(app));

  useEffect(() => {
    const updatedAuth = getAuth(app);

    if (auth.currentUser === null) {
      const provider = new GoogleAuthProvider();
      provider.addScope("email");
      // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      signInWithRedirect(auth, provider);
    } else {
      getRedirectResult(auth)
        .then((result) => {
          if (result === null) {
            throw new Error("No result from Google redirect");
          }
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);

          if (credential === null) {
            throw new Error("No credential received from Google redirect");
          }
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result?.user;
          // IdP data available using getAdditionalUserInfo(result)
          console.log("success auth=", auth);
          setAuth(updatedAuth);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.log("Auth redirect failed=", error);
        });
    }
  }, [app]);

  return auth;
};

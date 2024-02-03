import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { useMemo, useState } from "react";

export const useFirebaseApp = () => {
  // const dev = process.env.REACT_APP_DEV === "1";

  const firebaseConfig = {
    apiKey: "AIzaSyDdVkMsfmWoy0HPcXiybLqIvaS62ZI1FX0",
    // authDomain: dev ? "localhost:3000" : "pawsofpeace.se",
    authDomain: "paws-of-peace.firebaseapp.com",
    projectId: "paws-of-peace",
    storageBucket: "paws-of-peace.appspot.com",
    messagingSenderId: "35895836921",
    appId: "1:35895836921:web:d4fec386893e7fb356e228",
    measurementId: "G-8Y708HDYBX",
  };
  return useMemo(() => initializeApp(firebaseConfig), []);
};

export const useFirebaseAuth = (app: FirebaseApp) => {
  // const [oauthCred, setOauthCred] = useState<OAuthCredential | null>(null);
  // Undefined = waiting for login
  // Null = login failed
  const [userCred, setUserCred] = useState<UserCredential | null | undefined>(
    undefined
  );

  const doLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");

    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // setOauthCred(credential);
        setUserCred(result);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // setOauthCred(null);
        setUserCred(null);
        // TODO: Report error to user
      });
  };

  return { userCred, doLogin };
};

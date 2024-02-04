import { FirebaseApp, initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useEffect, useMemo, useState } from "react";

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
  const [authUser, setAuthUser] = useState<User | null | undefined>(undefined);

  const auth = getAuth(app);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setAuthUser(user);
    }
  });

  const doLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");

    const doSignin = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // setOauthCred(credential);
          setAuthUser(result.user);
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
          setAuthUser(null);
          // TODO: Report error to user
        });
    };
    setPersistence(auth, browserLocalPersistence)
      .then(doSignin)
      .catch(console.log);
  };

  return { authUser, doLogin };
};

export const useQuery = <T>(
  createPromise: () => Promise<T>,
  debugName: string
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | undefined | null>(undefined);

  useEffect(() => {
    createPromise()
      .then((newData) => {
        console.log(`Result for query ${debugName}:`, newData);
        setData(newData);
      })
      .catch((err) => {
        console.error(err);
        setData(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};

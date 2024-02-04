import {
  getFirestore,
  query,
  collection,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

export const getHelpRequestsCount = async (app: FirebaseApp) => {
  const db = getFirestore(app);
  // const qry = query(collection(db, "requests"));
  // const querySnapshot = await getDocs(qry);
  // return querySnapshot.size;
  const helpRequests = collection(db, "requests");
  const snapshot = await getCountFromServer(helpRequests);
  return snapshot.data().count;
};

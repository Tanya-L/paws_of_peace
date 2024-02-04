import {
  collection,
  getCountFromServer,
  getFirestore,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

export const getPersonsCount = async (app: FirebaseApp) => {
  const db = getFirestore(app);
  // const qry = query(collection(db, "persons"));
  // const querySnapshot = await getDocs(qry);
  // return querySnapshot.size;
  const persons = collection(db, "persons");
  const snapshot = await getCountFromServer(persons);
  return snapshot.data().count;
};

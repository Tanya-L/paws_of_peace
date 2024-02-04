import {
  collection,
  getCountFromServer,
  getFirestore,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

export const getBoxesCount = async (app: FirebaseApp) => {
  const db = getFirestore(app);
  // const qry = query(collection(db, "persons"));
  // const querySnapshot = await getDocs(qry);
  // return querySnapshot.size;
  const boxes = collection(db, "boxes");
  const snapshot = await getCountFromServer(boxes);
  return snapshot.data().count;
};

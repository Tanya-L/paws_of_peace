import {
  getFirestore,
  query,
  where,
  collection,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

export interface MBoxStatusCounts {
  created: number;
  packed: number;
  packing: number;
  rapported: number;
  recived: number;
  sended: number;
  storage: number;
}

export interface MHelpRequest {
  boxStatusCounts: MBoxStatusCounts;
  city: string;
  comments: string;
  isProxy: boolean;
  isRepeat: boolean;
  isUrgent: boolean;
  name: string;
  surname: string;
  organizationName: string;
  personId: string;
  region: string;
  timestamp: string;
  backofficeApproval?: boolean;
}

export const getHelpRequestsCount = async (app: FirebaseApp) => {
  const db = getFirestore(app);
  const helpRequests = collection(db, "requests");
  const snapshot = await getCountFromServer(helpRequests);
  return snapshot.data().count;
};

export const getUnapprovedHelpRequests = async (app: FirebaseApp) => {
  const db = getFirestore(app);
  const qry = query(
    collection(db, "requests"),
    where("backofficeApproval", "!=", true)
  );
  const snapshot = await getDocs(qry);
  return snapshot.docs.map((doc) => doc.data() as MHelpRequest);
};

export const getApprovedHelpRequests = async (app: FirebaseApp) => {
  const db = getFirestore(app);
  const qry = query(
    collection(db, "requests")
    // where("backofficeApproval", "==", true)
  );
  const snapshot = await getDocs(qry);
  return snapshot.docs.map((doc) => doc.data() as MHelpRequest);
};

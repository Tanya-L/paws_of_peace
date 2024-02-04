import { FirebaseApp } from "firebase/app";
import React, { FC } from "react";
import {
  getUnapprovedHelpRequests,
  MHelpRequest,
} from "../../../model/helpRequest";
import {
  PawsLangStrings,
  PawsLanguage,
  useTranslate,
} from "../../../components/langSwitcher/LangSwitcher";
import { useQuery } from "../../../components/backoffice/pawsFirebase";
import { User } from "firebase/auth";
import { DashboardUnauthenticated } from "../DashboardUnauthenticated";
import { Badge, Col, Row } from "react-bootstrap";
import styles from "./HelpRequest.module.css";

const strings: PawsLangStrings = {
  [PawsLanguage.Ukr]: { Urgent: "Терміново", Repeat: "Повторно" },
  [PawsLanguage.Swe]: {},
  [PawsLanguage.Eng]: {},
};

export const UnapprovedList = ({ data }: { data: MHelpRequest[] }) => {
  const { translate } = useTranslate(strings);
  return (
    <>
      {data.map((helpRequest) => (
        <Row className={styles.pawsRow}>
          <Col sm={2} lg={2} className="p-1">
            <small>
              {helpRequest.city}; {helpRequest.region}
            </small>
            {/*<br />*/}
            {/*{helpRequest.timestamp.toDate().toDateString()}*/}
          </Col>
          <Col sm={2} lg={2} className="p-1">
            {helpRequest.surname}
            {helpRequest.organizationName
              ? " (" + helpRequest.organizationName + ")"
              : ""}
          </Col>
          <Col sm={8} lg={8} className="p-1">
            {helpRequest.isUrgent && (
              <Badge bg="danger">{translate("Urgent")}</Badge>
            )}
            {helpRequest.isRepeat && (
              <Badge bg="info">{translate("Repeat")}</Badge>
            )}
            {helpRequest.comments}
          </Col>
        </Row>
      ))}
    </>
  );
};

interface BackofficeHelpRequestsUnapprovedProps {
  app: FirebaseApp;
  authUser: User | null | undefined;
  doLogin: () => void;
}

export const BackofficeHelpRequestsUnapproved: FC<
  BackofficeHelpRequestsUnapprovedProps
> = ({ app, authUser, doLogin }) => {
  // const { authUser, doLogin } = useFirebaseAuth(app);
  const { translate } = useTranslate(strings);

  const { data: unapproved, isLoading: isUnapprovedLoading } = useQuery(
    () => getUnapprovedHelpRequests(app),
    "unapproved"
  );

  if (!authUser) {
    return <DashboardUnauthenticated doLogin={doLogin} />;
  }

  return (
    <div>
      <h1>Unapproved List</h1>

      {isUnapprovedLoading && <div>Loading...</div>}

      {unapproved && unapproved.length === 0 && (
        <div>No unapproved requests</div>
      )}

      {unapproved && (
        <div className={styles.pawsTable}>
          <UnapprovedList data={unapproved} />
        </div>
      )}
    </div>
  );
};

import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const errorToMessage = (): string => {
    if (isRouteErrorResponse(error)) {
      return error.statusText;
    }
    console.error(error);
    return "Unknown error";
  };
  const message = errorToMessage();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
}

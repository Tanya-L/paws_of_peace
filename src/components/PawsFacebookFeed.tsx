import React from "react";
import { pawsFacebook } from "../site-const";
import { Link } from "react-router-dom";

export const PawsFacebookScript = () => {
  return (
    <>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v19.0&appId=2002014006860894"
        nonce="RxrUeD2O"
      ></script>
    </>
  );
};

// Requires PawsFacebookScript to be included in the page
export const PawsFacebookFeed = () => {
  // From: https://developers.facebook.com/docs/plugins/page-plugin/
  return (
    <div
      className="fb-page"
      data-href={pawsFacebook}
      data-tabs="timeline"
      data-width=""
      data-height=""
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote cite={pawsFacebook} className="fb-xfbml-parse-ignore">
        <Link to={pawsFacebook}>Facebook</Link>
      </blockquote>
    </div>
  );
};

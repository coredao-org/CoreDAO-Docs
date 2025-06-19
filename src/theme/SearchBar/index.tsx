import React from "react";
import SearchBar from "@theme-original/SearchBar";
import AskCookbook from "@cookbookdev/docsbot/react";
import BrowserOnly from "@docusaurus/BrowserOnly";

/** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2ExNjZlN2Y4MTAzY2QxMjg4NDQ0MGMiLCJpYXQiOjE3Mzg2MzA4ODcsImV4cCI6MjA1NDIwNjg4N30.MoUziaM2dGeFiqa-L1xpqtZDh6Fbo_6invv8ah1DKSU";

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <BrowserOnly>
        {() => <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />}
      </BrowserOnly>
    </>
  );
}
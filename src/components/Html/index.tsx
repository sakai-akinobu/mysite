import * as React from "react";

import App from "../App";
import Head from "../Head";

export default function Html() {
  return (
    <>
      <html lang="en">
        <Head />
        <body>
          <div id="app">
            <App />
          </div>
        </body>
      </html>
    </>
  );
}

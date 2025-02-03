import React from "react";
import "@/styles/globals.css";
import LandingPage from "./page"
const Layout = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Notori App</title>
      </head>
      <body>
          <LandingPage />
      </body>
    </html>
  );
};

export default Layout;

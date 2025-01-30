import React from "react";
import "./globals.css";
import Home from "./page";
const Layout = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Notori App</title>

      </head>
      <body>
          <Home />
      </body>
    </html>
  );
};

export default Layout;

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <Auth0Provider
            domain="dev-dimu3wu6.jp.auth0.com"
            clientId="ECZzt25kklcRYetqb3iY4R2lSTamr5NB"
            authorizationParams={{
              redirect_uri: window.location.origin,
              audience: "https://dev-dimu3wu6.jp.auth0.com/api/v2/",
              scope: "read:current_user update:current_user_metadata"
            }}
          >
            <App />
          </Auth0Provider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

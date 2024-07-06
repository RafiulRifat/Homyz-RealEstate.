import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core"; // Import MantineProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nd033evpaevcdumb.us.auth0.com"
      clientId="EW11cc0AdiEhxj8oNRFsptnO4ndfN3Zd"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <MantineProvider>
        {" "}
        {/* Wrap MantineProvider around Auth0Provider */}
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);

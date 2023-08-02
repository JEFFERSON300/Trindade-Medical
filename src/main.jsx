import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { GlobalStyle } from "./global.style.jsx";
import { AuthProvider } from "./contexts/auth/auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <editRegisterPatientProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </editRegisterPatientProvider>
  </React.StrictMode>
);

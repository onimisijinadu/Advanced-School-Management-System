import "./index.css";

import React from "react";

import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { AuthProvider } from "./context/useContext.jsx";

import { ToastProvider } from "./context/useContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>,
);

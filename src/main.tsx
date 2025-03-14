import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/Style/index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

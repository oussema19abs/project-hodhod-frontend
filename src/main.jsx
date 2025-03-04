import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Register the service worker
// Ensure service worker exists before registering
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    serviceWorkerRegistration
      .register()
      .then(() => console.log("Service Worker Registered"))
      .catch((error) =>
        console.error("Service Worker Registration Failed:", error)
      );
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

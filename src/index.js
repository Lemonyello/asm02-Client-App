import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BookingContextProvider from "./store/BookingContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BookingContextProvider>
    <App />
  </BookingContextProvider>
);

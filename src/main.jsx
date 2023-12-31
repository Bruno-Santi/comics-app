import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import { NavBar } from "./components";
import { AppRoutes } from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

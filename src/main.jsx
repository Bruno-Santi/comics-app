import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Favorites, ComicDetail } from "./pages";
import store from "./redux/store";
import { Provider } from "react-redux";
import { NavBar } from "./components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comics/:id' element={<ComicDetail />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

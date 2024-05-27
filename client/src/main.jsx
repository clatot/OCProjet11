import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import "./styles/main.css";
import SignIn from "./pages/SignIn/signIn.jsx";
import User from "./pages/User/user.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

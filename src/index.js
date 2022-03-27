import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserPage from "./UserPage";

ReactDOM.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route index element={<Home />} />
          <Route path="/userProfil" element={<UserPage/>} />
        </Routes>
      </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

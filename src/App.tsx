import React from "react";
import "./App.scss";
// import { Login } from "./components/login/login";
// import { ForgotPassword } from "./components/forgot-password/forgot-password";
import { ResetPassword } from "./components/reset-password/reset-password";

export const App = () => {
  return (
    <div className="app">
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      <ResetPassword />
    </div>
  );
};

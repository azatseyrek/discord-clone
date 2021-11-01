import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "./firebase";

import "./Login.css";

const Login = () => {
  const signIn = () => {
    //db google login
    auth.signInWithPopup(provider)
        .catch((error) => {
            alert(error.message)
        })
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo-1.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>
        Sign In With <Google className="google__icon" />
      </Button>
    </div>
  );
};

export default Login;

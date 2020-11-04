import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    // Google Login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
          alt="Discord Logo"
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
    //This a login page to login with google we have to use signInWithPopup() method
    //create a signIn Function
        //Google login


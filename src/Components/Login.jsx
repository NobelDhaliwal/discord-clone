import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase";
// we are going to import auth and provider from our local firebase file
import React from "react";
import "./Login.css";

const Login=()=> {
   /*Authenticate with Firebase using the Google provider object. 
    You can prompt your users to sign in with their Google Accounts either by 
    opening a pop-up window or by redirecting to the sign-in page. 
    The redirect method is preferred on mobile devices.*/ 
  const signIn = () => {
    // Google Login
   //To sign in with a pop-up window, call signInWithPopup:
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
};

export default Login;
    //This a login page to login with google we have to use signInWithPopup() method
    //create a signIn Function
        //Google login


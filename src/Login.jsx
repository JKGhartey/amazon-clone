import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = async (e) => {
    e.preventDefault();
    setError("")
    try {
await signUp (email, password);
navigate("/")
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="logo2.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign in
          </button>
          <p>
            By signing in you agree to Amazon's Clone Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookie Notice and our
            Interest-Based Ads Notice
          </p>

          <button className="login__registerButton" onClick={register}>
            Create your account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

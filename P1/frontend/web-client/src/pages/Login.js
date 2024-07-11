import React from "react";
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <>
      <div>
        <span className="login-logo"><img src="assets/logo.svg" alt="logo"/></span>

        <form className="login-form">
          <div>
            <h1>Login</h1>

            <label>
              <input
                id="login-email"
                name="email"
                type="email"
                placeholder="Enter Email Address"/>
            </label>

            <label>
              <input
                id="login-password"
                name="password"
                type="password"
                placeholder="Enter Password"/>
            </label>

            <button type="submit">Login to your account</button>

            <span className="login-link">Don't have an account? <Link to="/signup">Sign Up</Link></span>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;

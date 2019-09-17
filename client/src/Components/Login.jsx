import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

// This component handles our login form and has a link to the register form
const Login = props => {
  return (
    <div>
      <h2 className="login-title">Login</h2>
      <hr />
      <form
        onSubmit={e => {
          e.preventDefault();
          props.handleLogin();
        }}
      >
        <p className="login-instr">Please enter your user name</p>
        <input
          className="login-input"
          name="name"
          type="text"
          value={props.formData.name}
          onChange={props.handleChange}
        />
        <p className="login-instr">Password:</p>
        <input
          className="login-input"
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <hr />
        <button className="login-bttn">Login</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;

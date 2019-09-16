import React from "react";
import { Link } from "react-router-dom";

// This component handles our login form and has a link to the register form
const Login = props => {
  return (
    <div>
      <h2>login</h2>
      <hr />
      <form
        onSubmit={e => {
          e.preventDefault();
          props.handleLogin();
         
        }}
      >
        <p>Please enter your user name</p>
        <input
          name="name"
          type="text"
          value={props.formData.name}
          onChange={props.handleChange}
        />
        <p>Password:</p>
        <input
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <hr />
        <button>Login</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
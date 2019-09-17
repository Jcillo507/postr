import React from "react";
import { withRouter } from "react-router-dom";

import './signup.css'

// This component handles our register form
const Signup = props => {
  return (
    <div>
      <h2 className="signup-title">Register</h2>
      <hr />
      <form onSubmit={props.handleSignup}>
        <p className="signup-instr">Username:</p>
        <input
          className="signup-input"
          name="name"
          type="text"
          value={props.formData.name}
          onChange={props.handleChange}
        />
        <p className="signup-instr">Email:</p>
        <input
          className="signup-input"
          name="email"
          type="text"
          value={props.formData.email}
          onChange={props.handleChange}
        />
        <p className="signup-instr">Password:</p>
        <input
          className="signup-input"
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <hr />
        <button className="signup-bttn">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);

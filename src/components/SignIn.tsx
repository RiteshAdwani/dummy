import React from "react";

const SignIn = () => {
  return (
    <div className="signin-wrapper d-flex justify-content-center align-items-center text-center">
      <div className="signin-form py-4 px-3">
        <div className="signin d-flex flex-column text-center">
          <p className="mb-1 fs-4">Sign In</p>
          <p className="fs-5">to continue to ViewTube</p>
          <input type="text" placeholder="username" className="signin-form-field"/>
          <input type="text" placeholder="password" className="signin-form-field" />
          <button className="signin-btn my-2">Sign In</button>
        </div>
        <p className="fs-5 mb-1">Or</p>
        <div className="signup d-flex flex-column">
          <input type="text" placeholder="username" className="signin-form-field"/>
          <input type="text" placeholder="email" className="signin-form-field"/>
          <input type="text" placeholder="password" className="signin-form-field" />
          <button className="signup-btn mt-2">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

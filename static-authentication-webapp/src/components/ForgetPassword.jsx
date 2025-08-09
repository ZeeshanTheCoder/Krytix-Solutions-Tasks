import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/change-password"); 
  };

  return (
    <>
      <div className="auth-container" id="set-password">
        <div className="auth-form">
          <h2>Forgot your password?</h2>
          <p>
            Don't worry, happens to all of us. Enter your email below to recover
            your password
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>

          <div className="divider">
            <span>Or Login with</span>
          </div>

          <div className="socials-icons">
            <NavLink to="/dashboard" className="icon-box">
              <img src="/icons/facebook.png" alt="Facebook" />
            </NavLink>
            <NavLink to="/dashboard" className="icon-box">
              <img src="/icons/google.png" alt="Google" />
            </NavLink>
            <NavLink to="/dashboard" className="icon-box">
              <img src="/icons/apple.png" alt="Apple" />
            </NavLink>
          </div>
        </div>
        <div className="auth-image">
          <img
            src="/images/ForgotPasswordIcon.png"
            alt="Forgot Password Illustration"
          />
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;

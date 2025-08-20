import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch(
        "https://os-project-server.vercel.app/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.status === 200) {
        alert("OTP sent successfully!");
        navigate("/change-password");
      } else if (response.status === 404) {
        alert("User not found.");
      } else {
        alert("Error sending OTP. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
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
              disabled={loading} // disable input while loading
            />
            <input
              type="submit"
              value={loading ? "Submitting..." : "Submit"} // show loading text
              disabled={loading} // disable button while loading
            />
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

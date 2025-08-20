import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://os-project-server.vercel.app/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            newPassword,
          }),
        }
      );

      if (response.status === 200) {
        alert("Password updated successfully!");
        navigate("/login");
      } else if (response.status === 400) {
        setError("Invalid OTP.");
      } else if (response.status === 404) {
        setError("User not found.");
      } else {
        setError("Internal server error. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth-container" id="set-password">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Change your password</h2>
          <p>Please set a new password for your account.</p>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <input
            type="text"
            placeholder="Enter OTP"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Enter new password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={loading}
          />
          <input
            type="submit"
            value={loading ? "Changing..." : "Change password"}
            disabled={loading}
          />
        </form>

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

export default ChangePassword;

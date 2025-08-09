import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const payload = {
      username: formData.userName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(
        "https://os-project-server.vercel.app/auth/newuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status === 201) {

        navigate("/login");
      } else if (response.status === 400) {
        setError("Bad request: Missing fields");
      } else if (response.status === 500) {
        setError("Internal server error. Please try again later.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="auth-container" id="signup">
        <div className="auth-image" style={{ marginTop: "20px" }}>
          <img src="/images/signupIcon.png" alt="Signup Illustration" />
        </div>
        <div className="auth-form">
          <h2>Sign Up</h2>
          <p>
            Let's get you all set up so you can access your personal account.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              required
              value={formData.userName}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreed"
                required
                checked={formData.agreed}
                onChange={handleChange}
              />{" "}
              I agree to all the
              <NavLink to="#"> Terms </NavLink> and{" "}
              <NavLink to="#"> Privacy Policies</NavLink>
            </label>

            <br />
            <br />
            <input
              type="submit"
              value={loading ? "Creating account..." : "Create account"}
              disabled={loading}
            />

            <div className="form-footer">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </div>
          </form>

          <div className="divider">
            <span>Or Sign up with</span>
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
      </div>
    </>
  );
}

export default Signup;

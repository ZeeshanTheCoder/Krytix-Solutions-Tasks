  import React, { useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";

  function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      setError("");
      setLoading(true);

      const payload = {
        username: username,
        password: password,
      };

      const rememberMe = e.target.rememberMe.checked; 

      try {
        const response = await fetch(
          "https://os-project-server.vercel.app/auth/existinguser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.status === 200) {
          const data = await response.json();

          if (rememberMe) {
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("username", username);
          } else {
            sessionStorage.setItem("authToken", data.token);
            localStorage.setItem("username", username);
          }

          navigate("/", { state: { username } });
        } else if (response.status === 401) {
          setError("Authentication failed. Please check your credentials.");
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
        <div className="auth-container" id="login">
          <div className="auth-form">
            <h2>Login</h2>
            <p>Login to access your account</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label className="checkbox-label">
                  <input type="checkbox" name="rememberMe" /> Remember me
                </label>
                <NavLink to="/forgot-password">Forgot Password?</NavLink>
              </div>
              <br />
              <input
                type="submit"
                value={loading ? "Logging in..." : "Login"}
                disabled={loading}
              />
              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
              )}
            </form>
            <div className="form-footer">
              Don’t have an account? <NavLink to="/signup">Sign up</NavLink>
            </div>

            <div className="divider">
              <span>Or Login with</span>
            </div>

            <div className="socials-icons">
              <NavLink to="/" className="icon-box">
                <img src="/icons/facebook.png" alt="Facebook" />
              </NavLink>
              <NavLink to="/" className="icon-box">
                <img src="/icons/google.png" alt="Google" />
              </NavLink>
              <NavLink to="/" className="icon-box">
                <img src="/icons/apple.png" alt="Apple" />
              </NavLink>
            </div>
          </div>
          <div className="auth-image">
            <img src="/images/loginIcon.png" alt="Login Illustration" />
          </div>
        </div>
      </>
    );
  }

  export default Login;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <>
      <div className="auth-container" id="login">
        <div className="auth-form">
          <h2>Login</h2>
          <p>Login to access your account</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="checkbox-label">
                <input type="checkbox" /> Remember me
              </label>
              <NavLink to="/forget-password">Forgot Password?</NavLink>
            </div>
            <br />
            <input type="submit" value="Login" />
          </form>
          <div className="form-footer">
            Don’t have an account? <NavLink to="/signup">Sign up</NavLink>
          </div>

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
          <img src="/images/loginIcon.png" alt="Login Illustration" />
        </div>
      </div>
    </>
  );
}

export default Login;

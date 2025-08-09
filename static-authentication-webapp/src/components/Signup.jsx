import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error while typing
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // TODO: Send to backend here if needed

    navigate('/login');
  };

  return (
    <>
      <div className="auth-container" id="signup">
        <div className="auth-image" style={{ marginTop: '20px' }}>
          <img src="/images/signupIcon.png" alt="Signup Illustration" />
        </div>
        <div className="auth-form">
          <h2>Sign up</h2>
          <p>Let's get you all set up so you can access your personal account.</p>
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {/* Show validation error if passwords don't match */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreed"
                required
                checked={formData.agreed}
                onChange={handleChange}
              />{' '}
              I agree to all the
              <NavLink to="#"> Terms </NavLink> and <NavLink to="#"> Privacy Policies</NavLink>
            </label>

            <br />
            <input type="submit" value="Create account" />

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

import React from 'react'
import { NavLink } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className="auth-container" id="signup">
        <div className="auth-image" style={{ marginTop: '20px' }}>
          <img src="/images/signupIcon.png" alt="Signup Illustration" />
        </div>
        <div className="auth-form">
          <h2>Sign up</h2>
          <p>Let's get you all set up so you can access your personal account.</p>
          <form action="/login" className="form-grid">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
            </div>

            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />

            <label className="checkbox-label">
              <input type="checkbox" required /> I agree to all the
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
  )
}

export default Signup

import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="auth-container" >
        <div className="auth-form">
          <h2>Welcome Back, User!</h2>
          <p>You're successfully logged in. Here's your dashboard overview:</p>

          <div className="form-grid" style={{ marginTop: "2rem" }}>
            <div className="form-row">
              <div className="icon-box">
                <NavLink to="/" className="home-btn">
                  👤 Profile
                </NavLink>
              </div>
              <div className="icon-box">
                <NavLink to="/" className="home-btn">
                  ⚙️ Settings
                </NavLink>
              </div>
              <div className="icon-box">
                <NavLink to="/" className="home-btn">
                  ✉️ Messages
                </NavLink>
              </div>
              <div className="icon-box">
                <NavLink to="/" className="home-btn">
                  🛠 Support
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-image">
          <img src={`/images/dashboardIcon.png`} alt="Dashboard" />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
